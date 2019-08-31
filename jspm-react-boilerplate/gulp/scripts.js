'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;
var $ = require('gulp-load-plugins')();

function buildScripts() {
  return gulp.src([
      path.join(conf.paths.src, '/app/**/*.js'),
    ])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};

/**
 * SystemJS에서 xhr을 이용해 동적으로 모듈을 로드하면 시간이 많이 소요된다.
 * watch task를 시작하기 전에 dependency가 걸린 모듈들을 묶어서 로딩 시간을 단축시킨다.
 * app 폴더 내부의 파일은 제외시켜서 변경사항이 적용될 수 있게 한다.
 */
gulp.task('dependencies', function() {
  exec('jspm unbundle', function () {
    exec('jspm bundle app/**/* + systemjs-hot-reloader - [app/**/*] public/dependencies.js --inject --skip-source-maps', conf.execCb);
  });
});

gulp.task('eslint', function() {
  exec('node_modules/.bin/esw -w --fix --cache public/components/**/*.js', conf.execCb);
});

gulp.task('scripts', function() {
  return buildScripts();
});

gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});
