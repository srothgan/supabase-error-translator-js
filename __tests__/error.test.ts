import { translateErrorCode } from '../src/index';
import { translations } from '../src/translations';

describe('Integration: translateErrorCode()', () => {
  it('always returns a string (never throws)', () => {
    expect(typeof translateErrorCode('invalid_credentials', 'auth')).toBe('string');
    expect(typeof translateErrorCode('does_not_exist', 'realtime')).toBe('string');
    expect(typeof translateErrorCode('invalid_credentials', 'functions', 'xx' as any)).toBe(
      'string',
    );
    expect(typeof translateErrorCode('x', 'database', 'auto')).toBe('string');
  });

  it('normalizes empty, whitespace-only, or undefined codes to unknown_error', () => {
    expect(translateErrorCode('', 'storage', 'es')).toBe(translations.es.unknown_error);
    expect(translateErrorCode('   ', 'storage', 'es')).toBe(translations.es.unknown_error);
    expect(translateErrorCode(undefined, 'database', 'es')).toBe(translations.es.unknown_error);
  });

  it('falls back to localized unknown_error for unsupported service names at runtime', () => {
    expect(translateErrorCode('invalid_credentials', 'unsupported' as any, 'de')).toBe(
      translations.de.unknown_error,
    );
  });

  it('fallback chain: target service message -> English service message -> localized unknown_error', () => {
    expect(translateErrorCode('invalid_credentials', 'auth', 'de')).toBe(
      translations.de.services.auth.invalid_credentials,
    );

    const originalGermanMessage = translations.de.services.auth.invalid_credentials;

    try {
      delete (translations.de.services.auth as Record<string, string>).invalid_credentials;

      expect(translateErrorCode('invalid_credentials', 'auth', 'de')).toBe(
        translations.en.services.auth.invalid_credentials,
      );
    } finally {
      translations.de.services.auth.invalid_credentials = originalGermanMessage;
    }

    expect(translateErrorCode('xyz123', 'functions', 'fr')).toBe(translations.fr.unknown_error);
  });
});
