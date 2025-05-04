import { translateErrorCode } from "../src/index";
import { translations } from "../src/translations";

describe("Integration: translateErrorCode()", () => {
  it("always returns a string (never throws)", () => {
    expect(typeof translateErrorCode("invalid_credentials", "auth")).toBe("string");
    expect(typeof translateErrorCode("does_not_exist", "realtime")).toBe("string");
    expect(typeof translateErrorCode("invalid_credentials", "functions", "xx" as any)).toBe(
      "string",
    );
    expect(typeof translateErrorCode("x", "database", "auto")).toBe("string");
  });

  it('normalizes empty or undefined codes to unknown_error', () => {
    // empty string
    expect(translateErrorCode('', "storage", 'es')).toBe(translations.es.unknown_error);
    // undefined
    expect(translateErrorCode(undefined, "database", 'es')).toBe(translations.es.unknown_error);
  });

  it("fallback chain: target → en → unknown_error", () => {
    // 1) de has invalid_credentials
    expect(translateErrorCode("invalid_credentials", "auth", "de")).toBe(
      translations.de.services.auth.invalid_credentials,
    );
    // 2) code not in fr but in en? fallback to en
    const maybeInEn = translations.fr.services.functions["does_not_exist"];
    const expected = maybeInEn ?? translations.fr.unknown_error;
    expect(translateErrorCode("does_not_exist", "functions","fr")).toBe(expected);
    // 3) totally unknown code → unknown_error
    expect(translateErrorCode("xyz123", "functions")).toBe(
      translations.en.unknown_error,
    );
  });
});
