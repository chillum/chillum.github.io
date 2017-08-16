'use strict';

const gulp   = require('gulp'),
      pdf    = require('gulp-markdown-pdf'),
      pug    = require('gulp-pug'),
      less   = require('gulp-less'),
      rename = require('gulp-rename'),
      del    = require('del');

gulp.task('default', ['css', 'html', 'pdf']);

gulp.task('css', ['main.css', 'cv.css']);

gulp.task('main.css', function() {
  return gulp.src('src/main.less')
    .pipe(less())
    .pipe(gulp.dest('.'));
});

gulp.task('cv.css', function() {
  return gulp.src('src/cv.less')
    .pipe(less())
    .pipe(gulp.dest('.'));
});

gulp.task('html', ['index', 'cv']);

gulp.task('index', function() {
  return gulp.src('src/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('cv', function() {
  return gulp.src('src/cv.pug')
    .pipe(pug({pretty: true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('cv'));
});

gulp.task('pdf', function() {
  return gulp.src('src/cv.md')
    .pipe(pdf({cssPath: 'cv.css', paperBorder: '1cm', remarkable: {html: true}}))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.less',  ['css']);
  gulp.watch('src/*.pug',   ['html']);
  gulp.watch('src/cv.md',   ['cv', 'pdf']);
  gulp.watch('cv.css',      ['pdf']);
});

gulp.task('clean', function() {
  del(['main.css', 'cv.css', 'index.html', 'cv/index.html', 'cv.pdf']);
});
