# API Reference

## `setLanguage(lang)`

```ts
function setLanguage(lang: SupportedLanguage | 'auto'): void;
```

Sets the module-level default language.

| Argument | Description                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| `lang`   | A supported language code or `auto`. Unsupported values fall back to `en` at runtime. |

Use per-call language overrides instead of `setLanguage()` in request-scoped server code.

## `translateErrorCode(code, service, lang?)`

```ts
function translateErrorCode(
  code: string | undefined,
  service: ErrorService,
  lang?: SupportedLanguage | 'auto',
): string;
```

Returns a translated string for a Supabase error code.

| Argument  | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `code`    | The Supabase error code. Empty, whitespace-only, or undefined values are treated as `unknown_error`. |
| `service` | One of `auth`, `storage`, `realtime`, `database`, or `functions`.                                    |
| `lang`    | Optional per-call language override. `auto` uses browser detection.                                  |

## `lookupErrorCode(code, service, lang?)`

```ts
function lookupErrorCode(
  code: string | undefined,
  service: ErrorService,
  lang?: SupportedLanguage | 'auto',
): ErrorCodeLookupResult;
```

Performs an exact lookup without fallback messages.

| Argument  | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| `code`    | The Supabase error code. Empty, whitespace-only, or undefined values return `undefined`. |
| `service` | One of `auth`, `storage`, `realtime`, `database`, or `functions`.                        |
| `lang`    | Optional per-call language override. Unsupported values resolve to `en`.                 |

The result contains the normalized code, resolved language, service, and either the exact
message or `undefined`:

```ts
type ErrorCodeLookupResult = {
  code: string;
  service: ErrorService;
  language: SupportedLanguage;
  message: string | undefined;
};
```

`lookupErrorCode()` does not fall back to English and does not fall back to
`unknown_error`. Passing `unknown_error` explicitly returns the localized unknown-error
message.

## `getCurrentLanguage()`

```ts
function getCurrentLanguage(): SupportedLanguage;
```

Returns the current module-level default language.

## `getSupportedLanguages()`

```ts
function getSupportedLanguages(): SupportedLanguage[];
```

Returns a copy of the supported language-code list.

## `isSupportedLanguage(lang)`

```ts
function isSupportedLanguage(lang: string): lang is SupportedLanguage;
```

Runtime guard for supported language codes.

## `isSupportedService(service)`

```ts
function isSupportedService(service: string): service is ErrorService;
```

Runtime guard for supported service names.

## Constants And Types

```ts
import {
  SUPPORTED_LANGUAGES,
  SUPPORTED_SERVICES,
  type ErrorCodeLookupResult,
  type ErrorService,
  type SupportedLanguage,
  type TranslationStructure,
} from 'supabase-error-translator-js';
```

## Translation Subpaths

```ts
import { translations } from 'supabase-error-translator-js/translations';
import de from 'supabase-error-translator-js/translations/de';
import en from 'supabase-error-translator-js/translations/en';
```

Supported language subpaths:

```text
supabase-error-translator-js/translations/ar
supabase-error-translator-js/translations/de
supabase-error-translator-js/translations/en
supabase-error-translator-js/translations/es
supabase-error-translator-js/translations/fr
supabase-error-translator-js/translations/ja
supabase-error-translator-js/translations/ko
supabase-error-translator-js/translations/pl
supabase-error-translator-js/translations/pt
supabase-error-translator-js/translations/zh
```

Translation maps are immutable at runtime. The `functions` service is reserved and
currently has empty maps.
