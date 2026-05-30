import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const index = await readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');

test('font CSS is discovered from the document head instead of a render-blocking CSS import', () => {
  assert.doesNotMatch(css, /@import\s+url\(["']?https:\/\/fonts\.googleapis\.com/i);
  assert.match(index, /rel="preconnect"\s+href="https:\/\/fonts\.googleapis\.com"/);
  assert.match(index, /rel="preload"\s+as="style"\s+href={fontStylesheet}/);
});

test('hero image is prioritized and sized responsively for mobile LCP', () => {
  assert.match(index, /fetchpriority="high"/);
  assert.match(index, /srcset={`\$\{heroImageSmall\} 640w/);
  assert.match(index, /sizes="\((max-width: 620px)\) calc\(100vw - 1rem\),/);
});

test('third-party donation widget does not block parsing before the hero', () => {
  assert.doesNotMatch(index, /cdnjs\.buymeacoffee\.com\/1\.0\.0\/button\.prod\.min\.js/);
  assert.match(index, /class="donation-fallback"/);
});
