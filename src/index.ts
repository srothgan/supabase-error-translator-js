import { translations } from './translations';
import { detectBrowserLanguage, isSupportedLanguage } from './languages';
import { isSupportedService } from './services';
import { SupportedLanguage, SUPPORTED_LANGUAGES, ErrorService } from './types';
import type { ErrorCodeLookupResult } from './types';

export { isSupportedLanguage } from './languages';
export { isSupportedService } from './services';
export { SUPPORTED_LANGUAGES, SUPPORTED_SERVICES } from './types';
export type {
  ErrorCodeLookupResult,
  ErrorService,
  SupportedLanguage,
  TranslationStructure,
} from './types';

let currentLanguage: SupportedLanguage = 'en';

function resolveLanguage(
  lang: SupportedLanguage | 'auto' | undefined,
  fallback: SupportedLanguage,
): SupportedLanguage {
  if (lang === undefined) {
    return fallback;
  }

  if (lang === 'auto') {
    return detectBrowserLanguage();
  }

  return isSupportedLanguage(lang) ? lang : 'en';
}

/**
 * Set the current language. Pass a supported ISO code or "auto".
 * Falls back to English if the given code (or auto-detect) isn't supported.
 */
export function setLanguage(lang: SupportedLanguage | 'auto'): void {
  currentLanguage = resolveLanguage(lang, 'en');
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

  // Determine target language without mutating currentLanguage
  // - undefined => use currentLanguage (as per README contract)
  // - 'auto'    => detect via browser
  // - otherwise => use provided if supported, else 'en'
  const target = resolveLanguage(lang, currentLanguage);
  const targetService = isSupportedService(service) ? service : undefined;

  // Get translation sets we'll use for fallbacks
  const targetTranslations = translations[target] || translations.en;
  const englishTranslations = translations.en;

  // If using unknown_error as the key, skip service-specific lookup
  if (key === 'unknown_error') {
    return targetTranslations.unknown_error || englishTranslations.unknown_error;
  }

  // 1) Specific code in target language + service
  if (targetService && targetTranslations.services[targetService]?.[key]) {
    return targetTranslations.services[targetService][key];
  }

  // 2) Fallback: same code in English + service
  if (targetService && englishTranslations.services[targetService]?.[key]) {
    return englishTranslations.services[targetService][key];
  }

  // 3) Fallback: unknown_error in target language
  if (targetTranslations.unknown_error) {
    return targetTranslations.unknown_error;
  }

  // 4) Final fallback: English 'unknown_error'
  return englishTranslations.unknown_error;
}

/**
 * Strictly look up a Supabase error code without fallback messages.
 */
export function lookupErrorCode(
  code: string | undefined,
  service: ErrorService,
  lang?: SupportedLanguage | 'auto',
): ErrorCodeLookupResult {
  const target = resolveLanguage(lang, currentLanguage);
  const key = code?.trim();
  const message =
    key === 'unknown_error'
      ? translations[target].unknown_error
      : key && isSupportedService(service)
        ? translations[target].services[service]?.[key]
        : undefined;

  return {
    code: key ?? '',
    service,
    language: target,
    message,
  };
}

/** Get the currently active language. */
export function getCurrentLanguage(): SupportedLanguage {
  return currentLanguage;
}

/** Get all supported ISO language codes. */
export function getSupportedLanguages(): SupportedLanguage[] {
  return [...SUPPORTED_LANGUAGES];
}
