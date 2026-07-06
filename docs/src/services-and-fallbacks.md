# Services And Fallbacks

Supabase can reuse the same error code string in different services. Because of that,
`translateErrorCode()` requires a service argument.

```ts
import { translateErrorCode } from 'supabase-error-translator-js';

translateErrorCode('TenantNotFound', 'storage', 'en');
translateErrorCode('TenantNotFound', 'realtime', 'en');
```

## Services

| Service     | Typical source                                                              |
| ----------- | --------------------------------------------------------------------------- |
| `auth`      | `supabase.auth.*` calls                                                     |
| `storage`   | `supabase.storage.*` calls                                                  |
| `realtime`  | Realtime channel and connection status errors                               |
| `database`  | PostgreSQL SQLSTATE and PostgREST `PGRST` error codes                       |
| `functions` | Reserved for Supabase Edge Functions. Translation maps are currently empty. |

## Fallback Chain

Empty, whitespace-only, or missing codes are normalized to `unknown_error`.

For other codes, the lookup order is:

1. Target language, selected service, selected code
2. English, selected service, selected code
3. Target language `unknown_error`
4. English `unknown_error`

Unsupported service names are handled defensively at runtime and return the localized
unknown-error fallback.

## Strict Lookup

`lookupErrorCode()` is intentionally different from `translateErrorCode()`: it performs
only an exact lookup and returns `message: undefined` when no exact translation exists.

```ts
import { lookupErrorCode } from 'supabase-error-translator-js';

const result = lookupErrorCode('not_a_real_code', 'auth', 'de');

console.log(result.message);
// undefined
```

Empty, whitespace-only, or missing codes also return `message: undefined`.
`unknown_error` is returned only when that code is passed explicitly.

## Unknown Codes

```ts
import { translateErrorCode } from 'supabase-error-translator-js';

const message = translateErrorCode('not_a_real_code', 'auth', 'de');
```

This returns the German unknown-error message if it exists, otherwise the English
unknown-error message.
