# Supabase Translator JS

>  **DISCLAIMER:** This is a private project and is NOT officially associated with, endorsed by, or affiliated with Supabase in any way. This project is maintained independently.

A simple JavaScript/TypeScript library for translating Supabase messages and error codes across multiple languages.

## Overview

This library provides translations for Supabase error codes and messages in multiple languages. It's designed to help developers create a better user experience by displaying localized error messages to users based on their preferred language.

Currently supports the following languages:
- English (en)
- German (de)
- Spanish (es)
- French (fr)

## Installation

```bash
npm install supabase-error-translator-js
```

or

```bash
yarn add supabase-error-translator-js
```

## Usage

### Basic Usage

```typescript
import { translateErrorCode, setLanguage } from 'supabase-error-translator-js';

// Set the language (defaults to English if not set)
setLanguage('es'); // Set to Spanish

// Translate an error code
const message = translateErrorCode('email_not_confirmed');
console.log(message); // Outputs the Spanish translation for this error code
```

### Auto-Detect Browser Language

```typescript
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';

// Automatically detect and use the browser's language
setLanguage('auto');

// Translate an error code using the detected language
const message = translateErrorCode('invalid_credentials');
console.log(message);
```

### Get Current Language and Supported Languages

```typescript
import { getCurrentLanguage, getSupportedLanguages } from 'supabase-error-translator-js';

// Get the currently active language
const currentLang = getCurrentLanguage();
console.log(currentLang); // e.g., 'en', 'de', etc.

// Get all supported languages
const supportedLangs = getSupportedLanguages();
console.log(supportedLangs); // ['en', 'de', 'es', 'fr']
```

### Override Language for Specific Translations

```typescript
import { translateErrorCode } from 'supabase-error-translator-js';

// Translate using a specific language (without changing the default)
const message = translateErrorCode('phone_exists', 'fr');
console.log(message); // French translation
```

## Error Handling and Fallbacks

The library implements a fallback chain to ensure that a meaningful message is always returned:

1. First tries to use the requested language (or current language if not specified)
2. Falls back to English if the translation doesn't exist in the requested language
3. As a last resort, falls back to a generic English "unexpected failure" message

This approach ensures that even if a specific error code doesn't have a translation in the user's preferred language, they will still receive a meaningful message.

## API Reference

### `setLanguage(lang: SupportedLanguage | "auto"): void`

Sets the current language for translations. If "auto" is passed, it will attempt to detect the browser's language.

- **Parameters:**
  - `lang`: A supported ISO language code ('en', 'de', 'es', 'fr') or "auto"
  
- **Behavior:**
  - If an unsupported language is provided, falls back to English ('en')

### `translateErrorCode(code: string, lang?: SupportedLanguage | "auto"): string`

Translates a Supabase error code into localized text.

- **Parameters:**
  - `code`: The Supabase error code to translate
  - `lang`: (Optional) Override the current language for this translation

- **Returns:**
  - The translated message as a string

### `getCurrentLanguage(): SupportedLanguage`

Returns the currently active language.

- **Returns:**
  - The current language code as a string

### `getSupportedLanguages(): SupportedLanguage[]`

Returns an array of all supported language codes.

- **Returns:**
  - Array of supported language codes

## Examples

### React Integration

```jsx
import React, { useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set language based on user preference or browser
    setLanguage('auto');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        // Translate the error code
        const translatedError = translateErrorCode(error.code);
        setError(translatedError);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <div className="error">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## Supported Error Codes

The library supports numerous Supabase error codes, including but not limited to:

- Supabase Auth
  - Authentication errors (invalid credentials, email not confirmed, etc.)
  - User management errors (user not found, already exists, etc.)
  - Rate limiting errors (too many requests, over email send rate, etc.)
  - MFA-related errors (challenge expired, verification failed, etc.)
  - OAuth and SSO errors (provider disabled, bad callback, etc.)

Each error code is translated according to the specified language.

## Upcoming Error Codes

The library is not finished. Upcoming supabase error code translations are:
- Database (have not yet found them in the docs)
- Storage
- Realtime

## Contributing

Contributions are welcome! If you'd like to add support for additional languages or improve existing translations, please submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-language/[language code]`
3. Add your translations
4. Commit your changes: `git commit -m 'Add support for [language]'`
5. Push to the branch: `git push origin feature/new-language`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
