/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html');

gulp.task('html', function() {

    return gulp.src('**/app/*.html')
        .pipe(gulp.dest('./output/'));

});

gulp.task('html:prod', function() {

    return gulp.src('**/app/**/*.html')
        //.pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest('./output/'));

});