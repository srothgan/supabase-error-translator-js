# Supabase Error Translator JS

A comprehensive Supabase error code translator supporting 9 languages with ISO language codes

> **DISCLAIMER:** This is a private project and is NOT officially associated with, endorsed by, or affiliated with Supabase in any way. This project is maintained independently.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/supabase-error-translator-js)](https://www.npmjs.com/package/supabase-error-translator-js)
[![npm downloads](https://img.shields.io/npm/dt/supabase-error-translator-js.svg)](https://www.npmjs.com/package/supabase-error-translator-js)

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

  - [Auth Error](#auth-error)
  - [Database Error](#database-error)
  - [Storage Error](#storage-error)
  - [Realtime Error](#realtime-error)

- [Supported Error Codes](#supported-error-codes)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Overview

This library provides translations for Supabase error codes and messages in multiple languages. It's designed to help developers create a better user experience by displaying localized error messages to users based on their preferred language.

## Supported Languages

| Language   | Code | Native Name |
| ---------- | ---- | ----------- |
| English    | `en` | English     |
| German     | `de` | Deutsch     |
| Spanish    | `es` | Español     |
| French     | `fr` | Français    |
| Japanese   | `jp` | 日本語      |
| Korean     | `kr` | 한국어      |
| Polish     | `pl` | Polski      |
| Portuguese | `pt` | Português   |
| Chinese    | `cn` | 中文        |

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
const message = translateErrorCode('email_not_confirmed', 'auth');
console.log(message); // Outputs the Spanish translation for this error code
```

### Auto-Detect Browser Language

```typescript
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';

// Automatically detect and use the browser's language
setLanguage('auto');

// Translate an error code using the detected language
const message = translateErrorCode('invalid_credentials', 'auth');
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
console.log(supportedLangs); // ['en', 'de', 'es', 'fr', 'jp', 'kr', 'pl', 'pt', 'cn']
```

### Override Language for Specific Translations

```typescript
import { translateErrorCode } from 'supabase-error-translator-js';

// Translate using a specific language (without changing the default)
const message = translateErrorCode('phone_exists', 'auth', 'fr');
console.log(message); // French translation
```

## Error Handling and Fallbacks

We normalize any empty or whitespace-only code to the special key `unknown_error` before doing any locale lookups. From there, we follow a four-step, industry-standard fallback chain:

1. **Service-specific locale lookup**: First try `translations[target].services[service][key]` - looking for the error code in the specified service in the user's language.

2. **Service-specific English lookup**: If not found in the target language, try `translations.en.services[service][key]` - looking for the error code in the specified service in English.

3. **Generic locale fallback**: If the service-specific code isn't found, try `translations[target].unknown_error` - the generic unknown error message in the user's language.

4. **Generic English fallback**: Finally, return `translations.en.unknown_error` - the generic unknown error message in English.

This enhanced fallback chain ensures that:

- Service-specific error codes are properly translated
- Blank or unrecognized codes first yield a localized "unknown error" message before falling back to English
- The system is resilient to missing translations in any language or service
- Special handling for direct "unknown_error" requests bypasses service-specific lookups for efficiency

The `service` parameter allows the system to correctly handle cases where the same error code exists in multiple Supabase services with different meanings and contexts.

## API Reference

### `setLanguage(lang: SupportedLanguage | "auto"): void`

Sets the current language for translations. If "auto" is passed, it will attempt to detect the browser's language.

- **Parameters:**
  - `lang`: A supported ISO language code ('en', 'de', 'es', 'fr', 'jp', 'kr', 'pl', 'pt', 'cn') or "auto"
- **Behavior:**
  - If an unsupported language is provided, falls back to English ('en')

### `translateErrorCode(code?: string, service: ErrorService, lang?: SupportedLanguage | "auto"): string`

Translates a Supabase error code into localized text, normalizing blank or missing codes to unknown_error.

- **Parameters:**

  - `code?`: The Supabase error code to translate. If undefined or empty, treated as "unknown_error".
  - `service`: The Supabase service that generated the error:
    - 'auth' - Authentication and user management errors
    - 'storage' - File storage errors
    - 'realtime' - Realtime subscription errors
    - 'database' - Database query errors
    - 'functions' - Edge Functions errors
  - `lang?`: (Optional)
    - Omitted → use currentLanguage
    - "auto" → detect via detectBrowserLanguage(), fallback to 'en' if unsupported
    - Any other value → if unsupported, fallback to 'en'

- **Returns:**
  - The translated message, using this lookup chain:
    1. translations[target].services[service][key]
    2. translations.en.services[service][key]
    3. translations[target].unknown_error
    4. translations.en.unknown_error

### `getCurrentLanguage(): SupportedLanguage`

Returns the currently active language.

- **Returns:**
  - The current language code as a string

### `getSupportedLanguages(): SupportedLanguage[]`

Returns an array of all supported language codes.

- **Returns:**
  - Array of supported language codes

## Examples

### Auth Error

```jsx
import React, { useState, useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';
import { useRouter } from 'next/navigation';

function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        // Translate the error code from Supabase
        const translatedError = translateErrorCode(error.code, 'auth');
        setError(translatedError);
      } else {
        // Navigate to login page in Next.js 15
        router.push('/login');
        // Clear form
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError(translateErrorCode('unknown_error', 'auth'));
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
      {/* Keep UI text in native language */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Wird angemeldet...' : 'Anmelden'}
      </button>
    </form>
  );
}
```

### Database Error

```jsx
import React, { useState, useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Set language to German
    setLanguage('de');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');
    setIsSubmitting(true);

    // Basic validation
    if (!name || !price) {
      setError('Bitte fülle alle Pflichtfelder aus.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Attempt to insert a new product into the database
      const { data, error: dbError } = await supabase
        .from('products')
        .insert([
          {
            name,
            price: parseFloat(price),
            description,
            created_at: new Date(),
          },
        ])
        .select();

      if (dbError) {
        // Simply translate the database error code
        const translatedError = translateErrorCode(dbError.code, 'database');
        setError(translatedError);
      } else {
        // Clear the form and show success message
        setName('');
        setPrice('');
        setDescription('');
        setSuccessMessage('Produkt erfolgreich gespeichert!');
      }
    } catch (err) {
      // Handle unexpected errors
      setError(translateErrorCode('unknown_error', 'database'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-form">
      <h2>Neues Produkt hinzufügen</h2>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Produktname*</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Preis (€)*</label>
          <input
            id="price"
            type="number"
            step="0.01"
            min="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Beschreibung</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            rows={4}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wird gespeichert...' : 'Produkt speichern'}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
```

### Storage Error

```jsx
import React, { useState, useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Set language
    setLanguage('es');
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files);
    setError(null); // Clear previous errors
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Por favor, selecciona un archivo para subir.'); // Example of a non-Supabase error
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const { data, error: uploadError } = await supabase.storage
        .from('your-bucket-name') // Replace with your bucket name
        .upload(`public/${file.name}`, file);

      if (uploadError) {
        // translate error code if existing
        const translatedError = translateErrorCode(uploadError.code, 'storage');
        setError(translatedError);
      } else {
        console.log('File uploaded successfully:', data);
        // Handle success (e.g., show a success message or clear the form)
        setFile(null);
      }
    } catch (err) {
      // Assuming a general error during the async operation should use unknown_error
      setError(translateErrorCode('unknown_error', 'storage'));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <input type="file" onChange={handleFileChange} disabled={isUploading} />
      <button onClick={handleUpload} disabled={!file || isUploading}>
        {isUploading ? 'Subiendo...' : 'Subir Archivo'}
      </button>
    </div>
  );
}
```

### Realtime Error

```jsx
import React, { useState, useEffect } from 'react';
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

function RealtimeListener() {
  const [realtimeError, setRealtimeError] = useState(null);
  const [messages, setMessages] = useState([]); // To show received messages

  useEffect(() => {
    // Set language
    setLanguage('fr');

    // Subscribe to a channel
    const channel = supabase
      .channel('my-realtime-channel') // Replace with your channel name
      .on('broadcast', { event: 'my-event' }, (payload) => {
        console.log('Realtime message received:', payload);
        setMessages((prevMessages) => [...prevMessages, payload.payload]);
      })
      // Error handling for the channel
      .subscribe((status, err) => {
        if (status === 'CHANNEL_ERROR') {
          console.error('Realtime Channel Error:', err);
          if (err) {
            // Check for error code
            // Attempt to translate the Realtime error code
            const translatedError = translateErrorCode(err.code, 'realtime');
            setRealtimeError(translatedError);
          } else {
            // Fallback for unexpected Realtime error structures
            setRealtimeError(translateErrorCode('unknown_error', 'realtime'));
          }
        } else if (status === 'TIMED_OUT') {
          // Handle specific Realtime statuses if needed
          setRealtimeError('Connexion Realtime expirée. Veuillez réessayer.');
        }
      });

    // Clean up subscription on component unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Messages Realtime</h2>
      {realtimeError && <div className="error">{realtimeError}</div>}
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{JSON.stringify(msg)}</li>
        ))}
      </ul>
    </div>
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
- Storage
  - Resource errors (bucket/file not found, already exists, etc.)
  - Authorization errors (invalid tokens, access denied, etc.)
  - Validation errors (invalid input parameters, formats, etc.)
  - Service limitations (size restrictions, rate limits, etc.)
  - Infrastructure errors (database issues, internal errors, etc.)
- Database
  - Connection errors (server disconnections, failed connections, etc.)
  - Data type errors (type mismatches, invalid conversions, overflow errors)
  - Constraint violations (unique, foreign key, not-null, check constraints)
  - Access and authentication errors (permission denied, authentication failures)
  - Resource limitations (memory constraints, connection limits, disk space)
  - Query syntax issues (syntax errors, invalid object names, ambiguous references)
  - Transaction errors (serialization failures, deadlocks, aborted transactions)
  - PostgREST-specific errors (JWT validation, schema visibility, API request issues)
  - Server-side errors (assertion failures, resource unavailability, timeouts)

Each error code is translated according to the specified language.

## Roadmap

We're actively expanding support for additional Supabase error domains and languages. Current status:

**Error Domains:**

- **Storage**: ✅ Done
- **Realtime**: ✅ Done
- **Auth**: ✅ Done
- **Database**: ✅ Done
- **Functions**: 🔄 Coming soon

**Language Support:**

- **Core Languages**: ✅ 9 languages now supported
- **Additional Languages**: 🔄 Open to community contributions for more languages

## Changelog

**Latest Version: 2.2.0 - 27.05.2025**

- Added support for 5 new languages:
  - Japanese (jp) - 日本語
  - Korean (kr) - 한국어
  - Polish (pl) - Polski
  - Portuguese (pt) - Português
  - Chinese (cn) - 中文
- Now supporting 9 total languages for comprehensive global coverage

**Version: 2.1.0 - 09.05.2024**

- Added support for database errors (PostgreSQL and PostgREST)

For detailed release notes and migration guides, see the [full CHANGELOG](CHANGELOG.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
