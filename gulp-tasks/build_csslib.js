'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: true});
var cssnano = require('gulp-cssnano');
var glob = require('glob');
var args = require('yargs').argv;
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');

module.exports = build_csslib;

function build_csslib(gulp){
    return function(){
        var src  = './client-side/css/*.css';
        var dest = './client-side/tmp/';
        // log( "Build_csslib -->: src: " + src + " -- Dest:" + dest  );
        return gulp.src(src)
            .pipe(concat("appcss/coortb.css"))
            .pipe(gulpif("appcss/coortb.css", cssnano()))
            .pipe(gulp.dest(dest))
            .pipe(notify({message:'Application css files are built !!'}));
    };
}


