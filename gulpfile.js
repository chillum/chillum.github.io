'use strict';

const { task, series, parallel,
  src, dest, watch }  = require('gulp'),
  pdf                 = require('gulp-markdown-pdf'),
  pug                 = require('gulp-pug'),
  less                = require('gulp-less'),
  rename              = require('gulp-rename'),
  del                 = require('del');

task('main.css', function() {
  return src('src/main.less')
    .pipe(less())
    .pipe(dest('.'));
});

task('cv.css', function() {
  return src('src/cv.less')
    .pipe(less())
    .pipe(dest('.'));
});

task('css', parallel('main.css', 'cv.css'));

task('index', function() {
  return src('src/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(dest('.'));
});

task('cv', function() {
  return src('src/cv.pug')
    .pipe(pug({pretty: true}))
    .pipe(rename('index.html'))
    .pipe(dest('cv'));
});

task('html', parallel('index', 'cv'));

task('pdf', function() {
  return src('src/cv.md')
    .pipe(pdf({cssPath: 'cv.css', paperBorder: '1cm', remarkable: {html: true}}))
    .pipe(dest('.'));
});

task('default', series('css', 'html', 'pdf'));

task('watch', function() {
  watch('src/*.less', series('css'));
  watch('src/*.pug',  series('html'));
  watch('src/cv.md',  series('cv', 'pdf'));
  watch('cv.css',     series('pdf'));
});

task('clean', function(done) {
  del.sync(['main.css', 'cv.css', 'index.html', 'cv/index.html', 'cv.pdf']);
  done();
});
