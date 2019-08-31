'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

gulp.task('styles', ['stylelint'], function() {
  return buildStyles();
});

gulp.task('styles-reload', ['stylelint'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

var buildStyles = function() {
  /**
   * app.css에서 import 해야하는 파일들을 자동으로 추가
   */
  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join('!' + conf.paths.src, '/app/style.inject.css'),
    path.join('!' + conf.paths.src, '/app/style.css'),
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace('public/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '/* injector */',
    endtag: '/* endinjector */',
    addRootSlash: false
  };

  /**
   * postcss 프로세서 목록
   */
  var postcssProcessors = [
    require('postcss-import')(),
    require('precss')(),
    require('postcss-cssnext')({
      'browsers': ['last 2 versions', '> 1% in KR', 'ie 9-10', 'Firefox ESR'],
    }),
    require('lost'),
    require('postcss-advanced-variables')(),
    require('postcss-browser-reporter')(),
  ];

  return gulp.src([
    path.join(conf.paths.src, '/app/style.inject.css')
  ])
    .pipe($.rename('style.css'))
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sourcemaps.init())
    .pipe($.postcss(postcssProcessors))
    .on('error', conf.errorHandler('postcss'))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app')));
};

gulp.task('stylelint', function() {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join('!' + conf.paths.src, '/app/style.inject.css'),
    path.join('!' + conf.paths.src, '/app/style.css'),
  ])
  .pipe($.postcss([
    require('stylelint')(),
    require('postcss-reporter')({ clearMessages: true })
    ]));
});
