# Contributing

See the repository
[contribution guide](https://github.com/srothgan/supabase-error-translator-js/blob/main/CONTRIBUTING.md)
for the full workflow.

## Local Setup

```bash
pnpm install
```

## Checks

```bash
pnpm run lint
pnpm run type-check
pnpm test
pnpm run build
pnpm run prettier:check
```

## Translation Changes

When adding or changing translations:

1. Keep every language map structurally aligned with English.
2. Add or update tests when the public behavior changes.
3. Keep `unknown_error` defined for every language.
4. Document new public behavior in this manual.

The test suite checks that every supported language defines the same service keys as the
English translation map.

## Documentation

Build the mdBook locally:

```bash
mdbook build docs
```

Serve it locally while editing:

```bash
mdbook serve docs
```
