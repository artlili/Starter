let scriptsPATH = {
        "input": "./dev/static/js/all.js",
        "ouput": "./build/js/"
    };

module.exports = () => {
    $.gulp.task('js:dev', () => {
      return $.browserify(scriptsPATH.input)
          .transform($.babelify.configure({
            presets: ['@babel/env']
          }))
          .bundle()
          .pipe($.gp.plumber())
          .pipe($.source('bundle.min.js'))
          .pipe($.gulp.dest(scriptsPATH.ouput))
          .pipe($.browserSync.reload({
              stream: true
          }));
    });

    $.gulp.task('js:build', () => {
      return $.browserify(scriptsPATH.input)
          .transform($.babelify.configure({
            presets: ['@babel/env']
          }))
          .bundle()
          .pipe($.source('bundle.min.js'))
          .pipe($.buffer())
          .pipe($.gp.uglify())
          .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
