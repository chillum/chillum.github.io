var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    minify = require('gulp-minify-css'),
    del    = require('del');
 
gulp.task('default', function() {
  gulp.src('src/*.css')
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest('.'));
  gulp.src('src/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  del(['*css', '*.html']);
});
