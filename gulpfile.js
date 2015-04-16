var gulp = require('gulp');
		gutil = require('gulp-util');
		coffee = require('gulp-coffee');
		concat = require('gulp-concat');
		connect = require('gulp-connect');
		less = require('gulp-less');

// Specify source files
var coffeeSources = ['src/coffee/*.coffee'];
var jsSources = ['src/js/*.js'];
var lessSources = ['src/less/*.less'];
var tmplSources = ['src/templates/*.jade'];

gulp.task('less', function () {
  gulp.src(lessSources)
  	.pipe(less())
    .pipe(gulp.dest('public/css'))
});

// Convert all coffeescripts to javascripts
gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('src/js'))
});

// Make single js file from all js files
gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(connect.reload())
});

// Reload when templates change
gulp.task('tmpl', function() {
	gulp.src(tmplSources)
		.pipe(connect.reload())
});

// Set up live reload
gulp.task('connect', function() {
	connect.server ({
		root: 'builds/development/',
		livereload: true
	})
});

// Watchers
gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch(lessSources, ['less']);
	gulp.watch(tmplSources, ['tmpl']);
});

// Put all tasks into default task
gulp.task('default', ['coffee', 'js', 'less', 'tmpl', 'connect', 'watch']);