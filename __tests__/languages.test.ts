import {
    detectBrowserLanguage,
    isSupportedLanguage,
    SUPPORTED_LANGUAGES,
  } from "../src/languages";
  
  describe("languages.ts", () => {
    test("SUPPORTED_LANGUAGES contains en, de, es, fr", () => {
      expect(SUPPORTED_LANGUAGES).toEqual(
        expect.arrayContaining(["en", "de", "es", "fr"])
      );
    });
  
    test("isSupportedLanguage true for supported", () => {
      SUPPORTED_LANGUAGES.forEach((lang) => {
        expect(isSupportedLanguage(lang)).toBe(true);
      });
    });
  
    test("isSupportedLanguage false for unsupported", () => {
      expect(isSupportedLanguage("xx" as any)).toBe(false);
    });
  
    test("detectBrowserLanguage returns a supported code or falls back", () => {
      const dl = detectBrowserLanguage();
      expect(
        [...SUPPORTED_LANGUAGES, "en"].includes(dl)
      ).toBe(true);
    });
  });
  