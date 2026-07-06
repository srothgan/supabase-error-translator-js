import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const requirePackage = createRequire(import.meta.url);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const languages = ['ar', 'de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'zh'];

const relativeMain = requirePackage(path.join(root, 'dist', 'index.js'));
assert.equal(typeof relativeMain.translateErrorCode, 'function');
assert.equal(typeof relativeMain.lookupErrorCode, 'function');
assert.ok(Array.isArray(relativeMain.SUPPORTED_LANGUAGES));

const packageMain = requirePackage('supabase-error-translator-js');
assert.equal(typeof packageMain.translateErrorCode, 'function');
assert.equal(typeof packageMain.lookupErrorCode, 'function');
assert.ok(packageMain.SUPPORTED_LANGUAGES.includes('en'));

const aggregate = requirePackage('supabase-error-translator-js/translations');
assert.ok(Object.isFrozen(aggregate.translations));

for (const language of languages) {
  const relativeModule = requirePackage(path.join(root, 'dist', 'translations', `${language}.js`));
  const packageModule = requirePackage(`supabase-error-translator-js/translations/${language}`);
  const relativeMap = relativeModule.default ?? relativeModule;
  const packageMap = packageModule.default ?? packageModule;

  assert.equal(typeof relativeMap.unknown_error, 'string');
  assert.equal(typeof packageMap.unknown_error, 'string');
  assert.ok(Object.isFrozen(packageMap));
  assert.ok(Object.isFrozen(packageMap.services));
}

const tempDir = path.join(root, '.package-smoke');
const typeSmokePath = path.join(tempDir, 'package-types-smoke.ts');

if (existsSync(tempDir)) {
  rmSync(tempDir, { recursive: true, force: true });
}

mkdirSync(tempDir);

writeFileSync(
  typeSmokePath,
  `import {
  SUPPORTED_LANGUAGES,
  lookupErrorCode,
  type ErrorCodeLookupResult,
} from 'supabase-error-translator-js';
import { translations } from 'supabase-error-translator-js/translations';
import de from 'supabase-error-translator-js/translations/de';
import en from 'supabase-error-translator-js/translations/en';

const result: ErrorCodeLookupResult = lookupErrorCode('invalid_credentials', 'auth', 'de');
const germanMessage: string = de.services.auth.invalid_credentials;
const englishMessage: string = en.services.auth.invalid_credentials;
const aggregateMessage: string = translations.en.services.auth.invalid_credentials;
const supportedLanguages: readonly string[] = SUPPORTED_LANGUAGES;

// @ts-expect-error Public translation maps are readonly.
de.services.auth.invalid_credentials = 'changed';

void [result, germanMessage, englishMessage, aggregateMessage, supportedLanguages];
`,
);

try {
  execFileSync(
    process.execPath,
    [
      path.join(root, 'node_modules', 'typescript', 'bin', 'tsc'),
      '--ignoreConfig',
      '--noEmit',
      '--module',
      'node16',
      '--moduleResolution',
      'node16',
      '--target',
      'ES2020',
      '--strict',
      '--esModuleInterop',
      '--skipLibCheck',
      typeSmokePath,
    ],
    { cwd: root, stdio: 'inherit' },
  );
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
