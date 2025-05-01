import en from "./en";
import de from "./de";
import es from "./es";
import fr from "./fr";
import { SupportedLanguage } from "../languages";

export const translations: Record<SupportedLanguage, Record<string, string>> = {
  en,
  de,
  es,
  fr,
};
