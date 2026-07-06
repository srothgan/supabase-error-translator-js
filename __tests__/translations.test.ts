import { translations } from '../src/translations';
import { SUPPORTED_LANGUAGES, SUPPORTED_SERVICES } from '../src/types';

describe('translations index', () => {
  it('exports one translation map for every supported language', () => {
    expect(Object.keys(translations).sort()).toEqual([...SUPPORTED_LANGUAGES].sort());
  });

  it('exports immutable translation maps', () => {
    expect(Object.isFrozen(translations)).toBe(true);

    SUPPORTED_LANGUAGES.forEach((lang) => {
      expect(Object.isFrozen(translations[lang])).toBe(true);
      expect(Object.isFrozen(translations[lang].services)).toBe(true);

      SUPPORTED_SERVICES.forEach((service) => {
        expect(Object.isFrozen(translations[lang].services[service])).toBe(true);
      });
    });
  });

  it('every language defines a non-empty unknown_error', () => {
    Object.values(translations).forEach((map) => {
      expect(map.unknown_error.trim().length).toBeGreaterThan(0);
    });
  });
});

describe('translation keys completeness', () => {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    test(`"${lang}" defines every supported service`, () => {
      expect(Object.keys(translations[lang].services).sort()).toEqual(
        [...SUPPORTED_SERVICES].sort(),
      );
    });

    SUPPORTED_SERVICES.forEach((service) => {
      test(`"${lang}" has the same "${service}" keys as English`, () => {
        const englishKeys = Object.keys(translations.en.services[service]).sort();
        const targetKeys = Object.keys(translations[lang].services[service]).sort();

        expect(targetKeys).toEqual(englishKeys);
      });

      test(`"${lang}" has non-empty "${service}" messages`, () => {
        Object.values(translations[lang].services[service]).forEach((message) => {
          expect(message.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });
});
