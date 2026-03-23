import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import pwcLogo from '@/assets/pwc-logo.png';
import { useTranslation } from '@/hooks/useTranslation';

const testimonials = [
  { quote: "Cut our planning time by 60%. Instead of months researching, we had a clear roadmap in week one.", author: 'Park Manager', company: 'Abha Tourism Authority', rating: 5 },
  { quote: "Board approvals went from 40% to 95%. Now I show them: '23 destinations like ours saw 47% improvement.' Data wins.", author: 'Tourism Development Director', company: 'Riyadh Region', rating: 5 },
  { quote: "The ROI calculator alone justified our entire investment. We knew exactly what to expect before spending a single riyal.", author: 'CFO', company: 'National Heritage Foundation', rating: 5 },
];

const partners = [
  { name: 'PwC', logo: pwcLogo, isImage: true },
  { name: 'Saudi Tourism Authority', logo: '🇸🇦', isImage: false },
  { name: 'Microsoft Azure', logo: '☁️', isImage: false },
  { name: 'Vision 2030', logo: '🎯', isImage: false },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('testimonials', 'title')}{' '}
            <span className="gradient-text">{t('testimonials', 'titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 relative">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-secondary/30 absolute top-4 md:top-6 right-4 md:right-6" />
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-base md:text-lg text-foreground mb-4 md:mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-medium text-foreground text-sm md:text-base">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} className="text-center">
          <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">{t('testimonials', 'partnered')}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div key={partner.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 * index, duration: 0.4 }} className="glass rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3">
                {partner.isImage ? (
                  <img src={partner.logo as string} alt={partner.name} className="h-5 md:h-6 w-auto" />
                ) : (
                  <span className="text-xl md:text-2xl">{partner.logo}</span>
                )}
                <span className="text-muted-foreground font-medium text-xs md:text-sm">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
