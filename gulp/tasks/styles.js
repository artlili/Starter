let stylesPATH = {
        "input": "./dev/static/styles/",
        "ouput": "./build/css/"
    };

module.exports = () => {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src(stylesPATH.input + 'styles.scss')
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.rename('styles.min.css'))
            .pipe($.gulp.dest(stylesPATH.ouput))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('styles:build', () => {
        return $.gulp.src(stylesPATH.input + 'styles.scss')
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gp.rename('styles.min.css'))
            .pipe($.gulp.dest(stylesPATH.ouput))
    });
};
