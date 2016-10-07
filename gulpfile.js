var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    node_path = 'node_modules';

gulp.task('build', function () {
    return gulp.src([
        './sass/**/*.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('./'));
});
