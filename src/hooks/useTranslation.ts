import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (section: keyof typeof translations, key: string): string => {
    const sectionData = translations[section];
    if (!sectionData) return key;
    const entry = (sectionData as Record<string, { en: string; ar: string }>)[key];
    if (!entry) return key;
    return entry[language] || entry.en;
  };

  return { t, language };
};
