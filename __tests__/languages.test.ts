import {
  detectBrowserLanguage,
  isSupportedLanguage,
} from "../src/languages";
import { SUPPORTED_LANGUAGES } from "../src/types";

describe("languages.ts", () => {
  const originalNavigator = window.navigator;

  afterAll(() => {
    window.navigator = originalNavigator;
  });

  test('defaults to "en" if navigator or language is unavailable', () => {
    Object.defineProperty(window, 'navigator', { value: undefined, writable: true });
    expect(detectBrowserLanguage()).toBe('en');

    Object.defineProperty(window, 'navigator', { value: {}, writable: true });
    expect(detectBrowserLanguage()).toBe('en');
  });
  
  test("SUPPORTED_LANGUAGES contains en, de, es, fr", () => {
    expect(SUPPORTED_LANGUAGES).toEqual(
      expect.arrayContaining(["en", "de", "es", "fr"]),
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
    expect([...SUPPORTED_LANGUAGES, "en"].includes(dl)).toBe(true);
  });
});
