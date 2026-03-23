import { motion } from 'framer-motion';
import { Play, Download, TrendingUp, DollarSign, Share2 } from 'lucide-react';
import logo3ajib from '@/assets/3ajib-logo.png';
import pwcLogo from '@/assets/pwc-logo.png';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, value: '+54%', label: t('stats', 'dwellTime') },
    { icon: DollarSign, value: '+33%', label: t('stats', 'revenue') },
    { icon: Share2, value: '550%', label: t('stats', 'socialSharing') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-6">
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground">
                <img src={pwcLogo} alt="PwC" className="h-4 w-auto" />
                {t('hero', 'badge')}
              </span>
            </motion.div>

            <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
              <img src={logo3ajib} alt="That's 3ajib!" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto" />
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl">
              <span className="text-foreground font-semibold">{t('hero', 'tagline')}</span>{' '}
              {t('hero', 'description')}
            </p>

            <div className="flex flex-wrap gap-3 md:gap-6 mb-6 md:mb-8">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-bold text-lg text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <motion.a href="#demo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary inline-flex items-center justify-center gap-2 text-sm md:text-base">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                {t('hero', 'tryDemo')}
              </motion.a>
              <motion.a href="/Experience_Intelligence_Research.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base">
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                {t('hero', 'downloadResearch')}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-primary/20 to-accent/30 blur-3xl rounded-full" />
              <div className="relative glass-strong rounded-3xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <div className="space-y-4">
                  <div className="glass rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground">{t('hero', 'visitorFlow')}</span>
                      <span className="text-xs text-secondary">{t('hero', 'live')}</span>
                    </div>
                    <div className="flex gap-1 h-16 items-end">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1 + i * 0.1, duration: 0.5 }} className="flex-1 bg-gradient-to-t from-secondary to-secondary-glow rounded-t" />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">{t('hero', 'dwellTime')}</p>
                      <p className="text-2xl font-bold text-secondary">127 min</p>
                    </div>
                    <div className="glass rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">{t('hero', 'revenue')}</p>
                      <p className="text-2xl font-bold text-accent">SAR 3.2M</p>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-2">{t('hero', 'aiRecommendation')}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary">🎯</span>
                      <span className="text-sm text-foreground">{t('hero', 'arTreasureHunt')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
