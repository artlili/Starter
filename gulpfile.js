global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    browserify: require('browserify'),
    babelify: require('babelify'),
    source: require('vinyl-source-stream'),
    buffer: require('vinyl-buffer'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'img:dev',
        'js:dev',
        'svg',
        'webp',
        '@2x',
        //'@2x:jpg',
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:build',
        'img:build',
        'js:build',
        'svg',
        'webp',
        '@2x',
        //'@2x:jpg',
    )
));
$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
