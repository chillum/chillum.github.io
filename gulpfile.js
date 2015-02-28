var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    del    = require('del');
 
gulp.task('default', function() {
  gulp.src('src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('.'));
  gulp.src('src/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  del(['*.css', '*.html']);
});
