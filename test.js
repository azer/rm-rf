var test = require("prova");
var fs = require("fs");
var rmrf = require("./");

test('rimraf glob', function (assert) {
  assert.plan(6);

  fs.writeFileSync('a.tmp', 'a');
  fs.writeFileSync('b.tmp', 'b');
  fs.writeFileSync('c.tmp', 'c');

  rmrf('*.tmp', function (error) {
    assert.error(error);
    assert.notOk(fs.existsSync('a.tmp'));
    assert.notOk(fs.existsSync('b.tmp'));
    assert.notOk(fs.existsSync('c.tmp'));
  });

  rmrf('*.json', {cwd: 'd'}, function (error) {
    assert.error(error);
    assert.ok(fs.existsSync('package.json'));
  });
});
