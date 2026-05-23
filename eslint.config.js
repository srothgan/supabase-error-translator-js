// eslint.config.js (flat config)
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const vitest = require('@vitest/eslint-plugin');
const globals = require('globals');

module.exports = tseslint.config(
  {
    // Replaces the old .eslintignore
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      '**/*.config.js',
      '**/*.config.ts',
      'eslint.config.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  {
    // Vitest tests
    ...vitest.configs.recommended,
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      ...vitest.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // Keep prettier last so it disables conflicting stylistic rules.
  prettierRecommended,
);
