/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp'),
    gulpBrowserify2 = require('gulp-browserify2'),
    to5ify = require('6to5ify'),
    md5 = require('gulp-md5-plus'),
    gulpRename = require("gulp-rename"),
    gulpUglify = require('gulp-uglify');

var entryJsPath = './app/jsx/index.jsx';

gulp.task('js', function() {

    return gulp.src(entryJsPath)
        .pipe(gulpBrowserify2({
            fileName: entryJsPath,
            transform: to5ify,
            options: {
                debug: false
            }
        }))
        .pipe(gulpRename(function (path) {
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./output/'));

});

gulp.task('js:prod', ['html:prod'], function() {

    return gulp.src(entryJsPath)
        .pipe(gulpBrowserify2({
            fileName: entryJsPath,
            transform: to5ify,
            options: {
                debug: false
            }
        }))
        .pipe(gulpRename(function (path) {
            path.extname = ".js";
        }))
        .pipe(gulpUglify())
        .pipe(md5(6, ['./output/app/**/*.html']))
        .pipe(gulp.dest('./output/'));

});