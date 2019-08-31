'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

global.paths = {
  js: {
    src: 'public/src/js/**/*.js',
    dist: 'public/js',
  },
  sass: {
    src: ['public/src/sass/**/*.sass', 'public/src/sass/**/*.scss'],
    dist: 'public/css',
  },
  jade: {
    src: ['public/src/jade/**/*.jade', '!public/src/jade/part/**/*.jade'],
    dist: 'public'
  },
  html: {
    index: 'public/index.html',
    page: 'public/page',
  },
  gulp: 'gulp/*.js',
  build: 'dist',
}

global.gulpConfig = {};

requireDir('./gulp', { recurse: false } );

gulp.task('default', ['bs', 'watch', 'unbuildjs']);
