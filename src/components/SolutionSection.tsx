import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Database, Brain, Sparkles } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const SolutionSection = () => {
  const { t } = useTranslation();

  return (
    <section id="solution" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            {t('solution', 'badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground px-4">
            {t('solution', 'title')}{' '}
            <span className="gradient-text-emerald text-glow-emerald">{t('solution', 'titleHighlight')}</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-start mb-8 md:mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="md:col-span-2 text-center">
              <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/20 mb-3 md:mb-4">
                <Database className="w-8 h-8 md:w-10 md:h-10 text-primary-glow" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">{t('solution', 'yourContext')}</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="glass rounded-lg px-3 py-2">🏞️ River site</p>
                <p className="glass rounded-lg px-3 py-2">👨‍👩‍👧‍👦 Families</p>
                <p className="glass rounded-lg px-3 py-2">📉 Low engagement</p>
              </div>
            </motion.div>

            <div className="hidden md:flex justify-center items-center md:col-span-1">
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
                <ArrowRight className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
              </motion.div>
            </div>
            <div className="flex md:hidden justify-center">
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
                <ArrowDown className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="md:col-span-2 text-center">
              <div className="inline-flex p-4 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-br from-secondary/30 to-accent/30 mb-3 md:mb-4 relative">
                <Brain className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl animate-pulse bg-secondary/10" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">{t('solution', 'aiBrain')}</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p className="glass rounded-lg px-3 py-2">📊 Global Benchmarks</p>
                <p className="glass rounded-lg px-3 py-2">🔬 10,000+ Cases</p>
                <p className="glass rounded-lg px-3 py-2">🎯 23 Similar Sites</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mb-8 md:mb-12">
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}>
              <ArrowDown className="w-10 h-10 md:w-12 md:h-12 text-accent" />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.5 }} className="text-center">
            <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-accent/20 mb-3 md:mb-4">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">{t('solution', 'rankedRecs')}</h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
              <div className="glass rounded-xl px-4 py-3 text-left">
                <p className="text-secondary font-semibold text-sm md:text-base">🏆 AR Treasure Hunt</p>
                <p className="text-xs text-muted-foreground">+47% dwell time • SAR 180K</p>
              </div>
              <div className="glass rounded-xl px-4 py-3 text-left">
                <p className="text-accent font-semibold text-sm md:text-base">🚣 Boat Races</p>
                <p className="text-xs text-muted-foreground">+34% retention • SAR 95K</p>
              </div>
              <div className="glass rounded-xl px-4 py-3 text-left">
                <p className="text-primary-glow font-semibold text-sm md:text-base">📸 Photo Zones</p>
                <p className="text-xs text-muted-foreground">+550% sharing • SAR 45K</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-xl md:rounded-2xl p-5 md:p-6">
              <h4 className="font-display text-base md:text-lg font-bold text-destructive mb-4">❌ {t('solution', 'genericAi')}</h4>
              <ul className="space-y-3 text-muted-foreground text-sm md:text-base">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />{t('solution', 'vague')}</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />{t('solution', 'noMetrics')}</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />{t('solution', 'oneOff')}</li>
              </ul>
            </div>
            <div className="glass-strong rounded-xl md:rounded-2xl p-5 md:p-6 border border-secondary/30">
              <h4 className="font-display text-base md:text-lg font-bold text-secondary mb-4">✅ {t('solution', 'experienceIntel')}</h4>
              <ul className="space-y-3 text-foreground text-sm md:text-base">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />{t('solution', 'provenBenchmarks')}</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />{t('solution', 'roiRanked')}</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />{t('solution', 'continuousLearning')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
