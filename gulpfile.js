const gulp          = require('gulp'),
      gutil         = require('gulp-util'),
      gulpif        = require('gulp-if'),

      pug           = require('gulp-pug'),

      // vinyl source streams makes browserify work without using the gulp-browserify plugin
      source        = require('vinyl-source-stream'),
      browserify    = require('browserify'),
      // streamify turns it back into a stream (after source unstreamed it)
      streamify     = require('gulp-streamify'),
      uglify        = require('gulp-uglify');

let env = process.env.NODE_ENV || 'development';

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// create html
gulp.task('html', function() {
  return gulp.src('src/templates/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

// process scripts
gulp.task('scripts', function () {
  return browserify('./src/scripts/main', { debug: env === 'development' })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(env === 'production', streamify(uglify())))
    .pipe(gulp.dest('./dist'));
});
