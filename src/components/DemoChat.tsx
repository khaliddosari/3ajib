import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export interface Recommendation {
  title: string;
  metric: string;
  icon: string;
  feasibility: number;
  impact: number;
  description?: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface DemoChatProps {
  onRecommendations: (recs: Recommendation[]) => void;
  destinationContext: {
    destination: string;
    customDestination: string;
    audience: string;
    customAudience: string;
    goals: string[];
    customGoal: string;
  };
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-recommendations`;

function parseRecommendations(text: string): Recommendation[] | null {
  const match = text.match(/<recommendations>([\s\S]*?)<\/recommendations>/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function stripRecommendationTags(text: string): string {
  return text.replace(/<recommendations>[\s\S]*?<\/recommendations>/g, '').trim();
}

function parseOptions(text: string): { textBefore: string; options: string[]; textAfter: string } | null {
  const lines = text.split('\n');
  const optionLines: number[] = [];
  
  lines.forEach((line, i) => {
    if (/^\s*\d+\.\s+/.test(line)) optionLines.push(i);
  });
  
  if (optionLines.length < 2) return null;
  
  const first = optionLines[0];
  const last = optionLines[optionLines.length - 1];
  
  const textBefore = lines.slice(0, first).join('\n').trim();
  const textAfter = lines.slice(last + 1).join('\n').trim();
  const options = optionLines.map(i => lines[i].replace(/^\s*\d+\.\s+/, '').trim());
  
  return { textBefore, options, textAfter };
}

function AssistantMessage({ content, onOptionClick, isLatest }: { content: string; onOptionClick: (text: string) => void; isLatest: boolean }) {
  const parsed = parseOptions(content);
  
  if (!parsed || !isLatest) {
    return (
      <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1 [&>ul]:mb-1">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
  }
  
  return (
    <div>
      {parsed.textBefore && (
        <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1 mb-2">
          <ReactMarkdown>{parsed.textBefore}</ReactMarkdown>
        </div>
      )}
      <div className="flex flex-wrap gap-1.5 mt-1">
        {parsed.options.map((opt) => (
          <button
            key={opt}
            onClick={() => onOptionClick(opt)}
            className="text-xs px-3 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 hover:bg-secondary/25 transition-colors text-left"
          >
            {opt}
          </button>
        ))}
      </div>
      {parsed.textAfter && (
        <div className="prose prose-sm prose-invert max-w-none [&>p]:mb-1 mt-2">
          <ReactMarkdown>{parsed.textAfter}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default function DemoChat({ onRecommendations, destinationContext }: DemoChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const buildContextMessage = useCallback(() => {
    const { destination, customDestination, audience, customAudience, goals, customGoal } = destinationContext;
    const dest = customDestination || destination;
    const aud = customAudience || audience;
    const goalList = goals.filter(g => g !== 'other').join(', ') + (customGoal ? `, ${customGoal}` : '');
    return `[Context: Destination type: ${dest}, Target audience: ${aud}, Goals: ${goalList}]`;
  }, [destinationContext]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text };
    const contextPrefix = messages.length === 0 ? buildContextMessage() + '\n\n' : '';
    const fullMessages = [...messages, { role: 'user' as const, content: contextPrefix + text }];

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    let assistantContent = '';

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: fullMessages }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(err.error || 'Request failed');
      }

      const reader = resp.body?.getReader();
      if (!reader) throw new Error('No stream');
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIdx: number;
        while ((newlineIdx = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIdx);
          buffer = buffer.slice(newlineIdx + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant') {
                  return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
                }
                return [...prev, { role: 'assistant', content: assistantContent }];
              });
            }
          } catch { /* partial JSON, wait */ }
        }
      }

      // Check for recommendations in completed response
      const recs = parseRecommendations(assistantContent);
      if (recs && recs.length > 0) {
        onRecommendations(recs);
        // Clean up the message to remove the raw JSON tags
        const cleaned = stripRecommendationTags(assistantContent);
        if (cleaned) {
          setMessages(prev =>
            prev.map((m, i) => i === prev.length - 1 && m.role === 'assistant' ? { ...m, content: cleaned } : m)
          );
        }
      }
    } catch (e) {
      console.error('Chat error:', e);
      setMessages(prev => [
        ...prev,
        ...(prev[prev.length - 1]?.role !== 'assistant'
          ? [{ role: 'assistant' as const, content: `Sorry, something went wrong: ${e instanceof Error ? e.message : 'Unknown error'}` }]
          : []),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 mb-4 min-h-[280px] max-h-[400px] pr-1">
        {messages.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted-foreground py-6 px-2">
            <Bot className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p className="text-sm text-center mb-4">Welcome! I'm your AI assistant. How can I help you today?</p>
            <div className="flex flex-col gap-2">
              {[
                "Recommendations based your criteria",
                "Our services",
                "Contact Us",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="text-sm glass px-4 py-2.5 rounded-xl hover:border-secondary/50 hover:bg-secondary/10 transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-secondary" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'glass'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <AssistantMessage content={msg.content} onOptionClick={sendMessage} isLatest={i === messages.length - 1} />
                ) : (
                  msg.content
                )}
              </div>
              {msg.role === 'user' && (
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-3.5 h-3.5 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
          <div className="flex gap-2 items-center text-muted-foreground">
            <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-secondary" />
            </div>
            <Loader2 className="w-4 h-4 animate-spin" />
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
        className="flex gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your destination..."
          disabled={isLoading}
          className="flex-1 px-4 py-2.5 rounded-xl glass border border-muted-foreground/30 bg-transparent text-foreground text-sm focus:outline-none focus:border-primary-glow disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2.5 rounded-xl bg-secondary text-secondary-foreground disabled:opacity-50 transition-colors hover:opacity-90"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
