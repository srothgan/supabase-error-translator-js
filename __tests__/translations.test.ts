import { translations } from "../src/translations";
import { SUPPORTED_LANGUAGES } from "../src/types";

describe("translations index", () => {
  it("exports maps for en, de, es, fr", () => {
    expect(translations).toHaveProperty("en");
    expect(translations).toHaveProperty("de");
    expect(translations).toHaveProperty("es");
    expect(translations).toHaveProperty("fr");
  });

  it("every language defines unknown_error", () => {
    Object.entries(translations).forEach(([lang, map]) => {
      expect(map).toHaveProperty("unknown_error");
      expect(typeof map.unknown_error).toBe("string");
    });
  });
});

describe('translation keys completeness', () => {
  const enKeys = Object.keys(translations.en).sort();

  SUPPORTED_LANGUAGES.forEach((lang) => {
    test(`"${lang}" has the same keys as English`, () => {
      const map = translations[lang as keyof typeof translations];
      expect(map).toBeDefined();

      const keys = Object.keys(map).sort();

      const missing = enKeys.filter((k) => !keys.includes(k));
      const extra = keys.filter((k) => !enKeys.includes(k));

      expect(missing).toEqual([]);
      expect(extra).toEqual([]);
    });
  });
});