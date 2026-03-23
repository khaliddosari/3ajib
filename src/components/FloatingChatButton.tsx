import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import DemoChat from './DemoChat';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-4 z-50 w-[380px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#08cc88]/30"
            style={{ background: 'linear-gradient(180deg, #0c1a2e 0%, #0f1f35 100%)' }}
          >
            <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#08cc88' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <h3 className="font-display text-sm font-semibold text-white">Chat with 3ajib AI</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <DemoChat
                onRecommendations={() => {}}
                destinationContext={{
                  destination: '',
                  customDestination: '',
                  audience: '',
                  customAudience: '',
                  goals: [],
                  customGoal: '',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-colors"
        style={{ backgroundColor: '#08cc88', boxShadow: '0 4px 20px rgba(8, 204, 136, 0.4)' }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </>
  );
};

export default FloatingChatButton;
