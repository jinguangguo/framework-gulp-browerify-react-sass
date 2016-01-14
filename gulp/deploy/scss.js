/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp');

var gulpSass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('scss', function() {
    return gulp.src('**/app/scss/*.scss')
        .pipe(gulpSass())
        .pipe(autoprefixer({
            browserlist: ['Android', 'iOS']
        }))
        .pipe(gulp.dest('./output/'));
});

gulp.task('scss:prod', ['js:prod'], function() {
    return gulp.src('**/app/*.scss')
        .pipe(gulpSass())
        .pipe(autoprefixer({
            browserlist: ['Android', 'iOS']
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./output/'));
});