'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

global.gulpConfig.jade = {
  pretty: true
}

gulp.task('jade', function() {
  gulp.src(global.paths.jade.src)
    .pipe(
      gulpif(
        (argv.all === undefined),
        changed(global.paths.jade.dist, {extension: '.html'})
      )
    )
    .pipe( jade(global.gulpConfig.jade) )
    .on('error', errorLog)
    .pipe( gulp.dest( global.paths.jade.dist ) )
    .pipe( browserSync.reload({stream: true}) );
});


function errorLog(error) {
  console.error(error.message);
  this.emit('end'); // watch를 멈추지 않게 한다
}

