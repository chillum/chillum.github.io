'use strict';

const { task, series, parallel,
  src, dest, watch }  = require('gulp'),
  pug                 = require('gulp-pug'),
  less                = require('gulp-less'),
  del                 = require('del');

task('css', function() {
  return src('src/main.less')
    .pipe(less())
    .pipe(dest('.'));
});

task('html', function() {
  return src('src/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(dest('.'));
});

task('default', parallel('css', 'html'));

task('watch', function() {
  watch('src/*.less', series('css'));
  watch('src/*.pug',  series('html'));
});

task('clean', function(done) {
  del.sync(['main.css', 'index.html']);
  done();
});
