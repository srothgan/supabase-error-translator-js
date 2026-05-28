# Supabase Error Translator JS

A small TypeScript package that translates Supabase error codes into user-facing messages
across 10 languages.

> **Disclaimer:** This project is maintained independently. It is not officially
> associated with, endorsed by, or affiliated with Supabase.

[![npm version](https://img.shields.io/npm/v/supabase-error-translator-js)](https://www.npmjs.com/package/supabase-error-translator-js)
[![npm downloads](https://img.shields.io/npm/dm/supabase-error-translator-js.svg)](https://www.npmjs.com/package/supabase-error-translator-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://srothgan.github.io/supabase-error-translator-js/)
[![CI](https://github.com/srothgan/supabase-error-translator-js/actions/workflows/ci.yaml/badge.svg)](https://github.com/srothgan/supabase-error-translator-js/actions/workflows/ci.yaml)
[![CodeQL](https://github.com/srothgan/supabase-error-translator-js/actions/workflows/codeql.yml/badge.svg)](https://github.com/srothgan/supabase-error-translator-js/actions/workflows/codeql.yml)

## About

`supabase-error-translator-js` maps Supabase Auth, Storage, Realtime, and database error
codes to localized text. It does not call Supabase and has no runtime dependency on
`@supabase/supabase-js`.

Supported languages:

| Language   | Code | Native Name |
| ---------- | ---- | ----------- |
| English    | `en` | English     |
| Arabic     | `ar` | العربية     |
| German     | `de` | Deutsch     |
| Spanish    | `es` | Espanol     |
| French     | `fr` | Francais    |
| Japanese   | `ja` | Japanese    |
| Korean     | `ko` | Korean      |
| Polish     | `pl` | Polski      |
| Portuguese | `pt` | Portugues   |
| Chinese    | `zh` | Chinese     |

Supported service keys:

```text
auth, storage, realtime, database, functions
```

`functions` is accepted by the API, but its translation maps are currently empty and will
return the unknown-error fallback.

## Supported Error Codes

The library supports numerous Supabase error codes, including but not limited to:

- Auth
  - Authentication errors: invalid credentials, email not confirmed, and related sign-in
    failures
  - User management errors: user not found, already exists, and identity conflicts
  - Rate limiting errors: too many requests, email send rate limits, and SMS send limits
  - MFA-related errors: expired challenges, failed verification, and disabled factors
  - OAuth and SSO errors: disabled providers, bad callbacks, and SAML/SSO configuration
    issues
- Realtime
  - Configuration errors: disabled realtime, tenant not found, and table setup issues
  - Connection errors: WebSocket connection and authorization failures
  - Rate limiting errors: channel, connection, and join rate limits
  - Database errors: CDC stream, replication slot, and subscription failures
  - System errors: node disconnection, migration failures, and counter tracking errors
- Storage
  - Resource errors: bucket, file, upload, and key not found or already exists
  - Authorization errors: invalid tokens, invalid signatures, and access denied
  - Validation errors: invalid parameters, bucket names, keys, ranges, and MIME types
  - Service limitations: size limits, credential limits, locks, and request slowdown
  - Infrastructure errors: database timeouts, database errors, and internal errors
- Database
  - Connection errors: server disconnections, inactive connections, and failed connections
  - Data type errors: type mismatches, invalid conversions, overflow, and invalid dates
  - Constraint violations: unique, foreign key, not-null, and check constraints
  - Access and authentication errors: permission denied and authentication failures
  - Resource limitations: memory, disk, connection, and program limits
  - Query syntax issues: syntax errors, invalid names, missing objects, and ambiguous
    references
  - Transaction errors: serialization failures, deadlocks, and aborted transactions
  - PostgREST-specific errors: JWT validation, schema visibility, and API request issues
  - Server-side errors: assertions, unavailable resources, cancellations, and timeouts

Each error code is translated according to the specified language.

## Install

```bash
npm install supabase-error-translator-js
```

```bash
pnpm add supabase-error-translator-js
```

```bash
yarn add supabase-error-translator-js
```

## Quick Start

```ts
import { translateErrorCode } from 'supabase-error-translator-js';

const message = translateErrorCode('invalid_credentials', 'auth', 'de');
```

Set a default language:

```ts
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';

setLanguage('es');

const message = translateErrorCode('email_not_confirmed', 'auth');
```

For request-scoped server code, prefer passing the language directly to
`translateErrorCode()` instead of using the module-level default.

## Documentation

The manual covers installation, language handling, fallback behavior, API reference,
examples, and migration guides:

- [Installation](https://srothgan.github.io/supabase-error-translator-js/installation.html)
- [Quick Start](https://srothgan.github.io/supabase-error-translator-js/quick-start.html)
- [Language Handling](https://srothgan.github.io/supabase-error-translator-js/language-handling.html)
- [Services and Fallbacks](https://srothgan.github.io/supabase-error-translator-js/services-and-fallbacks.html)
- [API Reference](https://srothgan.github.io/supabase-error-translator-js/api-reference.html)
- [Examples](https://srothgan.github.io/supabase-error-translator-js/examples.html)
- [Migration Guide](https://srothgan.github.io/supabase-error-translator-js/migration.html)

## API

```ts
import {
  getCurrentLanguage,
  getSupportedLanguages,
  isSupportedLanguage,
  isSupportedService,
  setLanguage,
  translateErrorCode,
  SUPPORTED_LANGUAGES,
  SUPPORTED_SERVICES,
  type ErrorService,
  type SupportedLanguage,
} from 'supabase-error-translator-js';
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes and migration details.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the development
workflow.

## License

This project is licensed under the [MIT License](LICENSE).
