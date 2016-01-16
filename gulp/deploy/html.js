/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    gulpReplace = require('gulp-replace');

gulp.task('html', function() {

    return gulp.src('**/app/*.html')
        .pipe(gulpReplace(/(<link.*href=.*)\.scss/g, '$1.css')) // 替换css
        .pipe(gulpReplace(/(<script.*src=.*)\.jsx/g, '$1.js')) // 替换js
        .pipe(gulp.dest('./output/'));

});

gulp.task('html:prod', function() {

    return gulp.src('**/app/*.html')
        .pipe(gulpReplace(/(<link.*href=.*)\.scss/g, '$1.css')) // 替换css
        .pipe(gulpReplace(/(<script.*src=.*)\.jsx/g, '$1.js')) // 替换js
        //.pipe(minifyHTML({empty: true}))
        .pipe(gulp.dest('./output/'));

});