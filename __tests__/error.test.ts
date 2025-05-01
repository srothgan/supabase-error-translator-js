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

  it("fallback chain: target → en → unexpected_failure", () => {
    // 1) de has invalid_credentials
    expect(translateErrorCode("invalid_credentials", "de")).toBe(
      translations.de.invalid_credentials,
    );
    // 2) code not in fr but in en? fallback to en
    const maybeInEn = translations.en["does_not_exist"];
    const expected = maybeInEn ?? translations.en.unexpected_failure;
    expect(translateErrorCode("does_not_exist", "fr")).toBe(expected);
    // 3) totally unknown code → unexpected_failure
    expect(translateErrorCode("xyz123")).toBe(
      translations.en.unexpected_failure,
    );
  });
});
