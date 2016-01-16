/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

var gulp = require('gulp');

var sequence = require('gulp-sequence');

require('./deploy/clean');

require('./deploy/font');

require('./deploy/img');

require('./deploy/scss');

require('./deploy/js');

require('./deploy/html');

gulp.task('deploy:debug', sequence('clean', ['font', 'img', 'scss', 'js', 'html']));

// html -> js -> scss -> img ->font
gulp.task('deploy:prod', sequence('clean', ['font:prod']));