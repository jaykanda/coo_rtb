'use strict';

var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

module.exports = build_nodejslib;
function build_nodejslib(gulp){
	return function(){
        var nodepkg_jslib = './client-side/tmp/';
        var src = ['./client-side/node_modules/core-js/client/shim.min.js',
        './client-side/node_modules/zone.js/dist/zone.js',
        './client-side/node_modules/systemjs/dist/system.src.js',
        './client-side/node_modules/chart.js/dist/Chart.js']
		return gulp.src(src)
        .pipe(concat("node_lib/nodelib.js"))
        .pipe(gulpif("node_lib/nodelib.js", uglify()))
        .pipe(gulp.dest(nodepkg_jslib))
        .pipe(notify({message:'Node modules js files are built !!'}));
	};
}