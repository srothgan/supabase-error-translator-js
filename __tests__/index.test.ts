import {
  setLanguage,
  translateErrorCode,
  getCurrentLanguage,
  getSupportedLanguages,
} from "../src/index";
import { translations } from "../src/translations";
import { SUPPORTED_LANGUAGES } from "../src/types";

describe("Core API", () => {
  beforeEach(() => {
    setLanguage("en");
  });

  test("getSupportedLanguages returns the full list", () => {
    expect(getSupportedLanguages()).toEqual(
      expect.arrayContaining(SUPPORTED_LANGUAGES),
    );
  });

  test("getCurrentLanguage is initially 'en'", () => {
    expect(getCurrentLanguage()).toBe("en");
  });

  test("setLanguage('de') changes current language", () => {
    setLanguage("de");
    expect(getCurrentLanguage()).toBe("de");
  });

  test("setLanguage to unsupported code falls back to 'en'", () => {
    setLanguage("xx" as any);
    expect(getCurrentLanguage()).toBe("en");
  });

  test("setLanguage('auto') picks a supported language or 'en'", () => {
    setLanguage("auto");
    const curr = getCurrentLanguage();
    expect(getSupportedLanguages()).toContain(curr);
  });
});

describe("translateErrorCode()", () => {
  beforeEach(() => setLanguage("en"));

  test("returns the en-text for a known code", () => {
    const english = translations.en.services.auth.invalid_credentials;
    expect(translateErrorCode("invalid_credentials", "auth")).toBe(english);
  });

  test("returns de-text when overridden to 'de'", () => {
    const german = translations.de.services.auth.invalid_credentials;
    expect(translateErrorCode("invalid_credentials","auth", "de")).toBe(german);
  });

  test("unknown code in de falls back to en", () => {
    // assume 'does_not_exist' is not in de, will go to unknown_error
    const fallback =
      translations.de.unknown_error
    expect(translateErrorCode("does_not_exist", "auth", "de")).toBe(fallback);
  });

  test("totally unknown code returns unknown_error", () => {
    expect(translateErrorCode("unknown_error", "storage")).toBe(
      translations.en.unknown_error,
    );
  });

  test("unknown override-lang falls back to en", () => {
    const english = translations.en.services.auth.invalid_credentials;
    expect(translateErrorCode("invalid_credentials", "auth", "zz" as any)).toBe(
      english,
    );
  });
});
