// Dependencies
var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var addSrc = require('gulp-add-src');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssMin = require('gulp-minify-css');
var autoprefix = require('gulp-autoprefixer');
var critical = require('critical');

// SASS & CSS config
var sassDir = 'sass';
var cssDir = 'public/css';
var fontDir = 'public/font';

// Default Task
gulp.task('default', ['sass']);

// SASS & CoffeeScript Watcher
gulp.task('watch', ['sass'], function() {
    gulp.watch(sassDir + '/**/*.sass', ['sass']);
});

// Parse SASS, Autoprefix, Merge Fontello, Minify
gulp.task('sass', function() {
    return gulp.src(sassDir + '/*.sass')
        .pipe(sass())
        .on('error', function(error) {
            gutil.log(error);
            this.emit('end');
        })
        .pipe(addSrc(cssDir + '/fontello.css'))
        .pipe(autoprefix('last 10 version'))
        .pipe(concat('main.css'))
        .pipe(cssMin())
        .pipe(gulp.dest(cssDir));
});

// Generate & Minify Critical-path CSS
gulp.task('critical-index', function () {
    critical.generate({
        src: 'http://cv.dev',
        base: 'public/',
        ignore: ['@font-face',/url\(/],
        minify: true,
        dest: 'public/css/critical.css',
        width: 1920,
        height: 1080
    });
});
