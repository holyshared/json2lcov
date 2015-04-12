gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
sourcemaps = require 'gulp-sourcemaps'
run = require 'gulp-run'

gulp.task 'coffee', ->

  coffeeStream = coffee({ bare: true })
    .on('error', gutil.log)

  gulp.src('./src/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffeeStream)
    .pipe(sourcemaps.write '../sourcemap/lib')
    .pipe(gulp.dest './lib/')

gulp.task 'coveralls', ->

  gulp.src('./report.lcov')
    .pipe(run('./node_modules/.bin/coveralls'));
