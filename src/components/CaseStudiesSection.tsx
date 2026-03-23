import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';
import alulaImage from '@/assets/alula-night.webp';
import riyadhImage from '@/assets/riyadh-museum.webp';
import jeddahImage from '@/assets/jeddah-waterfront.webp';
import { useTranslation } from '@/hooks/useTranslation';

const CaseStudiesSection = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      id: 'alula', title: t('caseStudies', 'alula'), subtitle: t('caseStudies', 'alulaSubtitle'), image: alulaImage,
      metrics: [
        { icon: TrendingUp, label: t('stats', 'dwellTime'), value: '+87%', detail: '68→127 min' },
        { icon: Users, label: 'Youth Visitors', value: '+133%', detail: 'New demographic' },
        { icon: DollarSign, label: 'Additional Revenue', value: 'SAR 3.2M', detail: 'Annual' },
      ],
      implemented: 'AR Treasure Hunt + Stargazing Program',
    },
    {
      id: 'riyadh', title: t('caseStudies', 'riyadh'), subtitle: t('caseStudies', 'riyadhSubtitle'), image: riyadhImage,
      metrics: [
        { icon: TrendingUp, label: t('stats', 'dwellTime'), value: '+117%', detail: '41→89 min' },
        { icon: Star, label: 'Social Mentions', value: '+1,200%', detail: '12→156/week' },
        { icon: Users, label: 'School Bookings', value: '+340%', detail: 'Educational tours' },
      ],
      implemented: 'Interactive Mystery Challenge + Social Zones',
    },
    {
      id: 'jeddah', title: t('caseStudies', 'jeddah'), subtitle: t('caseStudies', 'jeddahSubtitle'), image: jeddahImage,
      metrics: [
        { icon: TrendingUp, label: 'Evening Visits', value: '+95%', detail: 'After 6PM' },
        { icon: DollarSign, label: 'F&B Revenue', value: 'SAR 1.8M', detail: 'Increase' },
        { icon: Star, label: 'Event Inquiries', value: '+450%', detail: 'Corporate & private' },
      ],
      implemented: 'Interactive Water Features + Social Photo Zones',
    },
  ];

  return (
    <section id="case-studies" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
            <Star className="w-4 h-4 text-accent" />
            {t('caseStudies', 'badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('caseStudies', 'title')}{' '}
            <span className="gradient-text">{t('caseStudies', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('caseStudies', 'subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div key={study.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="glass-strong rounded-2xl md:rounded-3xl overflow-hidden card-hover group">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">{study.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm drop-shadow-md">{study.subtitle}</p>
                </div>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 rounded-lg bg-muted/50"><metric.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" /></div>
                      <div>
                        <p className="text-xs md:text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-[10px] md:text-xs text-muted-foreground/60">{metric.detail}</p>
                      </div>
                    </div>
                    <span className="font-bold text-base md:text-lg text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="glass rounded-lg md:rounded-xl p-3 md:p-4">
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-1">{t('caseStudies', 'implemented')}</p>
                  <p className="text-xs md:text-sm text-foreground font-medium">{study.implemented}</p>
                </div>
              </div>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <button className="w-full glass rounded-lg md:rounded-xl py-2.5 md:py-3 text-xs md:text-sm font-medium text-secondary hover:bg-secondary/10 transition-colors group-hover:text-secondary-glow">
                  {t('caseStudies', 'readFull')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
