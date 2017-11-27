'use strict';
var gulp = require('gulp');
var merge = require('merge-stream');
//runSequence = require('run-sequence').use(gulp);

module.exports = run_sequence;

function run_sequence(gulp) {
    console.log('Run sequence begin..');
    //return function(cb) {
        //runSequence('clean', 'env', 'tsc', 'sass', 'build_csslib', 'bundle_js' , ['hello'], cb);
    return merge('gulp_clean', 'build_csslib', 'build_appjs', 'build_nodejslib');    
    // }    
}
