'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync'); // http://www.browsersync.io/docs/options/
var crypto = require('crypto');
var replace = require('gulp-replace');
var rename = require('gulp-rename');


global.gulpConfig.browserSync = {
  'server'  : {
   baseDir: "public",
   directory:  true
  },
  // 'proxy': "127.0.0.1",
  'port'    : 7677,
  'notify'  : false,
  'open': false,
  'ghostMode': false,
}

gulp.task('bs', function() {
  createNewVersionCode();
  browserSync(global.gulpConfig.browserSync);
});


// create new version code to prevent browser cache issue
function createNewVersionCode() {

  var number = randomValueBase64(12);

  gulp.src('src/jade/part/config/_version_base.jade')
    .pipe(replace('VERSION_NUMBER', number.toString()))
    .pipe(rename({
      basename: "_version",
      extname: ".jade"
    }))
    .pipe( gulp.dest('src/jade/part/config/') );
}


function randomValueBase64 (len) { // http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript

  return crypto.randomBytes(Math.ceil(len * 3 / 4))
    .toString('base64')   // convert to base64 format
    .slice(0, len)        // return required number of characters
    .replace(/\+/g, '0')  // replace '+' with '0'
    .replace(/\//g, '0'); // replace '/' with '0'
}
