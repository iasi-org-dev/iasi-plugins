const assert = require('node:assert/strict');
const { test } = require('node:test');
const { parseIasi } = require('../dist/parser');
const { render } = require('../dist/renderer');

test('TOML front matter is separated from the rendered Markdown', () => {
  const parsed = parseIasi('+++\ntitle="Hello"\n+++\n# Body\n');
  assert.equal(parsed.metadata.title, 'Hello');
  assert.equal(parsed.body, '# Body\n');
  assert.match(render(parsed), /<h1>Body<\/h1>/);
});

test('YAML metadata and CRLF Markdown are preserved', () => {
  const source = '---\r\ntitle: Hello\r\nitems:\r\n  - one\r\n---\r\ntext';
  const parsed = parseIasi(source);
  assert.deepEqual(parsed.metadata.items, ['one']);
  assert.equal(parsed.body, 'text');
  assert.equal(parsed.frontMatter + parsed.body, source);
});

test('unclosed front matter reports an error', () => {
  assert.throws(() => parseIasi('+++\ntitle="x"\n# body'), /Unclosed/);
});
