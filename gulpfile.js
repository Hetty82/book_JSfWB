const gulp          = require('gulp'),
      gutil         = require('gulp-util'),
      gulpif        = require('gulp-if'),
      browserSync   = require('browser-sync').create(),

      pug           = require('gulp-pug'),

      // vinyl source streams makes browserify work without using the gulp-browserify plugin
      source        = require('vinyl-source-stream'),
      browserify    = require('browserify'),
      // streamify turns it back into a stream (after source unstreamed it)
      streamify     = require('gulp-streamify'),
      uglify        = require('gulp-uglify'),

      sass          = require('gulp-sass');

let env             = process.env.NODE_ENV || 'development';
let outputDir       = './dist'


// -----
// TASKS
// -----

// Init BrowserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

// Build html
gulp.task('html', function() {
  return gulp.src('src/templates/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(outputDir));
});

// Build scripts
gulp.task('scripts', function () {
  return browserify('./src/scripts/main', { debug: env === 'development' })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(env === 'production', streamify(uglify())))
    .pipe(gulp.dest(outputDir));
});

// Build styles
gulp.task('styles', function() {
  let config = {};

  if (env === 'development') {
    config.sourceComments = 'map';
  }

  if (env === 'production') {
    config.outputStyle = 'compressed';
  }

  return gulp.src('src/styles/app.sass')
    .pipe(sass(config))
    .pipe(gulp.dest(outputDir))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Watch
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/templates/**/*.pug', [ 'html', browserSync.reload ]);
  gulp.watch('src/scripts/**/*.js', [ 'scripts', browserSync.reload ]);
  gulp.watch('src/styles/**/*.sass', [ 'styles', browserSync.reload ]);
});

// Default
gulp.task('default', ['scripts', 'styles', 'html', 'watch']);
