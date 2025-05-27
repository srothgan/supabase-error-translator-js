# Changelog

## 2.2.0 - 27.05.2025

### Added

- **Expanded language support**: Added support for 5 new languages, bringing total language support to 9 languages:
  - Japanese (jp) - 日本語
  - Korean (kr) - 한국어
  - Polish (pl) - Polski
  - Portuguese (pt) - Português
  - Chinese (cn) - 中文
- **Comprehensive global coverage**: Now supporting comprehensive internationalization with ISO language codes
- **Enhanced localization**: All existing error codes now translated across all 9 supported languages

### Improved

- Updated documentation with complete language support table
- Enhanced examples showing auto-detection of browser language
- Improved API reference with better parameter descriptions

## 2.1.0 - 09.05.2025

### Added

- **Database error support**: Added comprehensive translations for Supabase PostgreSQL and PostgREST database errors
  - PostgreSQL standard error codes (e.g., 23505 for unique constraint violations)
  - PostgREST-specific error codes (PGRST series)
  - Detailed explanations for common database constraints and query failures
  - Human-readable translations that explain technical errors in user-friendly language

## 2.0.1 - 04.05.2025

### FIX

Fixed npm build issue.

## 2.0.0 - 04.05.2025

### Breaking Changes

- **Restructured error codes by service**: Error translations are now organized by Supabase service (auth, storage, realtime, database, functions)
- **Updated API signature**: `translateErrorCode` now requires a service parameter:

  ```typescript
  // Before (v1.1.1)
  translateErrorCode(code, lang?)

  // After (v2.0.0)
  translateErrorCode(code, service, lang?)
  ```

### Added

- Support for Storage error codes: Added translations for all Supabase Storage error messages
- Support for overlapping error codes: Properly handles cases where the same error code exists in multiple services with different meanings (e.g., TenantNotFound in Storage vs Realtime)
- Enhanced type safety: Better TypeScript types for services and error structures

### Migration Guide

To migrate from v1.1.1 to v2.0.0, specify which Supabase service the error code belongs to:

```typescript
// Before (v1.x)
const message = translateErrorCode('invalid_credentials');

// After (v2.0.0)
const message = translateErrorCode('invalid_credentials', 'auth');
```

Base the error type selection on the current Supabase JS operation for accurate and smooth error translation and reporting,

## 1.1.1 - 03.05.2025

### Changed

- Small Readme file changes

## 1.1.0

### Added

- Expanded documentation with usage examples
- Code of Conduct and Contribution Guide added
- Improved fallback logic with `unkown_error`

### Changed

- Code undefined/null input handling added

## 1.0.1 - 01.05.2025

### Creation

- Initial release with support for English, German, French and Spanish translations
- Basic error code translation for Supabase authentication errors
