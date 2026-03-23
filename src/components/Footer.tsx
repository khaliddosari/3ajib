import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  const productLinks = [
    { label: t('footer', 'features') || 'Features', href: '#features' },
    { label: t('pricing', 'title') || 'Pricing', href: '#pricing' },
    { label: t('caseStudies', 'badge') || 'Case Studies', href: '#case-studies' },
    { label: t('howItWorks', 'title') || 'How It Works', href: '#how-it-works' },
    { label: t('footer', 'requestDemo'), href: '#demo' },
  ];

  const resourceLinks = [
    { label: t('footer', 'researchPaper'), href: '/Experience_Intelligence_Research.pdf' },
    { label: t('footer', 'blog'), href: '#' },
    { label: t('faq', 'title') + ' ' + t('faq', 'titleHighlight'), href: '#faq' },
    { label: t('footer', 'documentation'), href: '#' },
    { label: t('footer', 'apiDocs'), href: '#' },
  ];

  const companyLinks = [
    { label: t('footer', 'aboutUs'), href: '#' },
    { label: t('footer', 'careers'), href: '#' },
    { label: t('footer', 'partners'), href: '#' },
    { label: t('footer', 'pressKit'), href: '#' },
    { label: t('nav', 'contact'), href: '#contact' },
  ];

  return (
    <footer id="contact" className="py-12 md:py-16 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg md:text-xl gradient-text" style={{ fontFamily: "'Fredoka One', cursive" }}>3ajib</span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">{t('footer', 'tagline')}</p>
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" /><span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" /><span>contact@3ajib.pro</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base md:text-lg mb-3 md:mb-4 text-foreground">{t('footer', 'product')}</h4>
            <ul className="space-y-2 md:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}><a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base md:text-lg mb-3 md:mb-4 text-foreground">{t('footer', 'resources')}</h4>
            <ul className="space-y-2 md:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}><a href={link.href} target={link.href.endsWith('.pdf') ? '_blank' : undefined} rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined} className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base md:text-lg mb-3 md:mb-4 text-foreground">{t('footer', 'company')}</h4>
            <ul className="space-y-2 md:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}><a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-xs md:text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">{t('footer', 'copyright')}</p>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">{t('footer', 'privacy')}</a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">{t('footer', 'terms')}</a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">{t('footer', 'cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
