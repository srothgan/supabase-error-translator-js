# Contributing to Supabase Error Translator

Thank you for your interest in contributing to the Supabase Error Translator! This document provides guidelines and instructions to make the contribution process smooth and effective.

## Code of Conduct

This project adheres to our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Security Issues

Do not report security issues in GitHub issues. Use [SECURITY.md](./SECURITY.md).

## Getting Started

### 1. Fork the Repository

- Go to the [main repository](https://github.com/srothgan/supabase-error-translator-js)
- Click the **Fork** button (top right) to create your own copy of the repository

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/supabase-error-translator-js.git
cd supabase-error-translator-js
```

### 3. Set Up Your Development Environment

```bash
# Install dependencies
pnpm install
```

### 4. Find an Issue to Work On

- Check the [issue tracker](https://github.com/srothgan/supabase-error-translator-js/issues) for open issues
- Look for labels like `good first issue`, `help wanted`, or `translations`
- If you want to work on something not listed, please open an issue first to discuss

## Development Workflow

### 1. Create a Working Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-you-are-fixing
```

### 2. Make Your Changes

- Follow the existing code style and patterns
- Add or update tests for your changes
- Update documentation as needed

**Adding New Error Translations**

If you're adding translations for a new language:

1. Create a new file in the `src/translations` directory (e.g., `it.ts` for Italian)
2. Follow the existing pattern in other language files
3. Make sure to include the `unknown_error` translation
4. Update the index file `src/translations/index.ts` and `src/languages.ts`

### 3. Run Tests and Linting

```bash
pnpm test         # Run all tests
pnpm build        # Build the project
pnpm run lint     # Lint code
pnpm run format   # Auto-format code
pnpm run type-check  # Type check
```

### 4. Commit Your Changes

Write clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
feat: add Italian error translations
fix: handle null error codes
docs: update README with new language support
test: add tests for edge cases
```

### 5. Push Your Branch to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Open a Pull Request

- Go to your fork on GitHub
- Click "Compare & pull request" to submit your branch to the main repo
- Fill out the PR template:
  - What you changed and why
  - Special testing instructions
  - Reference any related issues (e.g., `Fixes #123`)

---

## Review Process

- A maintainer will review your PR and may request changes
- Address any feedback by making additional commits to your branch
- Once approved, your PR will be merged

For PRs, use a conventional commit prefix in the title (for example `feat:`, `fix:`, `chore:`). This is enforced by the repository's pull request title check.

## Reporting Issues

When reporting bugs or requesting features:

1. Use a clear, descriptive title
2. Provide detailed steps to reproduce the issue
3. Include relevant information like OS, browser, and package version
4. Add appropriate labels if you have permission

## Questions?

If you have any questions about contributing, feel free to:

- Open an issue labeled as "question"
- Reach out to the maintainers

Thank you for contributing to make the Supabase Error Translator better! 🚀
