/**
 * @file
 * @author jinguangguo
 * @date 2016/1/14
 */

var gulp = require('gulp'),
    md5 = require('gulp-md5-plus'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('img', function() {
    // 替换源文件
    return gulp.src('**/app/img/**', {read: true})
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('img:prod', ['scss:prod'], function() {
    return gulp.src('**/app/img/**', {read: true})
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(md5(6, ['./output/app/**/*.html', './output/app/**/*.css', './output/app/**/*.js', './output/app/**/*.jsx']))
        .pipe(gulp.dest('./output/'));
});