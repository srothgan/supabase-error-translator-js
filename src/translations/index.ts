import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import { SupportedLanguage } from '../types';
import { TranslationStructure } from '../types';

export const translations: Record<SupportedLanguage, TranslationStructure> = {
  en,
  de,
  es,
  fr,
};
