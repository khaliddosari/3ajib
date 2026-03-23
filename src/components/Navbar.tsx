import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from '@/components/ui/sidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  const { language, toggleLanguage, isArabic } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const routePages: Record<string, string> = {
    demo: '/demo',
    features: '/features',
  };

  const navItems = [
    { key: 'home', label: t('nav', 'home') },
    { key: 'demo', label: t('nav', 'demo') },
    { key: 'features', label: t('nav', 'features') },
    { key: 'team', label: t('nav', 'team') },
    { key: 'contact', label: t('nav', 'contact') },
  ];

  const handleNavClick = (key: string) => {
    setMobileMenuOpen(false);
    if (routePages[key]) {
      navigate(routePages[key]);
    } else {
      const element = document.getElementById(key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-strong py-3' : 'py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-lg md:text-xl gradient-text" style={{ fontFamily: "'Fredoka One', cursive" }}>
              3ajib
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={routePages[item.key] || `#${item.key}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.key); }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-glow to-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span>{isArabic ? 'EN' : 'عربي'}</span>
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 glass rounded-lg text-xs font-semibold"
            >
              {isArabic ? 'EN' : 'عربي'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="p-2 glass rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden"
          >
            <div className="glass-strong mx-4 rounded-2xl p-4 border border-border/50">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className="text-left px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
