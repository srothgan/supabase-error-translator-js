# About

`supabase-error-translator-js` maps Supabase error codes to user-facing messages in
multiple languages. It is useful when your app receives technical error codes from
Supabase Auth, Storage, Realtime, or PostgREST and needs a localized message for the UI.

The package does not call Supabase and does not depend on `@supabase/supabase-js`. It is a
small translation registry plus a few helper functions.

> This project is maintained independently. It is not officially associated with,
> endorsed by, or affiliated with Supabase.

## Supported Languages

| Language   | Code |
| ---------- | ---- |
| English    | `en` |
| Arabic     | `ar` |
| German     | `de` |
| Spanish    | `es` |
| French     | `fr` |
| Japanese   | `ja` |
| Korean     | `ko` |
| Polish     | `pl` |
| Portuguese | `pt` |
| Chinese    | `zh` |

## Supported Services

| Service     | Status                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `auth`      | Translated error codes are available.                                                                        |
| `storage`   | Translated error codes are available.                                                                        |
| `realtime`  | Translated error codes are available.                                                                        |
| `database`  | PostgreSQL and PostgREST error codes are available.                                                          |
| `functions` | The service is accepted by the API, but translations are currently empty. Unknown fallback text is returned. |

## What The Package Returns

The package returns strings, not rich error objects. It intentionally keeps the public API
simple so callers can use the result in React, Next.js, Node.js, or any browser-bundled
application.
