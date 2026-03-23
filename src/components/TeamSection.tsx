import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const teamMembers = [
  { name: 'Amr Issa', gender: 'male' },
  { name: 'Fayez Algosaibi', gender: 'male' },
  { name: 'Abrar Alsawadi', gender: 'female' },
  { name: 'Ahmad Alabuo', gender: 'male' },
  { name: 'Amro Elian', gender: 'male' },
  { name: 'Jury Alamir', gender: 'female' },
  { name: 'Sara Alraimi', gender: 'female' },
  { name: 'Lama Asiri', gender: 'female' },
  { name: 'Khalid Al Dosari', gender: 'male' },
];

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-primary-glow mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
            {t('team', 'badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('team', 'title')}</span> {t('team', 'titleSuffix')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">{t('team', 'subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-strong rounded-xl md:rounded-2xl p-4 md:p-6 text-center card-hover group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                <User className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
              </div>
              <h3 className="font-display text-sm md:text-base lg:text-lg font-bold text-foreground leading-tight">{member.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 glass-strong rounded-2xl px-6 md:px-8 py-4">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">🇸🇦</span>
              <span className="text-muted-foreground text-sm md:text-base">Riyadh, Saudi Arabia</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">🏆</span>
              <span className="text-muted-foreground text-sm md:text-base">PwC Empowerthon 2026</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border/50" />
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">🎯</span>
              <span className="text-muted-foreground text-sm md:text-base">{t('features', 'vision2030')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
