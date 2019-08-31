'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var exec = require('child_process').exec;
var replace = require('gulp-replace');

var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano'); // http://cssnano.co/options/
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build', ['buildjs']);


gulp.task('buildjs', function(cb) {
  exec('jspm bundle js/**/* --inject --minify',function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


gulp.task('unbuildjs', function(cb) {
  exec('jspm unbundle',function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


/**
 * compile sass to css and uglify(by cssnano)
 */
gulp.task('buildStyle', function () {
  gulp.src(global.paths.sass.src)
    .pipe(sass(global.gulpConfig.sass.process)
    .on('error', sass.logError))
    .pipe(autoprefixer(global.gulpConfig.sass.autoprefixer))
    .pipe(cssnano({
      safe: true,
      sourcemap: true
    }))
    .pipe(gulp.dest(global.paths.sass.dist) )
});
