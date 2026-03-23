import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from '@/hooks/useTranslation';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    { question: t('faq', 'q1'), answer: t('faq', 'a1') },
    { question: t('faq', 'q2'), answer: t('faq', 'a2') },
    { question: t('faq', 'q3'), answer: t('faq', 'a3') },
    { question: t('faq', 'q4'), answer: t('faq', 'a4') },
    { question: t('faq', 'q5'), answer: t('faq', 'a5') },
    { question: t('faq', 'q6'), answer: t('faq', 'a6') },
  ];

  return (
    <section id="faq" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            {t('faq', 'title')}{' '}
            <span className="gradient-text">{t('faq', 'titleHighlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">{t('faq', 'subtitle')}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass rounded-xl md:rounded-2xl px-4 md:px-6 border-none">
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-4 md:py-6 text-sm md:text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-sm md:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="text-center mt-10 md:mt-12">
          <p className="text-muted-foreground text-sm md:text-base mb-4">{t('faq', 'notFound')}</p>
          <button onClick={() => { if (window.voiceflow?.chat) { window.voiceflow.chat.open(); } }} className="btn-secondary inline-flex items-center gap-2 text-sm md:text-base">
            {t('faq', 'chatWith')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
