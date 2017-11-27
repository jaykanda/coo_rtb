'use strict';

var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

module.exports = build_appjs;
function build_appjs(gulp){
	return function(){
//		log( "Build_jslib" );
        var src = ['./client-side/js/jquery-3.2.0.min.js', './client-side/js/bootstrap.min.js', './client-side/js/sidebar_menu.js'];
        var app_jslib = './client-side/tmp/';
		return gulp.src(src)
        .pipe(concat("appjs/appjs.js"))
        .pipe(gulpif("appjs/appjs.js", uglify()))
        .pipe(gulp.dest(app_jslib))
        .pipe(notify({message:'Application js files are built !!'}));
	};
}