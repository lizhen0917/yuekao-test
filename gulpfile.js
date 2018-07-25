var gulp = require('gulp');

var server = require('gulp-webserver');

var autoprefixer = require('gulp-autoprefixer');

var scss = require('gulp-sass');

var path = require('path');

var url = require('url');

var fs = require('fs');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 9999,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;

                if (pathname === '/favicon.ico') {
                    return false
                }

                pathname = pathname === '/' ? '/index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
});