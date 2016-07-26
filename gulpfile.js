/**
 * Plugins
 * -------
 */

var gulp = require('gulp'); // Gulp is always required
var scss = require('gulp-sass'); // Gulp libsass implementation
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

/**
 * Tasks
 * -----
 */

/**
 * Compiles SCSS files into CSS
 *
 * @source .scss files
 * @dest .css files
 */
gulp.task('scss', function() {
    return gulp.src(['scss/**/*.scss', '!scss/**/_*'])
        .pipe(scss())
        .pipe(gulp.dest('css'));
});


/**
 * Minify CSS
 *
 * @source .css files
 * @dest .css files
 */
gulp.task('minify-css', function() {
  return gulp.src('css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('dist/css'));
});


/**
 * The default task that is run with the
 * gulp command when not task is specified.
 * The scss task is required to run before
 * this one.
 */

gulp.task('default', ['scss'], function() {
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('css/**/*.css', ['minify-css']);
});