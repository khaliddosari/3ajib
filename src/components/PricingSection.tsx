import { motion } from 'framer-motion';
import { Check, Star, Zap, BarChart3, Globe, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    { name: t('pricing', 'bronze'), subtitle: t('pricing', 'bronzeSub'), internal: ['KPI Baseline Setup', 'Cost Structure Analysis', 'Client Input Recommendations'], external: ['Social Media Benchmarking', 'Live Tracking Dashboard', 'Monthly Reports'], cta: t('pricing', 'contactSales'), popular: false, color: 'from-amber-600 to-amber-800' },
    { name: t('pricing', 'silver'), subtitle: t('pricing', 'silverSub'), internal: ['All Bronze Internal', 'Experience Fix Recommendations', 'Engagement Trigger Design'], external: ['All Bronze External', 'UGC & Sentiment Tracking', 'Weekly Insight Reports'], cta: t('pricing', 'contactSales'), popular: false, color: 'from-slate-400 to-slate-600' },
    { name: t('pricing', 'gold'), subtitle: t('pricing', 'goldSub'), internal: ['All Silver Internal', 'Visitor Segmentation Engine', 'Personalization Playbooks'], external: ['All Silver External', 'Benchmark Recommendations', 'Repeat Visit Loop Analysis'], cta: t('pricing', 'contactSales'), popular: true, color: 'from-yellow-500 to-amber-600' },
    { name: t('pricing', 'platinum'), subtitle: t('pricing', 'platinumSub'), internal: ['All Gold Internal', 'Optimization Engine', 'Executive Dashboard'], external: ['All Gold External', 'Experiment Pilots', 'Dedicated Success Manager'], cta: t('pricing', 'contactSales'), popular: false, color: 'from-cyan-400 to-teal-500' },
  ];

  const gainshareMetrics = [t('stats', 'dwellTime'), 'Repeat Visits', t('stats', 'revenue') + ' & Visitors', 'Sharability / UGC', 'Engagement'];

  return (
    <section id="pricing" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('pricing', 'title')}{' '}
            <span className="gradient-text">{t('pricing', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('pricing', 'subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15, duration: 0.6 }} className={`relative glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 ${plan.popular ? 'border-2 border-secondary ring-2 ring-secondary/20' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                    <Star className="w-3 h-3 md:w-4 md:h-4" />
                    {t('pricing', 'mostPopular')}
                  </span>
                </div>
              )}
              <div className="text-center mb-5">
                <div className={`inline-flex p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br ${plan.color} mb-3 md:mb-4`}>
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-secondary text-xs md:text-sm font-medium mb-2">{plan.subtitle}</p>
                <span className="font-display text-lg md:text-xl font-semibold text-secondary">{t('pricing', 'customPricing')}</span>
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">{t('pricing', 'internal')}</span>
                </div>
                <ul className="space-y-2">
                  {plan.internal.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-secondary" /></div>
                      <span className="text-muted-foreground text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">{t('pricing', 'external')}</span>
                </div>
                <ul className="space-y-2">
                  {plan.external.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-secondary" /></div>
                      <span className="text-muted-foreground text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-2.5 md:py-3 rounded-xl font-medium transition-all text-sm md:text-base ${plan.popular ? 'btn-primary' : 'glass hover:bg-muted/50 text-foreground'}`}>{plan.cta}</button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-12 md:mt-16 glass-strong rounded-2xl md:rounded-3xl p-6 md:p-10 max-w-4xl mx-auto border border-secondary/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-secondary" />
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
              {t('pricing', 'gainshareTitle')} <span className="text-secondary">{t('pricing', 'gainshareSub')}</span>
            </h3>
          </div>
          <p className="text-center text-muted-foreground text-sm md:text-base mb-6 max-w-2xl mx-auto">{t('pricing', 'gainshareDesc')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {gainshareMetrics.map((metric) => (
              <span key={metric} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm text-foreground font-medium border border-secondary/20">
                <Check className="w-3.5 h-3.5 text-secondary" />{metric}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} className="text-center mt-10 md:mt-14 glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">{t('pricing', 'whyNotFixed')}</h3>
          <p className="text-muted-foreground text-sm md:text-base">{t('pricing', 'whyNotFixedDesc')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
