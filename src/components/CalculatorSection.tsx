import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock, Download, Calendar } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useTranslation } from '@/hooks/useTranslation';
import { calculateROI } from '@/lib/calculator';

const destinationTypes = [
  { value: 'museum', labelKey: 'museum' },
  { value: 'heritage', labelKey: 'heritage' },
  { value: 'park', labelKey: 'park' },
  { value: 'festival', labelKey: 'festival' },
  { value: 'theme_park', labelKey: 'themePark' },
];

const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    destinationType: 'museum',
    annualVisitors: 100000,
    currentDwell: 45,
    currentRevenue: 78,
    budget: 500000,
  });
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Mock calculation logic (would connect to n8n webhook)
  const calculateResults = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  const results = calculateROI(formData);

  const { t } = useTranslation();

  return (
    <section id="calculator" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
            <Calculator className="w-4 h-4 text-accent" />
            {t('calculator', 'badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('calculator', 'title')}{' '}
            <span className="gradient-text">{t('calculator', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('calculator', 'subtitle')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Form */}
              <div className="space-y-6 md:space-y-8">
                {/* Destination Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">{t('calculator', 'destType')}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {destinationTypes.map((type) => (
                      <button key={type.value} onClick={() => setFormData({ ...formData, destinationType: type.value })} className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${formData.destinationType === type.value ? 'bg-secondary text-secondary-foreground' : 'glass text-muted-foreground hover:text-foreground'}`}>
                        {t('calculator', type.labelKey)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Annual Visitors */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t('calculator', 'annualVisitors')} <span className="text-secondary">{(formData.annualVisitors / 1000).toFixed(0)}K</span>
                  </label>
                  <Slider
                    value={[formData.annualVisitors]}
                    onValueChange={(value) => setFormData({ ...formData, annualVisitors: value[0] })}
                    min={10000}
                    max={5000000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10K</span>
                    <span>5M</span>
                  </div>
                </div>

                {/* Current Dwell Time */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t('calculator', 'currentDwell')} <span className="text-secondary">{formData.currentDwell} min</span>
                  </label>
                  <Slider
                    value={[formData.currentDwell]}
                    onValueChange={(value) => setFormData({ ...formData, currentDwell: value[0] })}
                    min={5}
                    max={180}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* Current Revenue */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t('calculator', 'currentRevenue')} <span className="text-secondary">SAR {formData.currentRevenue}</span>
                  </label>
                  <Slider
                    value={[formData.currentRevenue]}
                    onValueChange={(value) => setFormData({ ...formData, currentRevenue: value[0] })}
                    min={10}
                    max={500}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t('calculator', 'budget')} <span className="text-accent">SAR {(formData.budget / 1000).toFixed(0)}K</span>
                  </label>
                  <Slider
                    value={[formData.budget]}
                    onValueChange={(value) => setFormData({ ...formData, budget: value[0] })}
                    min={50000}
                    max={10000000}
                    step={50000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>SAR 50K</span>
                    <span>SAR 10M</span>
                  </div>
                </div>

                {/* Calculate Button */}
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={calculateResults} disabled={isCalculating} className="w-full btn-primary flex items-center justify-center gap-2 text-sm md:text-base">
                  {isCalculating ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('calculator', 'calculating')}
                    </>
                  ) : (
                    <>
                      <Calculator className="w-4 h-4 md:w-5 md:h-5" />
                      {t('calculator', 'calculate')}
                    </>
                  )}
                </motion.button>
              </div>

              {/* Right: Results */}
              <div>
                <AnimatePresence mode="wait">
                  {showResults ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4 md:space-y-6"
                    >
                      <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">
                        {t('calculator', 'projected')}
                      </h3>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="glass rounded-lg md:rounded-xl p-3 md:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
                            <span className="text-[10px] md:text-xs text-muted-foreground">{t('stats', 'dwellTime')}</span>
                          </div>
                          <p className="text-foreground text-xs md:text-sm">
                            {formData.currentDwell} min → <span className="text-secondary font-bold">{results.newDwell} min</span>
                          </p>
                          <p className="text-[10px] md:text-xs text-secondary">+{results.dwellIncrease}%</p>
                        </div>

                        <div className="glass rounded-lg md:rounded-xl p-3 md:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                            <span className="text-[10px] md:text-xs text-muted-foreground">{t('calculator', 'revenueVisit')}</span>
                          </div>
                          <p className="text-foreground text-xs md:text-sm">
                            SAR {formData.currentRevenue} → <span className="text-accent font-bold">SAR {results.newRevenue}</span>
                          </p>
                          <p className="text-[10px] md:text-xs text-accent">+{results.revenueIncrease}%</p>
                        </div>

                        <div className="glass rounded-lg md:rounded-xl p-3 md:p-4 col-span-2">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                            <span className="text-[10px] md:text-xs text-muted-foreground">{t('calculator', 'socialMentions')}</span>
                          </div>
                          <p className="text-lg md:text-xl text-accent font-bold">+{results.socialIncrease}%</p>
                        </div>
                      </div>

                      {/* Financial Summary */}
                      <div className="glass-strong rounded-lg md:rounded-xl p-4 md:p-6 border border-secondary/30">
                        <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">{t('calculator', 'financialSummary')}</h4>
                        <div className="space-y-2 md:space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-sm">{t('calculator', 'additionalRevenue')}</span>
                            <span className="text-secondary font-bold text-sm md:text-base">SAR {(results.additionalRevenue / 1000000).toFixed(1)}M</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-sm">{t('calculator', 'totalInvestment')}</span>
                            <span className="text-foreground text-sm md:text-base">SAR {(results.investment / 1000).toFixed(0)}K</span>
                          </div>
                          <div className="border-t border-border pt-2 md:pt-3">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground text-xs md:text-sm">{t('calculator', 'netProfit')}</span>
                              <span className="text-accent font-bold text-sm md:text-base">SAR {(results.netProfit / 1000000).toFixed(2)}M</span>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-sm">{t('calculator', 'roi')}</span>
                            <span className="text-secondary font-bold text-sm md:text-base">{results.roi}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-sm">{t('calculator', 'payback')}</span>
                            <span className="text-foreground text-sm md:text-base">{results.paybackMonths} {t('calculator', 'months')}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                        <button className="flex-1 btn-secondary flex items-center justify-center gap-2 text-xs md:text-sm py-2.5">
                          <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {t('calculator', 'downloadReport')}
                        </button>
                        <button className="flex-1 btn-primary flex items-center justify-center gap-2 text-xs md:text-sm py-2.5">
                          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          {t('calculator', 'scheduleCall')}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex items-center justify-center min-h-[200px] lg:min-h-0"
                    >
                      <div className="text-center text-muted-foreground px-4">
                        <Calculator className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 opacity-30" />
                        <p className="text-sm md:text-base">{t('calculator', 'configureText')}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
