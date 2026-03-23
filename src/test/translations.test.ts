import { describe, it, expect } from 'vitest';
import { translations } from '../i18n/translations';

describe('translations', () => {
  const sections = Object.keys(translations) as (keyof typeof translations)[];

  it('has at least one section', () => {
    expect(sections.length).toBeGreaterThan(0);
  });

  it('every key has both en and ar translations', () => {
    const missing: string[] = [];

    for (const section of sections) {
      const sectionData = translations[section] as Record<string, { en: string; ar: string }>;
      for (const [key, value] of Object.entries(sectionData)) {
        if (!value.en) missing.push(`${section}.${key}.en`);
        if (!value.ar) missing.push(`${section}.${key}.ar`);
      }
    }

    expect(missing).toEqual([]);
  });

  it('no translation value is empty string', () => {
    const empty: string[] = [];

    for (const section of sections) {
      const sectionData = translations[section] as Record<string, { en: string; ar: string }>;
      for (const [key, value] of Object.entries(sectionData)) {
        if (value.en === '') empty.push(`${section}.${key}.en`);
        if (value.ar === '') empty.push(`${section}.${key}.ar`);
      }
    }

    expect(empty).toEqual([]);
  });

  it('nav section has expected keys', () => {
    expect(translations.nav).toHaveProperty('home');
    expect(translations.nav).toHaveProperty('demo');
    expect(translations.nav).toHaveProperty('features');
  });

  it('hero section has expected keys', () => {
    expect(translations.hero).toHaveProperty('tagline');
    expect(translations.hero).toHaveProperty('description');
    expect(translations.hero).toHaveProperty('tryDemo');
  });
});