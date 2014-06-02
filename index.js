var glob = require("glob");
var rimraf = require("rimraf");
var loop = require("parallel-loop");

module.exports = rmrf;

function rmrf (pattern, callback) {
  glob(pattern, function (error, filenames) {
    if (error) return callback(error);

    loop(filenames.length, each, callback);

    function each (done, i) {
      rimraf(filenames[i], done);
    }
  });
}
