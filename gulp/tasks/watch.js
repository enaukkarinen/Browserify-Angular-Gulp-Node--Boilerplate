
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config.js')();

gulp.task('watch', ['ts-watch', 'less-watch', 'html-watch'], function() { 
    gutil.log(gutil.colors.green('WATCHING EVERYTHING!'));
});

gulp.task("ts-watch", function() {
    gulp.watch(config.allts, ['main']);
});

gulp.task("html-watch", function() {
    gulp.watch(config.allhtml, ['views']);
});

gulp.task('less-watch', function () {
    gulp.watch(config.less, ['less']);
});