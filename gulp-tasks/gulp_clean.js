'use strict';
var gulp = require('gulp');
var del = require('del');
var fs = require('fs');

module.exports = cleanBuildFolder;
function cleanBuildFolder(gulp) {
	return function() {
    	del(['./client-side/tmp']);
  	};
}

