'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

global.gulpConfig.sass = {
  process: {
    errLogToConsole: true,
    outputStyle: 'expanded'
  },
  autoprefixer: {
    // https://github.com/ai/browserslist
    browsers: ['last 2 versions', '> 1% in KR', 'ie 6-8'],
    cascade: false
  }
}


gulp.task('sass', function() {
  gulp.src( global.paths.sass.src )
    .pipe( sourcemaps.init() ) // init sourcemaps
    .pipe( sass( global.gulpConfig.sass.process ).on('error', sass.logError) )
    .pipe( autoprefixer(global.gulpConfig.sass.autoprefixer) )
    .pipe( sourcemaps.write('./maps') )
    .pipe( gulp.dest( global.paths.sass.dist ) )
    .pipe( browserSync.reload({ stream: true }) );
});

