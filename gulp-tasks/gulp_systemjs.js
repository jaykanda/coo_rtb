'use strict';
var gulp = require('gulp');

function gulp_systemjs(gulp) {
    return function() {
        gulp.task('bundleconfig', function() {
            return gulp.src('./client-side/systemjs.config.js')
              .pipe(gulp.dest('tmp/configs'));
          });
    }
}

module.exports = gulp_systemjs;