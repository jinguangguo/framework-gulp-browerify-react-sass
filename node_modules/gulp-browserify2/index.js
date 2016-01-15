var through = require('through2');
var path = require('path');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var merge = require('deepmerge');

var defaults = {
  fileName: 'bundle.js',
  transform: [],
  options: {}
};

function gulpBrowserify(options) {

  options = options || {};

  var config = merge(defaults, options);

  var cache = [];

  return through.obj(function (file, enc, cb) {

    if (!file.path) {
      return cb(new gutil.PluginError('gulp-browserify', 'File not supported'));
    }

    // cache every js file path as entry point for later
    cache.push(file.path);

    cb();

  }, function (cb) {

    var trs = this;

    var browserifyOpts = merge(config.options, { entries: cache });

    var bundler = browserify(browserifyOpts);

    // handle transform plugins
    if(!Array.isArray(config.transform)) config.transform = [config.transform];
    if (config.transform.length) {
      config.transform.forEach(function (transform) {
        if (transform.tr) {
          bundler.transform(transform.tr, transform.options).on('error', cb);
        } else {
          bundler.transform(transform).on('error', cb);
        }
      });
    }

    bundler.bundle()
      .on('error', cb)
      .pipe(source(config.fileName))
      .pipe(buffer())
      .on('data', function (chunk) {
        trs.push(chunk);
      })
      .on('end', cb);
  });
}

module.exports = gulpBrowserify;