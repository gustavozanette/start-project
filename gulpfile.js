/* Gulp Dependencies */
var gulp = require('gulp'),
	uglify = require("gulp-uglify"),
	streamify = require("gulp-streamify"),
	rename = require("gulp-rename"),
	browserify = require("browserify"),
	sass = require('gulp-sass'),
	babelify = require("babelify"),
	concat = require("gulp-concat"),
	cleanCSS = require('gulp-clean-css'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	Server = require('karma').Server;

/* Plugins list in load order */
var plugins = [
	'./assets/js/libs/jquery-1.12.4.js',
	'./assets/js/libs/jquery.validate.js',
	'./assets/js/libs/jquery.mask.js',
	'./assets/js/libs/bootstrap.js'
];
/* Test scripts */
var test_dependencies = [
	'./assets/js/plugins.min.js',
	'./assets/js/script.min.js',
	'./tests/spec/**/*_spec.js'
];


/*-----
-------Tasks
-------*/

/* Scripts */
gulp.task('scripts', function() {
	browserify({ debug: true })
		.transform(babelify)
		.require("./assets/js/components/main.js", { entry: true })
		.bundle()
		.on('error',gutil.log)
		.pipe(source('script.min.js'))
		.pipe(streamify(uglify()))
    	.pipe(gulp.dest('./assets/js/'));
});
gulp.task('js_plugins', function() {
	return gulp.src(plugins)
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
});

/* Styles */
gulp.task('styles', function() {
    return gulp.src(['assets/css/scss/style.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./assets/css/'));
});
gulp.task('css_plugins', function() {
	return gulp.src(['./assets/css/scss/libs/*.css', './assets/css/scss/libs/*.scss'])
		.pipe(sass().on('error', sass.logError))
        .pipe(concat('plugins.min.css'))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('./assets/css/'));
});

/* Karma testing */
gulp.task('test', function (done) {
	new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    }).start();
});

/* Watch */
gulp.task('watch',function() {
	/* Scrips */
	gulp.watch(['./assets/js/components/**/*.js'],['scripts']);
	gulp.watch(['./assets/js/libs/*.js'],['js_plugins']);
	/* Styles */
	gulp.watch(['./assets/css/scss/style.scss', './assets/css/scss/components/**/*.scss'],['styles']);
	gulp.watch(['./assets/css/scss/libs/**/*.css', './assets/css/scss/libs/**/*.scss'],['css_plugins']);
});

/* Connect */
gulp.task('connect', function() {
	connect.server();
});

/* Default */
gulp.task('default', [
		'scripts',
		'js_plugins',
		'styles',
		'css_plugins',
		'connect',
		'watch'
	]);
