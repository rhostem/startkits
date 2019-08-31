'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

function isFixed(file) {
  // Has ESLint fixed the file contents?
  return file.eslint != null && file.eslint.fixed;
}

gulp.task('js', function() {
  gulp.src([ global.paths.js.src ] )
    .pipe( gulpif( argv.all === undefined , changed( global.paths.js.dist ) ) )
    .pipe( eslint({
      fix: true
    }))
    .pipe( eslint.format() )
    .pipe( gulpif(isFixed, gulp.dest(function(file) {
      return file.base; // overwrite original files as fixed
    }) ) )
    .pipe( gulp.dest( global.paths.js.dist ) )
    .pipe( browserSync.reload({stream: true}));
});

// watch gulp files
gulp.task('js-gulp', function() {
  gulp.src( global.paths.gulp )
    .pipe( changed( global.paths.gulp ) )
    .pipe( eslint() )
    .pipe( eslint.format() );
});
