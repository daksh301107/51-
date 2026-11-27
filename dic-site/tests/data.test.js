// Checks that the site data and the numbers typed into index.html agree.
// Run from the repo root with:  node --test dic-site/tests/data.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(read('assets/js/data.js'), ctx);
const PROJECTS = ctx.window.DIC_PROJECTS;
const PATENTS = ctx.window.DIC_PATENTS;
const html = read('index.html');

// Same keys as THEMES in assets/js/main.js.
const THEMES = ['mdart', 'aet', 'energy', 'ceramic'];
const STATUSES = ['Granted', 'Published', 'Filed', 'Prototype'];

test('project ids are unique and every project has a known theme', () => {
  assert.strictEqual(new Set(PROJECTS.map(p => p.id)).size, PROJECTS.length);
  for (const p of PROJECTS) {
    assert.ok(THEMES.includes(p.theme), `project ${p.id} has unknown theme ${p.theme}`);
    assert.ok(p.title && p.summary, `project ${p.id} needs a title and a summary`);
    assert.ok(Array.isArray(p.mentors) && Array.isArray(p.team), `project ${p.id} needs mentors and team lists`);
  }
});

test('every patent status is one the page can style', () => {
  for (const p of PATENTS) assert.ok(STATUSES.includes(p.status), `${p.title}: unknown status ${p.status}`);
});

test('every local image that is referenced exists, and no image file is unused', () => {
  const source = html + read('assets/js/main.js') + read('assets/js/data.js') + read('assets/css/styles.css');
  const referenced = new Set([...source.matchAll(/assets\/img\/([\w.-]+)/g)].map(m => m[1]));
  const onDisk = new Set(fs.readdirSync(path.join(root, 'assets/img')));
  for (const f of referenced) assert.ok(onDisk.has(f), `missing image file: ${f}`);
  for (const f of onDisk) assert.ok(referenced.has(f), `unused image file: ${f}`);
});

test('the fallback numbers typed in index.html match the data', () => {
  const shown = name => Number(new RegExp(`data-stat="${name}"[^>]*>(\\d+)<`).exec(html)[1]);
  assert.strictEqual(shown('projects'), PROJECTS.length);
  assert.strictEqual(shown('themes'), THEMES.length);
  assert.strictEqual(shown('granted'), PATENTS.filter(p => p.status === 'Granted').length);
  assert.strictEqual(shown('patents'), PATENTS.filter(p => p.status !== 'Prototype').length);
});

test('the contact message box has a length limit so the mailto: link stays short', () => {
  assert.match(html, /<textarea[^>]*name="message"[^>]*maxlength="\d+"/);
});
