import { translateErrorCode } from "../src/index";
import { translations } from "../src/translations";

describe("Integration: translateErrorCode()", () => {
  it("always returns a string (never throws)", () => {
    expect(typeof translateErrorCode("invalid_credentials")).toBe("string");
    expect(typeof translateErrorCode("does_not_exist")).toBe("string");
    expect(typeof translateErrorCode("invalid_credentials", "xx" as any)).toBe(
      "string",
    );
    expect(typeof translateErrorCode("x", "auto")).toBe("string");
  });

  it('normalizes empty or undefined codes to unknown_error', () => {
    // empty string
    expect(translateErrorCode('', 'es')).toBe(translations.es.unknown_error);
    // undefined
    expect(translateErrorCode(undefined, 'es')).toBe(translations.es.unknown_error);
  });

  it("fallback chain: target → en → unknown_error", () => {
    // 1) de has invalid_credentials
    expect(translateErrorCode("invalid_credentials", "de")).toBe(
      translations.de.invalid_credentials,
    );
    // 2) code not in fr but in en? fallback to en
    const maybeInEn = translations.en["does_not_exist"];
    const expected = maybeInEn ?? translations.en.unknown_error;
    expect(translateErrorCode("does_not_exist", "fr")).toBe(expected);
    // 3) totally unknown code → unknown_error
    expect(translateErrorCode("xyz123")).toBe(
      translations.en.unknown_error,
    );
  });
});
