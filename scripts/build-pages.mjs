import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
let html = await readFile(new URL('index.html', root), 'utf8');

await mkdir(output, { recursive: true });
await cp(new URL('assets/', root), new URL('assets/', output), { recursive: true });
const versions = new Map();
async function collectAssets(directory = 'assets/') {
  for (const entry of await readdir(new URL(directory, root), { withFileTypes: true })) {
    const name = directory + entry.name;
    if (entry.isDirectory()) await collectAssets(name + '/');
    else versions.set(name, createHash('sha256').update(await readFile(new URL(name, root))).digest('hex').slice(0, 12));
  }
}
await collectAssets();
const versionAssets = text => text.replace(/assets\/[^\s"'<>\)]+/g, name => versions.has(name) ? `${name}?v=${versions.get(name)}` : name);
html = versionAssets(html);
for (const [file, attribute] of [['styles.css', 'href'], ['game.js', 'src']]) {
  let content = await readFile(new URL(file, root));
  if (file === 'styles.css') content = Buffer.from(versionAssets(content.toString('utf8')));
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const reference = `${attribute}="${file}"`;
  if (!html.includes(reference)) throw new Error(`Missing entry reference: ${file}`);
  html = html.replace(reference, `${attribute}="./${file}?v=${hash}"`);
  await writeFile(new URL(file, output), content);
}
await Promise.all([
  writeFile(new URL('index.html', output), html),
  writeFile(new URL('.nojekyll', output), ''),
]);
console.log('GitHub Pages bundle ready in dist/');
