var gulp   = require('gulp'),
    path   = require('expand-home-dir'),
    pdf    = require('gulp-markdown-pdf'),
    jade   = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    del    = require('del');

gulp.task('default', ['css', 'html', 'pdf']);

gulp.task('css', ['main.css', 'cv.css']);

gulp.task('main.css', function() {
  return gulp.src('src/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('.'));
});

gulp.task('cv.css', function() {
  return gulp.src('src/cv.styl')
    .pipe(stylus())
    .pipe(gulp.dest('.'));
});

gulp.task('html', ['index', 'cv']);

gulp.task('index', function() {
  return gulp.src('src/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('cv', function() {
  return gulp.src('src/cv/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('cv'));
});

gulp.task('pdf', function() {
  return gulp.src('src/cv/cv.text')
    .pipe(pdf({cssPath: 'cv.css', remarkable: {html: true}}))
    .pipe(gulp.dest(path('~/Documents')));
});

gulp.task('watch', function() {
  gulp.watch('src/*.styl',     ['css']);
  gulp.watch('src/*.jade',     ['index']);
  gulp.watch('src/cv/*.jade',  ['cv']);
  gulp.watch('src/cv/cv.text', ['cv', 'pdf']);
  gulp.watch('cv.css',         ['pdf']);
});

gulp.task('clean', function() {
  del(['*.css', '*.html', 'cv', path('~/Documents/cv.pdf')], {force: true});
});
