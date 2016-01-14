/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp');

var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('./output', {read: false})
        .pipe(clean());
});