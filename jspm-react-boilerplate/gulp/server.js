'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var util = require('util');
// var proxyMiddleware = require('http-proxy-middleware');
var exec = require('child_process').exec;

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  if(baseDir === undefined) {
    // use proxy
    browserSync.instance = browserSync.init({
      startPath: '/',
      proxy: 'localhost:9000', // hot-reload-server.js
      port: 5000,
      browser: browser,
      open: false,
    });
  } else{

    var server = {
      baseDir: baseDir,
    };

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      port: 4000,
      browser: browser
    });
  }

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});
}

gulp.task('hotReloadServer', function () {
  exec('node hot-reload-server', conf.execCb);
});

/**
 * watch files with hot-reloader
 * (browser is not refreshed when js files modified )
 */
gulp.task('serve', ['hotReloadServer', 'watch'], function () {
  browserSyncInit();
});

/**
 * watch files with static server
 */
gulp.task('serve:folder', ['watch'], function () {
  browserSyncInit([conf.paths.src]);
});

// gulp.task('serve:dist', ['build'], function () {
gulp.task('serve:dist', function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
