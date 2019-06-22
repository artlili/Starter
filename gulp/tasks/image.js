let imgPATH = {
        "input": ["./dev/static/images/**/*.{png,jpg,gif,svg}",
            '!./dev/static/images/svg/*'],
        "ouput": "./build/images/"
    };

module.exports = () => {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(imgPATH.input)
            .pipe($.gulp.dest(imgPATH.ouput));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src(imgPATH.input)
        .pipe($.gp.imagemin([
          $.gp.imagemin.gifsicle({interlaced: true}),
          $.gp.imagemin.jpegtran({progressive: true}),
          $.gp.imagemin.optipng({optimizationLevel: 3}),
          $.gp.imagemin.svgo(),
          $.imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium'
          }),
          $.pngquant({quality: [0.65, 0.7], speed: 5})
        ]))
        .pipe($.gulp.dest(imgPATH.ouput));
    });
};
