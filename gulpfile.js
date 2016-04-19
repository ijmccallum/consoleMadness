var gulp = require('gulp');
var gutil = require('gulp-util');

var possible = " ABCDEFGHIJKLMNO PQRSTUVWXYZ abcdefghijklmn opqrstuvwxyz01 23456789 ";
var consoleString = "";
var go = 500;

var getString = function(){
	consoleString = "";
	var stringLength = Math.floor(Math.random() * 500);
	for( var i=0; i < stringLength; i++ ) {
		consoleString += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return consoleString;
}

gulp.task('default', function() {
	for (var i = 0; i < go; i++) {
		setTimeout(function () {
			gutil.log(getString());
		}, Math.floor(Math.random() * 50) * i);
	}
});