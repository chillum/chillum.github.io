var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    del    = require('del'),
    css    = 'src/*.styl',
    html   = 'src/*.jade';

gulp.task('default', ['css', 'html']);

gulp.task('css', function() {
  gulp.src(css)
    .pipe(stylus())
    .pipe(gulp.dest('.'));
});

gulp.task('html', function() {
  gulp.src(html)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch([css],  ['css']);
  gulp.watch([html], ['html']);
});

gulp.task('clean', function() {
  del(['*.css', '*.html']);
});
