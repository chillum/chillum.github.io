var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    del    = require('del'),
    html   = 'src/*.jade';

gulp.task('default', ['css', 'html']);

gulp.task('css', function() {
  return gulp.src('src/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('.'));
});

gulp.task('html', function() {
  return gulp.src(html)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.styl', ['css']);
  gulp.watch(html,         ['html']);
});

gulp.task('clean', function() {
  del(['*.css', '*.html']);
});
