export const SUPPORTED_SERVICES = ['auth', 'storage', 'realtime', 'database', 'functions'] as const;
export type ErrorService = (typeof SUPPORTED_SERVICES)[number];

export type TranslationStructure = {
  unknown_error: string;
  services: Record<ErrorService, Record<string, string>>;
};

export { SUPPORTED_LANGUAGES } from './registry';
export type { SupportedLanguage } from './registry';
