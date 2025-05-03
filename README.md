# Supabase Error Translator JS

A simple JavaScript/TypeScript library for translating Supabase error codes across multiple languages.

> **DISCLAIMER:** This is a private project and is NOT officially associated with, endorsed by, or affiliated with Supabase in any way. This project is maintained independently.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/supabase-error-translator-js)](https://www.npmjs.com/package/supabase-error-translator-js)
[![npm downloads](https://img.shields.io/npm/dm/supabase-error-translator-js.svg)](https://www.npmjs.com/package/supabase-error-translator-js)

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Auto-Detect Browser Language](#auto-detect-browser-language)
  - [Get Current Language and Supported Languages](#get-current-language-and-supported-languages)
  - [Override Language for Specific Translations](#override-language-for-specific-translations)
- [Error Handling and Fallbacks](#error-handling-and-fallbacks)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Supported Error Codes](#supported-error-codes)
- [Upcoming Error Codes](#upcoming-error-codes)
- [Contributing](#contributing)
- [License](#license)

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

We normalize any empty or whitespace-only code to the special key `unknown_error` before doing any locale lookups. From there, we follow a three-step, industry-standard chain:

1. **Locale lookup**: return `translations[target][key]` (this will even return `translations[target]["unknown_error"]` for blank codes).
2. **English lookup**: if the code isn’t in the user’s locale, try `translations.en[key]`.
3. **Generic fallback**: finally, return `translations.en["unknown_error"]`.

This ensures that blank or unrecognized codes first yield a localized “unknown error” message before ever falling back to English.

## API Reference

### `setLanguage(lang: SupportedLanguage | "auto"): void`

Sets the current language for translations. If "auto" is passed, it will attempt to detect the browser's language.

- **Parameters:**
  - `lang`: A supported ISO language code ('en', 'de', 'es', 'fr') or "auto"
- **Behavior:**
  - If an unsupported language is provided, falls back to English ('en')

### `translateErrorCode(code?: string, lang?: SupportedLanguage | "auto"): string`

Translates a Supabase error code into localized text, normalizing blank or missing codes to `unknown_error`.

- **Parameters:**

  - `code?`: The Supabase error code to translate. If `undefined` or empty, treated as `"unknown_error"`.
  - `lang?`: (Optional)
    - Omitted → use `currentLanguage`.
    - `"auto"` → detect via `detectBrowserLanguage()`, fallback to `'en'` if unsupported.
    - Any other value → if unsupported, fallback to `'en'`.

- **Returns:**
  - The translated message, using this lookup chain:
    1. `translations[target][key]`
    2. `translations.en[key]`
    3. `translations.en["unknown_error"]`

### `getCurrentLanguage(): SupportedLanguage`

Returns the currently active language.

- **Returns:**
  - The current language code as a string

### `getSupportedLanguages(): SupportedLanguage[]`

Returns an array of all supported language codes.

- **Returns:**
  - Array of supported language codes

## Examples

### Nextjs15 Integration

```jsx
import React, { useState, useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';
import { useRouter } from 'next/navigation';

function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set language
    setLanguage('de');
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Basic validation
    if (password !== confirmPassword) {
      setError(translateErrorCode('same_password'));
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        // Translate the error code from Supabase
        const translatedError = translateErrorCode(error.code);
        setError(translatedError);
      } else {
        // Navigate to login page in Next.js 15
        router.push('/login');
        // Clear form
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (err) {
      setError(translateErrorCode('unknown_error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      {error && <div className="error">{error}</div>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        disabled={isLoading}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passwort"
        required
        disabled={isLoading}
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Wiederhole Passwort"
        required
        disabled={isLoading}
      />
      {/* Keep UI text in native language */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
      </button>
    </form>
  );
}
```

## Supported Error Codes

The library supports numerous Supabase error codes, including but not limited to:

- Auth
  - Authentication errors (invalid credentials, email not confirmed, etc.)
  - User management errors (user not found, already exists, etc.)
  - Rate limiting errors (too many requests, over email send rate, etc.)
  - MFA-related errors (challenge expired, verification failed, etc.)
  - OAuth and SSO errors (provider disabled, bad callback, etc.)
- Realtime
  - Configuration errors (disabled realtime, tenant not found, etc.)
  - Connection errors (WebSocket connection issues, authorization failures)
  - Rate limiting errors (channel limits, connection limits, join rate limits)
  - Database errors (CDC stream issues, replication slot problems)
  - System errors (node disconnection, migration failures, counter tracking errors)

Each error code is translated according to the specified language.

## Roadmap

We’re actively expanding support for additional Supabase error domains. Planned translations include:

- **Database**: Coming soon (pending official documentation).
- **Storage**: In progress.
- **Realtime**: Done.
- **Auth**: Done

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
