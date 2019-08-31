// inject task is not used currently
// all source codes and vendor files are bundled by JSPM
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

/**
 * public/inject.index.html 파일에 스크립트, 스타일시트 파일을 자동으로 추가한다.
 * 앱 스크립트, 스타일시트는 index.html에 1개만 추가하면 되기에 인젝트할 필요가 없고
 * vendor 폴더 내부의 외부 라이브러리만 추가해준다.
 *
 * 결과물은 index.html로 파일명을 변경한다.
 */
gulp.task('inject', ['scripts', 'styles'], function () {

  var injectStyles = gulp.src([
    path.join(conf.paths.src, '/vendor/**/*.css'),
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/vendor/**/*.js'),
  ]);

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/inject.index.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(conf.paths.src));

});
