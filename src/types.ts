export type ErrorService = 'auth' | 'storage' | 'realtime' | 'database' | 'functions';

export type TranslationStructure = {
  unknown_error: string;
  services: {
    auth: Record<string, string>;
    storage: Record<string, string>;
    realtime: Record<string, string>;
    database: Record<string, string>;
    functions: Record<string, string>;
  };
};

export const SUPPORTED_LANGUAGES = ['en', 'de', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'zh'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
