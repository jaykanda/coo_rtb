'use strict';
var gulp    = require('gulp');
var typescript = require('typescript');
var ts      = require('gulp-typescript');
var tslint  = require('gulp-tslint');
var srcmaps = require('gulp-sourcemaps');


function gulp_tslint(gulp) {
    return function() {
        var tsc = ts.createProject('./client-side/tsconfig.json');
        
        //return function(){
            //log('Linting Ts Files:' + files);	
           return gulp.src(['./client-side/app/**/*.ts', '!./client-side/node_modules/**/*.{ts}'])
                .pipe(tsc())
                .pipe(gulp.dest('./client-side/tmp/app'))
        //};
    }
        
}

module.exports = gulp_tslint;
