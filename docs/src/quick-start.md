# Quick Start

Translate a Supabase Auth error code:

```ts
import { translateErrorCode } from 'supabase-error-translator-js';

const message = translateErrorCode('invalid_credentials', 'auth', 'de');

console.log(message);
```

Check for exact translations without fallback messages:

```ts
import { lookupErrorCode } from 'supabase-error-translator-js';

const result = lookupErrorCode('invalid_credentials', 'auth', 'de');

console.log(result.message);
```

Import a single immutable language map:

```ts
import de from 'supabase-error-translator-js/translations/de';

console.log(de.services.auth.invalid_credentials);
```

Set a process-wide or browser-session default language:

```ts
import { setLanguage, translateErrorCode } from 'supabase-error-translator-js';

setLanguage('es');

const message = translateErrorCode('email_not_confirmed', 'auth');
```

Use browser language detection:

```ts
import { setLanguage } from 'supabase-error-translator-js';

setLanguage('auto');
```

For server-side rendering or request handlers, prefer passing the language to
`translateErrorCode()` for each call:

```ts
import { translateErrorCode, type SupportedLanguage } from 'supabase-error-translator-js';

export function translateSupabaseError(code: string | undefined, userLanguage: SupportedLanguage) {
  return translateErrorCode(code, 'auth', userLanguage);
}
```
