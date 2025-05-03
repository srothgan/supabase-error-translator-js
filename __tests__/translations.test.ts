import { translations } from "../src/translations";

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
