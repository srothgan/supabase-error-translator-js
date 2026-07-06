import en from './translations/en';
import ar from './translations/ar';
import de from './translations/de';
import es from './translations/es';
import fr from './translations/fr';
import ja from './translations/ja';
import ko from './translations/ko';
import pl from './translations/pl';
import pt from './translations/pt';
import zh from './translations/zh';
import { deepFreeze, type DeepReadonly } from './deep-freeze';
import type { TranslationStructure } from './types';

const translationRegistry = deepFreeze({
  en,
  ar,
  de,
  es,
  fr,
  ja,
  ko,
  pl,
  pt,
  zh,
} satisfies Record<string, TranslationStructure>);

export type SupportedLanguage = keyof typeof translationRegistry;
export type TranslationRegistry = DeepReadonly<Record<SupportedLanguage, TranslationStructure>>;

export const translations: TranslationRegistry = translationRegistry;

export const SUPPORTED_LANGUAGES = Object.freeze(
  Object.keys(translations),
) as readonly SupportedLanguage[];
