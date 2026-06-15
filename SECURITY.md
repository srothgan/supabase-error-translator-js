# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| latest | Yes |
| older | No (please upgrade to latest) |

## Reporting a Vulnerability

Please do not report security vulnerabilities in public issues or discussions.

Instead, use GitHub Security Advisories:

- https://github.com/srothgan/supabase-error-translator-js/security/advisories/new

Include the following:

1. A short description of the issue
2. Reproduction steps or proof of concept
3. Potential impact and affected versions
4. Any suggested mitigations or fixes

## Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial assessment**: Within 1 week
- **Fix and disclosure**: Coordinated with reporter, typically within 30 days

## Scope

This policy covers this package and its direct dependencies.
Vulnerabilities in Supabase services, build infrastructure, or third-party runtime
platforms should be reported to their respective maintainers.

## Security Measures

- Dependencies are audited in CI on each push/pull_request via `pnpm run audit:ci`.
- Dependency checks also run on a weekly scheduled workflow.
- Dependabot is enabled for npm updates.
- Release workflows require a clean publish dry-run and build validation before publication.
