# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Features

- Add per-language translation subpath imports under `supabase-error-translator-js/translations/{lang}`.
- Add `lookupErrorCode()` for strict exact-message lookups without fallback messages.
- Add an explicit package `exports` map for the supported public import surface.

### Improvements

- Freeze exported translation maps at runtime, including direct per-language subpath imports.
- Keep `functions` reserved with intentionally empty service maps.

### Compatibility

- The top-level `translateErrorCode()` API and fallback behavior are unchanged.
- Undocumented deep imports are not part of the supported API and may be blocked by the
  package exports map.

## [3.1.0] - 2026-05-28 [Changes][v3.1.0]

### Features

- **Arabic translations** (#22, @ahmedalmnsour): Add `ar` across Auth, Realtime, Storage, and Database.
- **Language and service guards** (#21, @srothgan): Export supported-language and supported-service helpers.

### Improvements

- **Translation registry** (#21, @srothgan): Derive supported languages from one registry.
- **Fallback handling** (#21, @srothgan): Validate service names at runtime and expand fallback coverage.

### Documentation

- **mdBook manual** (#23, @srothgan): Add the `docs/` manual and GitHub Pages workflow.
- **Focused README** (#23, @srothgan): Move extended usage, API, examples, and migration material into docs.
- **Contributor workflow** (@srothgan): Clarify the external-contributor workflow.

### CI and Dependencies

- **Audit cleanup** (#11, @srothgan): Resolve 24 advisories and add Node/pnpm project foundations.
- **Tooling refresh** (#12, @srothgan): Upgrade to ESLint 10, TypeScript 6, rimraf 6, and Vitest.
- **CI matrices** (#13, @srothgan): Refresh Actions and test/build on Node 20, 22, and 24.
- **Release automation** (#14, #20, @srothgan): Add trusted npm publishing, GitHub Releases, Knip, and audit gates.
- **Repository polish** (#19, @srothgan): Add issue/PR templates, CodeQL, and README workflow badges.

### Compatibility

- **Additive release** (#21, #22, #23): Keep existing language codes, service keys, and fallback behavior compatible.

## [3.0.1] - 2025-08-30 [Changes][v3.0.1]

### Fixes

- **Build cleanup**: Clean `dist` before compiling so stale `cn`, `jp`, and `kr` bundles are removed after the ISO-code migration.
- **API stability**: No API changes.

## [3.0.0] - 2025-08-29 [Changes][v3.0.0]

### Breaking Changes

- **ISO language codes**: Replace legacy language codes with ISO 639-1 codes:
  - `jp` -> `ja` for Japanese.
  - `kr` -> `ko` for Korean.
  - `cn` -> `zh` for Chinese.

### Fixes

- **Default language handling**: Make `translateErrorCode()` without a `lang` argument use `currentLanguage`.

### Documentation

- **Migration guidance**: Update examples and API references for the new language codes.

### Migration Guide

Update language-code usage:

```ts
// Before v3.0.0
setLanguage('jp');
setLanguage('kr');
setLanguage('cn');

// v3.0.0 and newer
setLanguage('ja');
setLanguage('ko');
setLanguage('zh');
```

## [2.2.1] - 2025-06-01 [Changes][v2.2.1]

### Documentation

- **Contributor guide** (#8): Rename and refresh the contribution guide.

### Fixes

- **Translation polish** (#8): Clean up wording across language helpers and translation maps.

## [2.2.0] - 2025-05-27 [Changes][v2.2.0]

### Features

- **Expanded language support**: Add Japanese, Korean, Polish, Portuguese, and Chinese translations.
- **Global coverage**: Bring supported languages to 9.

### Documentation

- **Language examples**: Update the README language table, auto-detection examples, and API notes.

## [2.1.0] - 2025-05-09 [Changes][v2.1.0]

### Features

- **Database errors**: Add PostgreSQL SQLSTATE and PostgREST error-code translations.
- **Constraint guidance**: Add user-friendly messages for common database constraints and query failures.

## [2.0.1] - 2025-05-04 [Changes][v2.0.1]

### Fixes

- **npm package build**: Fix the npm build issue in the 2.0 release line.

## [2.0.0] - 2025-05-04 [Changes][v2.0.0]

### Breaking Changes

- **Service-scoped translations**: Organize translations by Supabase service.
- **API signature**: Require a service argument in `translateErrorCode()`.

```ts
// Before v2.0.0
translateErrorCode(code, lang);

// v2.0.0 and newer
translateErrorCode(code, service, lang);
```

### Features

- **Storage errors**: Add Supabase Storage error-code translations.
- **Overlapping error codes**: Resolve same-code cases by service context, such as `TenantNotFound` in Storage versus Realtime.
- **Type safety**: Add stronger service and translation-structure types.

## [1.1.1] - 2025-05-03 [Changes][v1.1.1]

### Documentation

- **README cleanup**: Apply small README fixes.

## [1.1.0] - 2025-05-03 [Changes][v1.1.0]

### Features

- **Usage examples**: Expand README examples.
- **Project docs**: Add Code of Conduct and contribution guidance.

### Fixes

- **Unknown-code handling**: Improve `unknown_error` fallback behavior.
- **Empty input handling**: Handle undefined and empty error codes.

## [1.0.1] - 2025-05-01 [Changes][v1.0.1]

### Initial Release

- **Auth translations**: Add initial English, German, French, and Spanish authentication translations.

[v3.1.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v3.0.1...v3.1.0
[v3.0.1]: https://github.com/srothgan/supabase-error-translator-js/compare/v3.0.0...v3.0.1
[v3.0.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v2.2.1...v3.0.0
[v2.2.1]: https://github.com/srothgan/supabase-error-translator-js/compare/v2.2.0...v2.2.1
[v2.2.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v2.1.0...v2.2.0
[v2.1.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v2.0.1...v2.1.0
[v2.0.1]: https://github.com/srothgan/supabase-error-translator-js/compare/v2.0.0...v2.0.1
[v2.0.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v1.1.1...v2.0.0
[v1.1.1]: https://github.com/srothgan/supabase-error-translator-js/compare/v1.1.0...v1.1.1
[v1.1.0]: https://github.com/srothgan/supabase-error-translator-js/compare/v1.0.1...v1.1.0
[v1.0.1]: https://github.com/srothgan/supabase-error-translator-js/releases/tag/v1.0.1
