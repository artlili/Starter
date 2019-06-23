module.exports = () => {
  // $.gulp.task('@2x:jpg', () => {
  //   return $.gulp.src('./dev/static/images/**/*.jpg')
  //     .pipe($.gp.responsive({
  //       '**/*.jpg': [{
  //         width: '50%',
  //       },
  //       {
  //         width: '100%',
  //         rename: { suffix: '@2x' },
  //
  //       }]
  //     }, {
  //       quality: 70,
  //       progressive: true,
  //       withMetadata: false,
  //       errorOnEnlargement: false,
  //     }))
  //     .pipe($.gp.rename({extname: ".jpg"}))
  //     .pipe($.gulp.dest('./build/images/'));
  // });
  $.gulp.task('@2x', () => {
    return $.gulp.src('./dev/static/images/**/*.{jpg,png,webp}')
      .pipe($.gp.responsive({
        '**/*': [{
          width: '50%',
        },
        {
          width: '100%',
          rename: { suffix: '@2x' },

        }]
      }, {
        quality: 70,
        progressive: true,
        withMetadata: false,
        errorOnEnlargement: false,
      }))
      .pipe($.gp.if(file => {
        return file.path.match('.jpeg') },
        $.gp.rename({extname: ".jpg"
      })))
      .pipe($.gulp.dest('./build/images/'));
  });
};
