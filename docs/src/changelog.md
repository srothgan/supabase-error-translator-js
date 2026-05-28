# Changelog

The canonical changelog lives in the repository root:

[CHANGELOG.md](https://github.com/srothgan/supabase-error-translator-js/blob/main/CHANGELOG.md)

## Recent Highlights

### 3.0.1

- Cleaned stale build output before compiling.
- No API changes.

### 3.0.0

- Migrated Japanese, Korean, and Chinese language codes to ISO 639-1:
  `ja`, `ko`, and `zh`.
- Fixed default-language behavior for `translateErrorCode()`.

### 2.0.0

- Introduced service-specific translation maps.
- Changed `translateErrorCode(code, lang?)` to `translateErrorCode(code, service, lang?)`.
