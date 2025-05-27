import en from './en';
import de from './de';
import es from './es';
import fr from './fr';
import jp from './jp';
import kr from './kr';
import pl from './pl';
import pt from './pt';
import cn from './cn';
import { SupportedLanguage } from '../types';
import { TranslationStructure } from '../types';

export const translations: Record<SupportedLanguage, TranslationStructure> = {
  en,
  de,
  es,
  fr,
  jp,
  kr,
  pl,
  pt,
  cn,
};
