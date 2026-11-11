import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
let html = await readFile(new URL('index.html', root), 'utf8');

await mkdir(output, { recursive: true });
for (const [file, attribute] of [['styles.css', 'href'], ['game.js', 'src']]) {
  const content = await readFile(new URL(file, root));
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const reference = `${attribute}="${file}"`;
  if (!html.includes(reference)) throw new Error(`Missing entry reference: ${file}`);
  html = html.replace(reference, `${attribute}="./${file}?v=${hash}"`);
  await copyFile(new URL(file, root), new URL(file, output));
}
await Promise.all([
  writeFile(new URL('index.html', output), html),
  writeFile(new URL('.nojekyll', output), ''),
]);
console.log('GitHub Pages bundle ready in dist/');
