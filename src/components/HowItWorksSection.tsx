import { motion } from 'framer-motion';
import { Upload, Brain, Zap, LineChart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    { number: '01', icon: Upload, title: t('howItWorks', 'step1Title'), description: t('howItWorks', 'step1Desc'), time: t('howItWorks', 'day'), color: 'from-primary to-primary-glow' },
    { number: '02', icon: Brain, title: t('howItWorks', 'step2Title'), description: t('howItWorks', 'step2Desc'), time: t('howItWorks', 'realtime'), color: 'from-secondary to-secondary-glow' },
    { number: '03', icon: Zap, title: t('howItWorks', 'step3Title'), description: t('howItWorks', 'step3Desc'), time: t('howItWorks', 'instant'), color: 'from-accent to-accent-glow' },
    { number: '04', icon: LineChart, title: t('howItWorks', 'step4Title'), description: t('howItWorks', 'step4Desc'), time: t('howItWorks', 'ongoing'), color: 'from-violet-500 to-purple-400' },
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('howItWorks', 'title')}{' '}
            <span className="gradient-text" style={{ fontFamily: "'Fredoka One', cursive" }}>3ajib</span>
            {' '}{t('howItWorks', 'titleSuffix')}
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('howItWorks', 'subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="relative flex items-start gap-4 md:gap-8 pb-8 md:pb-12 last:pb-0">
              {index < steps.length - 1 && (
                <div className="absolute left-[31px] md:left-[39px] top-16 md:top-20 w-0.5 h-full bg-gradient-to-b from-muted to-transparent" />
              )}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1 glass rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 md:mb-3">
                  <span className="text-xs md:text-sm font-mono text-muted-foreground">{t('howItWorks', 'step')} {step.number}</span>
                  <span className="glass px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs text-secondary">{step.time}</span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6 }} className="text-center mt-10 md:mt-12">
          <a href="#demo" className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            {t('howItWorks', 'tryDemo')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
