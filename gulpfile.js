var gulp = require('gulp');
		gutil = require('gulp-util');
		less = require('gulp-less');
		uglify = require('gulp-uglify');
		minifyCSS = require('gulp-minify-css');

// Specify source files
var jsSources = ['src/js/*.js'];
var lessSources = ['src/less/*.less'];
var cssSources = ['src/css/*.css']

// Convert LESS to CSS
gulp.task('less', function () {
  gulp.src(lessSources)
  	.pipe(less())
    .pipe(gulp.dest('src/css'))
});

// Minify js files
gulp.task('minify-js', function() {
  gulp.src(jsSources)
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// Minify css files
gulp.task('minify-css', function() {
  gulp.src(cssSources)
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

// Watchers
gulp.task('watch', function() {
	gulp.watch(jsSources, ['jsmin']);
	gulp.watch(lessSources, ['less']);
	gulp.watch(cssSources, ['minify-css']);
});

// Put all tasks into default task
gulp.task('default', ['less', 'minify-js', 'minify-css', 'watch']);