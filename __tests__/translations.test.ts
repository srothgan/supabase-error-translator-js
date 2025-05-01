import { translations } from "../src/translations";

describe("translations index", () => {
  it("exports maps for en, de, es, fr", () => {
    expect(translations).toHaveProperty("en");
    expect(translations).toHaveProperty("de");
    expect(translations).toHaveProperty("es");
    expect(translations).toHaveProperty("fr");
  });

  it("every language defines unexpected_failure", () => {
    Object.entries(translations).forEach(([lang, map]) => {
      expect(map).toHaveProperty("unexpected_failure");
      expect(typeof map.unexpected_failure).toBe("string");
    });
  });
});
