module.exports = () => {
  $.gulp.task('webp', () => {
    return $.gulp.src('./dev/static/images/**/*.{png,jpg}')
        .pipe($.gp.webp({quality: 90}))
        .pipe($.gulp.dest('./dev/static/images/'));
  });
};
