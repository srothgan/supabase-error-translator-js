import { translations } from './translations';
import { detectBrowserLanguage, isSupportedLanguage } from './languages';
import { SupportedLanguage, SUPPORTED_LANGUAGES, ErrorService } from './types';

let currentLanguage: SupportedLanguage = 'en';

/**
 * Set the current language. Pass a supported ISO code or "auto".
 * Falls back to English if the given code (or auto-detect) isn't supported.
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
 * to a user-friendly message, with an industry-standard fallback chain:
 *   1) Target language/service/code
 *   2) English/service/code
 *   3) Target language/unknown_error
 *   4) English/unknown_error
 */
export function translateErrorCode(
  code: string | undefined,
  service: ErrorService,
  lang?: SupportedLanguage | 'auto',
): string {
  // Auto-normalize blank codes to "unknown_error"
  const key = code?.trim() || 'unknown_error';

  // determine target language without mutating currentLanguage
  let target: SupportedLanguage;
  if (lang === undefined || lang === 'auto') {
    target = detectBrowserLanguage();
  } else {
    target = isSupportedLanguage(lang) ? lang : 'en';
  }

  // Get translation sets we'll use for fallbacks
  const targetTranslations = translations[target] || translations.en;
  const englishTranslations = translations.en;

  // If using unknown_error as the key, skip service-specific lookup
  if (key === 'unknown_error') {
    return targetTranslations.unknown_error || englishTranslations.unknown_error;
  }

  // 1) Specific code in target language + service
  if (targetTranslations.services[service]?.[key]) {
    return targetTranslations.services[service][key];
  }

  // 2) Fallback: same code in English + service
  if (englishTranslations.services[service]?.[key]) {
    return englishTranslations.services[service][key];
  }

  // 3) Fallback: unknown_error in target language
  if (targetTranslations.unknown_error) {
    return targetTranslations.unknown_error;
  }

  // 4) Final fallback: English 'unknown_error'
  return englishTranslations.unknown_error;
}

/** Get the currently active language. */
export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

/** Get all supported ISO language codes. */
export function getSupportedLanguages(): SupportedLanguage[] {
  return [...SUPPORTED_LANGUAGES];
}
