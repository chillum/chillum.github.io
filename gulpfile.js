var gulp   = require('gulp'),
    minify = require('gulp-minify-css'),
    del    = require('del');
 
gulp.task('default', function() {
  gulp.src('src/*.css')
    .pipe(minify({keepBreaks:true}))
    .pipe(gulp.dest('css/'));
});

gulp.task('clean', function() {
    del(['css']);
});
