'use strict'
var gulp = require('gulp');
var utiltasks = './gulp-tasks/';

function getTask(taskFile) {
  console.log(taskFile + "====" + utiltasks + "&&&&&&&&&&");
        return require(utiltasks+ taskFile + '.js')(gulp);  
  }

gulp.task('gulp_clean', getTask('gulp_clean'));
gulp.task('build_csslib', getTask('build_csslib'));
gulp.task('build_appjs', getTask('build_appjs'));
gulp.task('build_nodejslib', getTask('build_nodejslib'));
gulp.task('gulp_fonts', getTask('gulp_fonts'));
gulp.task('gulp_tslint', getTask('gulp_tslint'));
gulp.task('gulp_systemjs', getTask('gulp_systemjs'));
gulp.task('gulp_bundleapp', getTask('gulp_bundleapp'));

gulp.task('build_app', ['gulp_clean', 'build_csslib', 'build_appjs', 'build_nodejslib', 'gulp_fonts', 'gulp_tslint'], function() {
  //gulp.task('Moving the fonts...', 'gulp_fonts', function(){
    // return gulp.task('');
    console.log('App is built...');
  //});
});

gulp.task('bundle_app', ['gulp_bundleapp'] , function() {
  console.log('App has bundled assets now...');
});

// gulp.watch('Linting Typescript', function(){
//   return gulp.task('Linting....', 'gulp_tslint');
// });

