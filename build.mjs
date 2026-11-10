import { mkdir, cp, readFile, writeFile, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const fingerprint = (source) => createHash('sha256').update(source).digest('hex').slice(0, 12);
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
const translations = await readFile('public/i18n.js', 'utf8');
const stylesheet = await readFile('public/style.css', 'utf8');
const catalogue = await readFile('public/projects.json', 'utf8');
const translationName = `i18n.${fingerprint(translations)}.js`;
const styleName = `style.${fingerprint(stylesheet)}.css`;
const catalogueName = `projects.${fingerprint(catalogue)}.json`;
const script = (await readFile('public/app.js', 'utf8'))
  .replace('./i18n.js', `./${translationName}`)
  .replace('./projects.json', `./${catalogueName}`);
const scriptName = `app.${fingerprint(script)}.js`;
const html = (await readFile('public/index.html', 'utf8'))
  .replace('./style.css', `./${styleName}`)
  .replace('./app.js', `./${scriptName}`);
await Promise.all([
  writeFile(`dist/${translationName}`, translations),
  writeFile(`dist/${styleName}`, stylesheet),
  writeFile(`dist/${catalogueName}`, catalogue),
  writeFile(`dist/${scriptName}`, script),
  writeFile('dist/index.html', html)
]);
await Promise.all(['app.js', 'i18n.js', 'style.css', 'projects.json'].map(name => unlink(`dist/${name}`)));
console.log('Built portfolio with content-versioned assets in dist/');
