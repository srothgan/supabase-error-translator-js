import { translations } from "./translations";
import {
  detectBrowserLanguage,
  isSupportedLanguage,
  SupportedLanguage,
  SUPPORTED_LANGUAGES,
} from "./languages";

let currentLanguage: SupportedLanguage = "en";

/**
 * Set the current language. Pass a supported ISO code or "auto".
 * Falls back to English if the given code (or auto‐detect) isn't supported.
 */
export function setLanguage(lang: SupportedLanguage | "auto"): void {
  let resolved: SupportedLanguage;

  if (lang === "auto") {
    const detected = detectBrowserLanguage();
    resolved = isSupportedLanguage(detected) ? detected : "en";
  } else {
    resolved = isSupportedLanguage(lang) ? lang : "en";
  }

  currentLanguage = resolved;
}

/**
 * Translate a Supabase error code into localized text.
 *
 * Fallback chain:
 * 1) requested language (or currentLanguage)
 * 2) English
 * 3) English generic unexpected_failure
 *
 * @param code The error-code key
 * @param lang Optional override: an ISO code or "auto"
 */
export function translateErrorCode(
  code: string,
  lang?: SupportedLanguage | "auto"
): string {
  // determine target language without mutating currentLanguage
  let target: SupportedLanguage;
  if (lang === undefined) {
    target = currentLanguage;
  } else if (lang === "auto") {
    const detected = detectBrowserLanguage();
    target = isSupportedLanguage(detected) ? detected : "en";
  } else {
    target = isSupportedLanguage(lang) ? lang : "en";
  }

  // 1) try the target language
  const byTarget = translations[target]?.[code];
  if (byTarget) {
    return byTarget;
  }

  // 2) fallback to English if available
  const byEnglish = translations["en"]?.[code];
  if (byEnglish) {
    return byEnglish;
  }

  // 3) last resort: English generic fallback
  return translations["en"]["unexpected_failure"];
}

/** Get the currently active language. */
export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

/** Get all supported ISO language codes. */
export function getSupportedLanguages(): SupportedLanguage[] {
  return [...SUPPORTED_LANGUAGES];
}
