'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task("compileSass", function(){
	gulp.src("sass/app.sass")
			.pipe(sass())
			.pipe(gulp.dest("css"));
});