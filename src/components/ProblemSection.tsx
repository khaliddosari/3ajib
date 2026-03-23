import { motion } from 'framer-motion';
import { Target, TrendingDown, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ProblemSection = () => {
  const { t } = useTranslation();

  const problemCards = [
    { icon: Target, title: t('problem', 'card1Title'), description: t('problem', 'card1Desc'), color: 'text-destructive' },
    { icon: TrendingDown, title: t('problem', 'card2Title'), description: t('problem', 'card2Desc'), color: 'text-accent' },
    { icon: Clock, title: t('problem', 'card3Title'), description: t('problem', 'card3Desc'), color: 'text-secondary' },
  ];

  return (
    <section id="problem" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(40,20%,8%)] to-background" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
            {t('problem', 'title')}{' '}
            <span className="gradient-text">{t('problem', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('problem', 'subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {problemCards.map((card, index) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="glass rounded-xl md:rounded-2xl p-6 md:p-8 text-center card-hover">
              <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/50 mb-4 md:mb-6 ${card.color}`}>
                <card.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} className="glass-strong rounded-xl md:rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="text-base md:text-lg">💬</span>
            </div>
          </div>
          <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground italic mb-3 md:mb-4 px-4">
            {t('problem', 'quote')}
          </blockquote>
          <cite className="text-muted-foreground text-xs md:text-sm">{t('problem', 'quoteAuthor')}</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
