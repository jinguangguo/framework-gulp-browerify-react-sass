/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');



var es6ify = require('es6ify');



gulp.task('js', function() {

    return browserify({
            entries: './app/jsx/index.jsx',
            extentions: ['.jsx'],
            debug: true
        })
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(gulp.dest('./output/'));


});

gulp.task('js:prod', function() {

});