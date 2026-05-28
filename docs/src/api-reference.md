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
  type ErrorService,
  type SupportedLanguage,
  type TranslationStructure,
} from 'supabase-error-translator-js';
```
