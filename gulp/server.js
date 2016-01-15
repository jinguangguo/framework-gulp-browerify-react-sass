/**
 * @file
 * @author jinguangguo
 * @date 2016/1/11
 */

var gulp = require('gulp');
var Hapi = require('hapi');
var through2 = require('through2');
var autoprefixer = require('gulp-autoprefixer');
var gulpBrowserify2 = require('gulp-browserify2');
var gulpSass = require('gulp-sass');
var to5ify = require('6to5ify');

// mock数据
var mocks = require('../mock/index').mocks;

/**
 * 获取请求文件信息
 * @param requestPath
 * @returns {{directoryPath: string, filePath: string, fileType: string, fileName: string}}
 */
function getFileInfo(requestPath) {
    var filePath = '.' + requestPath;
    var lastIndex = filePath.lastIndexOf('.');
    var directoryPath = filePath.substring(0, lastIndex);
    var fileType = filePath.substring(lastIndex + 1);
    var fileName = filePath.substring(filePath.lastIndexOf('/') + 1, lastIndex);
    return {
        directoryPath: directoryPath,
        filePath: filePath,
        fileType: fileType,
        fileName: fileName
    };
}

gulp.task('server:start', function() {

    "use strict";

    var server = new Hapi.Server();

    server.connection({
        port: 8001,
        host: '0.0.0.0'
    });

    // 静态资源
    server.route({
        method: 'GET',
        path: '/{params*}',
        handler: function(request, reply) {

            console.log('request.path ==================== ' + request.path);

            var fileInfo = getFileInfo(request.path);

            if (/bower_components/g.test(fileInfo.filePath) === true) {
                reply.file(fileInfo.filePath);
                return;
            }

            switch (fileInfo.fileType) {

                case 'html':
                    reply.file(fileInfo.filePath);
                    break;

                case 'css':
                case 'scss':
                    gulp.src(fileInfo.filePath.replace('.css','.scss'))
                        .pipe(gulpSass())
                        .pipe(autoprefixer({
                            browserlist: ['Android', 'iOS']
                        }))
                        .pipe(
                            through2.obj(
                                function (file) {
                                    reply(file.contents.toString()).type('text/css')
                                }
                            )
                        );
                    break;

                case 'js':
                case 'jsx':
                    to5ify.configure({
                        blacklist: ["generators"],
                        extensions: [".jsx"]
                    });
                    gulp.src(fileInfo.filePath)
                    .pipe(gulpBrowserify2({
                        fileName: 'bundle.js',
                        transform: to5ify,
                        options: {
                            debug: true
                        }
                    }))
                    .pipe(through2.obj(function (file) {
                        reply(file.contents.toString());
                    }));

                    break;

                // font字体
                case 'eot':
                case 'ttf':
                case 'woff':
                case 'svg':
                    reply.file(fileInfo.filePath.replace('fonts', 'icomoon/fonts'));
                    break;

                default:
                    reply.file(fileInfo.filePath);
            }

        }
    });

    // 添加mock数据
    mocks.forEach(function (item, index) {
        server.route(item);
    });

    // 启动server
    server.start(function() {
        console.log('Server running at:', server.info.uri);
    });

});