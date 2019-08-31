'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');

/**
 * check event type is not added, deleted, renamed
 *
 * @param  {[Object]}  event [event.type, event.path]
 * @return {Boolean}
 */
function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['dependencies',], function () {
  // watch index.html
  gulp.watch([
    path.join(conf.paths.src, '/*.html'),
  ], function () {
    browserSync.stream();
  });

  // watch css files
  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      // gulp.start('inject-reload');
    }
  });

  // watch script files
  gulp.watch([
      path.join(conf.paths.src, '/app/**/*.js'),
    ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      // gulp.start('inject-reload');
    }
  });

});
