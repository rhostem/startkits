'use strict';

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var exec = require('child_process').exec;
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license', 'del']
});

gulp.task('clean', function() {
  $.del([
    'dist',
    'public/build.js',
  ]);
});

/**
 * gulp-useref를 이용한 빌드 프로세스.
 * index.html에서 'build:{extension}' 주석 내부에 명시된 파일을 불러와서 압축한다.
 */
gulp.task('html', function () {
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.src, 'index.html'))
    .pipe($.useref())
    // js build
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.rev())
    .pipe(jsFilter.restore)
    // css build
    .pipe(cssFilter)
    .pipe($.cssnano({ safe: true }))
    .pipe($.rev())
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    // save build files to dist folder
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
});

/**
 * 폰트, html, css, js 파일을 제외한 파일을 dist 폴더로 이동시킨다.
 */
gulp.task('assets', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/jspm_packages/**/*'),
    path.join('!' + conf.paths.src, '/vendor/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,map}'),
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

/**
 * 배포용 번들 생성
 */
gulp.task('bundle', function() {
  exec('jspm unbundle', function () {
    exec('jspm bundle app/index --minify --inject --skip-source-maps', function () {
      // copy config and bundle file to dist folder
      gulp.src([
        'public/config.js',
        'public/build.js'
      ])
      .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
    });
  })
});

gulp.task('build', ['clean'], function () {
  gulp.start('html');
  gulp.start('assets');
  gulp.start('bundle');
});


