import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DemoChat, { type Recommendation } from './DemoChat';


const destinationRecommendations: Record<string, Recommendation[]> = {
  river: [
    { title: 'Interactive Boat Races', metric: '+47% dwell time', icon: '🚣', feasibility: 4, impact: 5 },
    { title: 'AR Water Discovery Trail', metric: '+34% retention', icon: '📱', feasibility: 3, impact: 4 },
    { title: 'Sunset Floating Cinema', metric: '+52% social shares', icon: '🎬', feasibility: 4, impact: 5 },
    { title: 'Eco-Nature Audio Tours', metric: '+28% repeat visits', icon: '🎧', feasibility: 5, impact: 3 },
  ],
  museum: [
    { title: 'AR Artifact Stories', metric: '+56% engagement', icon: '🏛️', feasibility: 4, impact: 5 },
    { title: 'Interactive Time Travel', metric: '+43% dwell time', icon: '⏰', feasibility: 3, impact: 5 },
    { title: 'AI-Guided Personalized Tours', metric: '+38% satisfaction', icon: '🤖', feasibility: 5, impact: 4 },
    { title: 'Digital Art Creation Zones', metric: '+61% youth visits', icon: '🎨', feasibility: 4, impact: 4 },
  ],
  festival: [
    { title: 'Real-time Crowd Voting', metric: '+72% participation', icon: '🎭', feasibility: 5, impact: 5 },
    { title: 'AI Music Recommendations', metric: '+45% stage visits', icon: '🎵', feasibility: 4, impact: 4 },
    { title: 'Gamified Treasure Hunts', metric: '+58% exploration', icon: '🗺️', feasibility: 5, impact: 5 },
    { title: 'Smart Queue Management', metric: '-40% wait times', icon: '⏱️', feasibility: 4, impact: 5 },
  ],
  park: [
    { title: 'Wildlife AR Encounters', metric: '+63% family visits', icon: '🦁', feasibility: 4, impact: 5 },
    { title: 'Nature Fitness Challenges', metric: '+48% youth engagement', icon: '🏃', feasibility: 5, impact: 4 },
    { title: 'Smart Picnic Reservations', metric: '+35% satisfaction', icon: '🧺', feasibility: 5, impact: 3 },
    { title: 'Eco-Learning Stations', metric: '+52% school visits', icon: '🌱', feasibility: 4, impact: 5 },
  ],
  beach: [
    { title: 'Smart Beach Zones', metric: '+41% satisfaction', icon: '🏖️', feasibility: 5, impact: 4 },
    { title: 'Water Sports Booking AI', metric: '+55% revenue', icon: '🏄', feasibility: 4, impact: 5 },
    { title: 'Sunset Event Alerts', metric: '+67% social shares', icon: '🌅', feasibility: 5, impact: 4 },
    { title: 'Eco-Clean Gamification', metric: '+38% engagement', icon: '♻️', feasibility: 5, impact: 3 },
  ],
  heritage: [
    { title: 'AR Historical Overlays', metric: '+59% dwell time', icon: '🏰', feasibility: 3, impact: 5 },
    { title: 'Storytelling Audio Walks', metric: '+44% satisfaction', icon: '🎙️', feasibility: 5, impact: 4 },
    { title: 'Digital Artifact Gallery', metric: '+51% youth visits', icon: '📜', feasibility: 4, impact: 5 },
    { title: 'Cultural Quiz Trails', metric: '+36% repeat visits', icon: '🧩', feasibility: 5, impact: 4 },
  ],
  mall: [
    { title: 'AI Personal Shopper', metric: '+48% avg spend', icon: '🛒', feasibility: 4, impact: 5 },
    { title: 'Gamified Loyalty Rewards', metric: '+62% repeat visits', icon: '🎁', feasibility: 5, impact: 5 },
    { title: 'Smart Navigation & Deals', metric: '+37% store visits', icon: '📍', feasibility: 5, impact: 4 },
    { title: 'Social Pop-up Events', metric: '+71% social shares', icon: '📸', feasibility: 4, impact: 4 },
  ],
  stadium: [
    { title: 'Live Stats AR Overlay', metric: '+53% engagement', icon: '📊', feasibility: 3, impact: 5 },
    { title: 'Smart Concession Orders', metric: '-45% wait times', icon: '🍔', feasibility: 5, impact: 5 },
    { title: 'Fan Interaction Zones', metric: '+68% satisfaction', icon: '🎉', feasibility: 4, impact: 4 },
    { title: 'Replay & Highlights Hub', metric: '+42% social shares', icon: '🎥', feasibility: 4, impact: 5 },
  ],
};

const DemoSection = () => {
  const [destination, setDestination] = useState('river');
  const [audience, setAudience] = useState('families');
  const [goals, setGoals] = useState<string[]>(['dwell']);
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
  const [showChat, setShowChat] = useState(false);

  const [customDestination, setCustomDestination] = useState('');
  const [customAudience, setCustomAudience] = useState('');
  const [customGoal, setCustomGoal] = useState('');

  const handleGenerate = () => {
    // Use static recommendations as quick preview
    setRecommendations(destinationRecommendations[destination] || destinationRecommendations['river']);
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'text-accent' : 'text-muted'}>
        ★
      </span>
    ));
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Interactive Demo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI-Powered</span> Recommendations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your destination type, target audience, and goals to generate personalized experience upgrades
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-6xl mx-auto glow-primary"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Form */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold mb-6">Configure Your Destination</h3>

              <div>
                <label className="block text-sm text-muted-foreground mb-3">Destination Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'river', label: 'River', icon: '🚣' },
                    { value: 'museum', label: 'Museum', icon: '🏛️' },
                    { value: 'festival', label: 'Festival', icon: '🎭' },
                    { value: 'park', label: 'Park', icon: '🌳' },
                    { value: 'beach', label: 'Beach', icon: '🏖️' },
                    { value: 'heritage', label: 'Heritage Site', icon: '🕌' },
                    { value: 'mall', label: 'Shopping Mall', icon: '🛍️' },
                    { value: 'stadium', label: 'Stadium', icon: '🏟️' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => { setDestination(item.value); setCustomDestination(''); }}
                      className={`p-4 rounded-xl text-left transition-all ${
                        destination === item.value && !customDestination
                          ? 'glass-strong border-2 border-primary-glow glow-primary'
                          : 'glass hover:border-muted-foreground/50'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  {/* Other option */}
                  <button
                    onClick={() => setDestination('other')}
                    className={`p-4 rounded-xl text-left transition-all ${
                      destination === 'other' || customDestination
                        ? 'glass-strong border-2 border-primary-glow glow-primary'
                        : 'glass hover:border-muted-foreground/50'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">✏️</span>
                    <span className="font-medium">Other</span>
                  </button>
                </div>
                {(destination === 'other' || customDestination) && (
                  <input
                    type="text"
                    value={customDestination}
                    onChange={(e) => { setCustomDestination(e.target.value); setDestination('other'); }}
                    placeholder="Enter your destination type..."
                    className="mt-3 w-full px-4 py-2 rounded-xl glass border border-muted-foreground/30 bg-transparent text-foreground text-sm focus:outline-none focus:border-primary-glow"
                    maxLength={100}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-3">Target Audience</label>
                <div className="flex flex-wrap gap-2">
                  {['Families', 'Tourists', 'Youth', 'Schools', 'Couples', 'Business', 'Seniors', 'Solo Travelers'].map((item) => (
                    <button
                      key={item}
                      onClick={() => { setAudience(item.toLowerCase()); setCustomAudience(''); }}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        audience === item.toLowerCase() && !customAudience
                          ? 'bg-secondary text-secondary-foreground'
                          : 'glass hover:border-muted-foreground/50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                  <button
                    onClick={() => setAudience('other')}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      audience === 'other' || customAudience
                        ? 'bg-secondary text-secondary-foreground'
                        : 'glass hover:border-muted-foreground/50'
                    }`}
                  >
                    Other
                  </button>
                </div>
                {(audience === 'other' || customAudience) && (
                  <input
                    type="text"
                    value={customAudience}
                    onChange={(e) => { setCustomAudience(e.target.value); setAudience('other'); }}
                    placeholder="Enter your target audience..."
                    className="mt-3 w-full px-4 py-2 rounded-xl glass border border-muted-foreground/30 bg-transparent text-foreground text-sm focus:outline-none focus:border-primary-glow"
                    maxLength={100}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-3">Primary Goal</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'dwell', label: 'Dwell Time Expansion' },
                    { value: 'repeat', label: 'Repeat Visitation Rate' },
                    { value: 'revenue', label: 'Increased Revenue' },
                    { value: 'sharing', label: 'Digital Amplification' },
                    { value: 'engagement', label: 'Interaction Rate' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        setGoals(prev =>
                          prev.includes(item.value)
                            ? prev.filter(g => g !== item.value)
                            : [...prev, item.value]
                        );
                      }}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        goals.includes(item.value)
                          ? 'bg-accent text-accent-foreground'
                          : 'glass hover:border-muted-foreground/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => setGoals(prev =>
                      prev.includes('other') ? prev.filter(g => g !== 'other') : [...prev, 'other']
                    )}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      goals.includes('other') || customGoal
                        ? 'bg-accent text-accent-foreground'
                        : 'glass hover:border-muted-foreground/50'
                    }`}
                  >
                    Other
                  </button>
                </div>
                {(goals.includes('other') || customGoal) && (
                  <input
                    type="text"
                    value={customGoal}
                    onChange={(e) => { setCustomGoal(e.target.value); if (!goals.includes('other')) setGoals(prev => [...prev, 'other']); }}
                    placeholder="Enter your primary goal..."
                    className="mt-3 w-full px-4 py-2 rounded-xl glass border border-muted-foreground/30 bg-transparent text-foreground text-sm focus:outline-none focus:border-primary-glow"
                    maxLength={100}
                  />
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  className="flex-1 btn-primary"
                >
                  Quick Generate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowChat(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm transition-all hover:opacity-90"
                >
                  💬 Chat with 3ajib AI
                </motion.button>
              </div>
            </div>

            {/* Right: Results or Chat */}
            <div className="glass rounded-2xl p-6 min-h-[400px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-semibold">
                  {showChat ? 'Chat with 3ajib AI' : 'AI Recommendations'}
                </h3>
                {showChat ? (
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-xs glass px-2 py-1 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Back to results
                  </button>
                ) : (
                  <span className="text-xs glass px-2 py-1 rounded-full text-muted-foreground">
                    PwC AI
                  </span>
                )}
              </div>

              {showChat ? (
                <DemoChat
                  onRecommendations={(recs) => {
                    setRecommendations(recs);
                  }}
                  destinationContext={{
                    destination,
                    customDestination,
                    audience,
                    customAudience,
                    goals,
                    customGoal,
                  }}
                />
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {recommendations ? (
                      <motion.div
                        key="results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full space-y-4"
                      >
                        {recommendations.map((rec, index) => (
                          <motion.div
                            key={rec.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-xl p-4 card-hover"
                          >
                            <div className="flex items-start gap-4">
                              <span className="text-3xl">{rec.icon}</span>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-semibold">{rec.title}</h4>
                                  <span className="text-sm font-bold text-secondary">
                                    {rec.metric}
                                  </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                  <span>Feasibility: {renderStars(rec.feasibility)}</span>
                                  <span>Impact: {renderStars(rec.impact)}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-muted-foreground"
                      >
                        <div className="text-6xl mb-4 opacity-50">🎯</div>
                        <p>Configure your destination and click generate, or chat with 3ajib AI for personalized recommendations</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
