# Examples

## Supabase Auth

```tsx
import { useState, type FormEvent } from 'react';
import { translateErrorCode, type SupportedLanguage } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

type Props = {
  language: SupportedLanguage;
};

export function SignInForm({ language }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function signIn(event: FormEvent) {
    event.preventDefault();
    setErrorMessage(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMessage(translateErrorCode(error.code, 'auth', language));
    }
  }

  return (
    <form onSubmit={signIn}>
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
  );
}
```

## Database And PostgREST

Database errors often expose SQLSTATE codes such as `23505` or PostgREST codes such as
`PGRST204`.

```ts
import { translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

const { error } = await supabase.from('profiles').insert({
  username: 'existing-user',
});

if (error) {
  const message = translateErrorCode(error.code, 'database', 'en');
  console.log(message);
}
```

## Storage

```ts
import { translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

async function uploadAvatar(file: File) {
  const { error } = await supabase.storage.from('avatars').upload('public/avatar.png', file);

  if (error) {
    const message = translateErrorCode(error.code, 'storage', 'es');
    console.log(message);
  }
}
```

## Realtime

Realtime status callbacks do not always include a structured error. Use
`unknown_error` when no code is present.

```ts
import { translateErrorCode } from 'supabase-error-translator-js';
import { supabase } from './supabaseClient';

const channel = supabase.channel('room').subscribe((status, error) => {
  if (status === 'CHANNEL_ERROR') {
    const message = translateErrorCode(error?.code, 'realtime', 'fr');
    console.log(message);
  }
});
```

## Runtime Guards

```ts
import {
  isSupportedLanguage,
  isSupportedService,
  translateErrorCode,
} from 'supabase-error-translator-js';

const language = isSupportedLanguage(userLanguage) ? userLanguage : 'en';
const service = isSupportedService(serviceFromLog) ? serviceFromLog : 'auth';

const message = translateErrorCode(codeFromLog, service, language);
```

## Strict Lookup

Use `lookupErrorCode()` when application logic needs to distinguish exact translations
from fallback messages.

```ts
import { lookupErrorCode } from 'supabase-error-translator-js';

const result = lookupErrorCode('invalid_credentials', 'auth', 'de');

if (result.message) {
  console.log(result.message);
} else {
  console.log('No exact translation is available for this code.');
}
```

## Per-Language Translation Data

Subpath imports expose immutable static maps for each supported language.

```ts
import { translations } from 'supabase-error-translator-js/translations';
import de from 'supabase-error-translator-js/translations/de';

console.log(de.services.auth.invalid_credentials);
console.log(translations.en.services.storage.NoSuchBucket);
```
