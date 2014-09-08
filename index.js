var glob = require("glob");
var rimraf = require("rimraf");
var loop = require("parallel-loop");

module.exports = rmrf;

function rmrf (pattern, _options, callback) {
  var options;
  if (callback === undefined) {
    callback = _options;
    options = {};
  } else {
    options = _options;
  }

  glob(pattern, options, function (error, filenames) {
    if (error) return callback(error);

    loop(filenames.length, each, callback);

    function each (done, i) {
      rimraf(filenames[i], done);
    }
  });
}
