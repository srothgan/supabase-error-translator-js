import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import ja from './ja';
import ko from './ko';
import pl from './pl';
import pt from './pt';
import zh from './zh';
import { SupportedLanguage } from '../types';
import { TranslationStructure } from '../types';

export const translations: Record<SupportedLanguage, TranslationStructure> = {
  en,
  de,
  es,
  fr,
  ja,
  ko,
  pl,
  pt,
  zh,
};
