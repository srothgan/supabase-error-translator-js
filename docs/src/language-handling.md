# Language Handling

## Supported Codes

The package uses ISO 639-1 language codes:

```ts
import { getSupportedLanguages } from 'supabase-error-translator-js';

console.log(getSupportedLanguages());
// ['en', 'ar', 'de', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'zh']
```

## Default Language

The default language is English:

```ts
import { getCurrentLanguage } from 'supabase-error-translator-js';

console.log(getCurrentLanguage());
// 'en'
```

Call `setLanguage()` to change the default:

```ts
import { setLanguage } from 'supabase-error-translator-js';

setLanguage('fr');
```

Unsupported values fall back to English.

## Browser Detection

Pass `auto` to use the primary browser language from `navigator.language`:

```ts
import { setLanguage } from 'supabase-error-translator-js';

setLanguage('auto');
```

For example, `de-DE` resolves to `de`. Unsupported browser languages fall back to `en`.
When `navigator` is unavailable, detection also falls back to `en`.

## Per-Call Language Override

The third argument to `translateErrorCode()` overrides the current default without
mutating it:

```ts
import { getCurrentLanguage, translateErrorCode } from 'supabase-error-translator-js';

const message = translateErrorCode('phone_exists', 'auth', 'pt');

console.log(getCurrentLanguage());
// Still whatever was previously set.
```

This is the safer pattern for multi-user server code because `setLanguage()` stores
module-level state.
