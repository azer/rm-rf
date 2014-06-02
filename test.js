var test = require("prova");
var fs = require("fs");
var rmrf = require("./");

test('rimraf glob', function (assert) {
  assert.plan(4);

  fs.writeFileSync('a.tmp', 'a');
  fs.writeFileSync('b.tmp', 'b');
  fs.writeFileSync('c.tmp', 'c');

  rmrf('*.tmp', function (error) {
    assert.error(error);
    assert.notOk(fs.existsSync('a.js'));
    assert.notOk(fs.existsSync('b.js'));
    assert.notOk(fs.existsSync('c.js'));
  });
});
