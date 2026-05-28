# Migration Guide

## From v2 To v3

Version 3 uses ISO 639-1 language codes for Japanese, Korean, and Chinese.

| Before | After |
| ------ | ----- |
| `jp`   | `ja`  |
| `kr`   | `ko`  |
| `cn`   | `zh`  |

Update calls like this:

```ts
import { setLanguage } from 'supabase-error-translator-js';

setLanguage('ja');
setLanguage('ko');
setLanguage('zh');
```

`translateErrorCode()` without a `lang` argument now uses the language set by
`setLanguage()` instead of always trying browser detection.

## From v1 To v2

Version 2 added service-specific translation maps. `translateErrorCode()` now requires a
service argument.

```ts
import { translateErrorCode } from 'supabase-error-translator-js';

// v1
translateErrorCode('invalid_credentials');

// v2 and newer
translateErrorCode('invalid_credentials', 'auth');
```

Choose the service from the Supabase API that produced the error.
