// let gulpif = require('gulp-if');

module.exports = () => {
    $.gulp.task('pug', () => {
        return $.gulp.src('./dev/pug/*.pug')
            .pipe($.gp.plumber())
            .pipe($.gp.changed('dist', {extension: '.html'}))
            .pipe($.gp.if(global.isWatching, $.gp.cached('pug')))
            .pipe($.gp.pugInheritance({basedir: './dev/pug/', skip: 'node_modules'}))
            .pipe($.gp.filter(function (file) {
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gp.plumber.stop())
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
