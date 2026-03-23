import { motion } from 'framer-motion';
import { Rocket, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-strong rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/20 mb-4 md:mb-6">
            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('cta', 'title')}{' '}
            <span className="gradient-text">{t('cta', 'titleHighlight')}</span>
          </h2>

          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">{t('cta', 'subtitle')}</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary inline-flex items-center justify-center gap-2 text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              <Rocket className="w-4 h-4 md:w-5 md:h-5" />
              {t('cta', 'requestDemo')}
            </motion.a>
            <motion.a href="/Experience_Intelligence_Research.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base">
              {t('cta', 'downloadPdf')}
            </motion.a>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
              {t('cta', 'earlyAdopter')}
            </span>
            <span className="flex items-center gap-2">🔒 {t('cta', 'noCard')}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
