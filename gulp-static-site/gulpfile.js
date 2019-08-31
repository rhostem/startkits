'use strict'

const path = require('path')
const gulp = require('gulp')
const browserSync = require('browser-sync')
const gutil = require('gulp-util')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const del = require('del')
const runSequence = require('run-sequence')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')

const conf = {
  paths: {
    src: './src',
    dist: './public',
    js: {
      src: './src/js/*.js',
      dist: './public/assets',
    },
    sass: {
      src: './src/styles/*.scss',
      dist: './public/assets',
    },
    pug: {
      src: './src/page/**/*.pug',
      dist: './public/page',
    },
    html: {
      src: './src/page/**/*.html',
      dist: './public/page',
    },
  },
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString())
      this.emit('end')
    }
  },
  sass: {
    process: {
      errLogToConsole: true,
      outputStyle: 'compressed',
    },
    autoprefixer: {
      // https://github.com/ai/browserslist
      browsers: ['last 2 versions', '> 1% in KR', 'ie 8-11'],
      cascade: false,
    },
  },
}

/**
 *  Default task
 */
gulp.task('default', function() {
  runSequence('clean', 'run_source', 'watch', 'serve')
})

gulp.task('run_source', function() {
  runSequence('pug', 'html', 'sass', 'js')
})

gulp.task('pug', [], function buildHTML() {
  const pugErrHandler = conf.errorHandler('pug')
  return gulp
    .src(conf.paths.pug.src)
    .pipe(pug({ pretty: true }).on('error', pugErrHandler))
    .pipe(gulp.dest(conf.paths.pug.dist))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', [], function() {
  return gulp
    .src(conf.paths.html.src)
    .pipe(gulp.dest(conf.paths.html.dist))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('sass', [], function() {
  const sassErrHandler = conf.errorHandler('sass')
  gulp
    .src(conf.paths.sass.src)
    .pipe(sourcemaps.init()) // init sourcemaps
    .pipe(sass(conf.sass.process).on('error', sassErrHandler))
    .pipe(autoprefixer(conf.sass.autoprefixer))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(conf.paths.sass.dist))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', [], function buildHTML() {
  const jsErrHandler = conf.errorHandler('js')
  return gulp
    .src(conf.paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['env'],
      })
    )
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(conf.paths.js.dist))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('clean', function() {
  del(['./public/assets/**/*'])
  del(['./public/page/**/*'])
})

/**
 * open local server for livereload
 */
gulp.task('serve', function() {
  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: `${conf.paths.dist}`,
      directory: true,
    },
    port: 4000,
    open: true,
  })
})

/**
 * watch source files
 */
gulp.task('watch', function() {
  gulp.watch(path.join(conf.paths.src, '/**/*.pug'), ['pug'])
  gulp.watch(path.join(conf.paths.src, '/**/*.html'), ['html'])
  gulp.watch(
    [path.join(conf.paths.src, '/**/*.scss'), path.join(conf.paths.src, '/**/*.sass')],
    ['sass']
  )

  gulp.watch([path.join(conf.paths.src, '/**/*.js')], ['js'])
})

gulp.task('reload', function() {
  browserSync.reload({ stream: true })
})
