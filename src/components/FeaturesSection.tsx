import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, BarChart3, Lightbulb, Share2, Sparkles, Flag } from 'lucide-react';
import heatmapMoney from '@/assets/heatmap-money.webp';
import spendingChart from '@/assets/spending-chart.webp';
import visitorSegments from '@/assets/visitor-segments.png';
import { useTranslation } from '@/hooks/useTranslation';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    { id: 'spending', icon: MapPin, title: t('features', 'spending'), headline: t('features', 'seeWhere'), description: t('features', 'spendingDesc'), stat: '+33%', statLabel: t('features', 'revenuePerVisitor'), color: 'from-primary to-primary-glow', image: spendingChart },
    { id: 'engagement', icon: BarChart3, title: t('features', 'engagement'), headline: t('features', 'trackEvery'), description: t('features', 'engagementDesc'), stat: '+54%', statLabel: t('features', 'avgDwell'), color: 'from-secondary to-secondary-glow', image: heatmapMoney },
    { id: 'recommendations', icon: Lightbulb, title: t('features', 'aiRecs'), headline: t('features', 'actionable'), description: t('features', 'aiRecsDesc'), stat: '196%', statLabel: t('features', 'roiYear1'), color: 'from-accent to-accent-glow', image: visitorSegments },
    { id: 'social', icon: Share2, title: t('features', 'social'), headline: t('features', 'whatGoesViral'), description: t('features', 'socialDesc'), stat: '+550%', statLabel: t('features', 'socialMentions'), color: 'from-pink-500 to-rose-400' },
    { id: 'predictive', icon: Sparkles, title: t('features', 'predictive'), headline: t('features', 'seeTomorrow'), description: t('features', 'predictiveDesc'), stat: '+35%', statLabel: t('features', 'efficiency'), color: 'from-violet-500 to-purple-400' },
    { id: 'vision2030', icon: Flag, title: t('features', 'vision2030'), headline: t('features', 'builtForSaudi'), description: t('features', 'vision2030Desc'), stat: '150M', statLabel: t('features', 'visitorGoal'), color: 'from-emerald-500 to-teal-400' },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const active = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section id="features" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('features', 'title')}{' '}
            <span className="gradient-text">{t('features', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('features', 'subtitle')}</p>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 mb-8 md:mb-12">
          <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-max md:min-w-0">
            {features.map((feature) => (
              <motion.button key={feature.id} onClick={() => setActiveFeature(feature.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-full transition-all ${activeFeature === feature.id ? 'glass-strong text-foreground border border-secondary/50' : 'glass text-muted-foreground hover:text-foreground'}`}>
                <feature.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium whitespace-nowrap">{feature.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${active.color} mb-4 md:mb-6`}>
                  <active.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">{active.headline}</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">{active.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${active.color} bg-clip-text text-transparent`}>{active.stat}</span>
                  <span className="text-muted-foreground text-sm md:text-base">{active.statLabel}</span>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-20 blur-3xl rounded-full`} />
                <div className="relative glass rounded-2xl overflow-hidden h-64 md:h-80 flex items-center justify-center">
                  {active.image ? (
                    <img src={active.image} alt={active.headline} className="w-full h-full object-cover" />
                  ) : (
                    <active.icon className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground/30" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {features.map((feature, index) => (
            <motion.div key={feature.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} onClick={() => setActiveFeature(feature.id)} className={`glass rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all hover:scale-105 ${activeFeature === feature.id ? 'border border-secondary/50' : ''}`}>
              <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} mb-3 md:mb-4`}>
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <h4 className="font-display text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2 leading-tight">{feature.headline}</h4>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 hidden sm:block">{feature.description}</p>
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>{feature.stat}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground ml-1 md:ml-2">{feature.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
