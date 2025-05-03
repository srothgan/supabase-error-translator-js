/** Supported ISO language codes */
export const SUPPORTED_LANGUAGES = ['en', 'de', 'es', 'fr'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Type guard to ensure a string is a SupportedLanguage
 * @param lang iso code
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);
}

/**
 * Detect the browser's default language (first part before '-')
 */
export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof navigator !== 'undefined' && navigator.language) {
    const primary = navigator.language.split('-')[0];
    if (isSupportedLanguage(primary)) return primary;
  }
  return 'en';
}
