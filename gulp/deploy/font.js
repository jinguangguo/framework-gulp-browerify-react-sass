/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp'),
    md5 = require('gulp-md5-plus');

gulp.task('font', function() {
    return gulp.src('./app/icomoon/fonts/**', {read: true})
        .pipe(gulp.dest('./output/app/scss/fonts/'));
});

gulp.task('font:prod', ['img:prod'], function() {
    return gulp.src('./app/icomoon/fonts/**', {read: true})
        .pipe(md5(6, ['./output/app/**/*.css']))
        .pipe(gulp.dest('./output/app/scss/fonts/'));
});