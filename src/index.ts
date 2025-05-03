import { translations } from './translations';
import {
  detectBrowserLanguage,
  isSupportedLanguage,
  SupportedLanguage,
  SUPPORTED_LANGUAGES,
} from './languages';

let currentLanguage: SupportedLanguage = 'en';

/**
 * Set the current language. Pass a supported ISO code or "auto".
 * Falls back to English if the given code (or auto‐detect) isn't supported.
 */
export function setLanguage(lang: SupportedLanguage | 'auto'): void {
  let resolved: SupportedLanguage;

  if (lang === 'auto') {
    const detected = detectBrowserLanguage();
    resolved = isSupportedLanguage(detected) ? detected : 'en';
  } else {
    resolved = isSupportedLanguage(lang) ? lang : 'en';
  }

  currentLanguage = resolved;
}

/**
 * Map a Supabase error code (which may be empty or undefined)
 * to a user‐friendly message, with an industry‐standard fallback chain:
 *   1) locale code
 *   2) English code
 *   3) English unknown_error
 */
export function translateErrorCode(
  code: string | undefined,
  lang?: SupportedLanguage | 'auto',
): string {
  // — Auto‐normalize blank codes to "unknown_error"
  const key = code?.trim() || 'unknown_error';

  // determine target language without mutating currentLanguage
  let target: SupportedLanguage;
  if (lang === undefined) {
    target = currentLanguage;
  } else if (lang === 'auto') {
    const detected = detectBrowserLanguage();
    target = isSupportedLanguage(detected) ? detected : 'en';
  } else {
    target = isSupportedLanguage(lang) ? lang : 'en';
  }

  // 1) Specific code in target locale
  if (translations[target][key]) {
    return translations[target][key];
  }

  // 2) Fallback: same code in English
  if (translations.en[key]) {
    return translations.en[key];
  }

  // 3) Final fallback: English 'unknown_error'
  return translations.en['unknown_error'];
}

/** Get the currently active language. */
export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

/** Get all supported ISO language codes. */
export function getSupportedLanguages(): SupportedLanguage[] {
  return [...SUPPORTED_LANGUAGES];
}
