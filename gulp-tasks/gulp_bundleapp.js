'use strict';
var gulp = require('gulp');
var systemjsBuilder = require('systemjs-builder');

function gulp_bundleapp(gulp) {
    return function(){
        gulp.task('bundleapp', ['gulp_systemjs', 'gulp_tslint'], function() {
            var builder = new systemjsBuilder('', './client-side/systemjs.config.js');
            return builder
                .bundle('[tmp/**/*]', 'bundleassets/app.bundle.min.js', {
                    minify: true,
                    mangle: true
                })
                .then(function() {
                    console.log('Build complete');
                })
                .catch(function(err) {
                    console.log('Build error');
                    console.log(err);
                });
      });
      gulp.task('bundledepedencies', ['gulp_systemjs', 'gulp_tslint'], function() {
        var builder = new systemjsBuilder('', './client-side/systemjs.config.js');
        return builder
            .bundle('tmp/**/* - [tmp/**/*.js]', 'bundleassets/appdependencies.bundle.min.js', {
                minify: true,
                mangle: true
            })
            .then(function() {
                console.log('Build complete');
            })
            .catch(function(err) {
                console.log('Build error');
                console.log(err);
            });
  });
    }   
}

module.exports = gulp_bundleapp;


