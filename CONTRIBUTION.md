# Contributing to Supabase Error Translator

Thank you for your interest in contributing to the Supabase Error Translator! This document provides guidelines and instructions to make the contribution process smooth and effective.

## Code of Conduct

This project adheres to our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### 1. Set Up Your Development Environment

```bash
# Clone the repository
git clone https://github.com/srothgan/supabase-error-translator-js.git
cd supabase-error-translator-js

# Install dependencies
pnpm install
```

### 2. Find an Issue to Work On

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

#### Adding New Error Translations

If you're adding translations for a new language:

1. Create a new file in the `src/translations` directory (e.g., `it.ts` for Italian)
2. Follow the existing pattern in other language files
3. Make sure to include the `unknown_error` translation
4. Update the index file `src/translations/index.ts` and `src/languages.ts`

### 3. Run Tests and Linting

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run linting (with auto-fix)
pnpm run lint -- --fix

# Auto-format your code
pnpm run format

# Type check
pnpm run type-check
```

### 4. Commit Your Changes

Write clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
feat: add Italian error translations
fix: handle null error codes
docs: update README with new language support
test: add tests for edge cases
```

### 5. Submit a Pull Request

1. Push your branch to GitHub:

   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to the repository on GitHub and create a new Pull Request
3. Fill out the PR template with:
   - A clear description of what you changed
   - Why the change is needed
   - Any special testing instructions
   - Reference to related issues (e.g., "Fixes #123")

## Review Process

- A maintainer will review your PR and may request changes
- Address any feedback by making additional commits to your branch
- Once approved, your PR will be merged

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
