var gulp = require('gulp')
var concat = require('gulp-concat')
var sass = require('gulp-ruby-sass')
var jade = require('gulp-jade')
var prettify = require('gulp-jsbeautifier')
var watch = require('gulp-watch');


gulp.task('watch', function () {
   gulp.watch(['build/sass/*.scss', 'build/jade/*.jade'], ['sass', 'jade']);
});

gulp.task('sass', function () {
  return sass('build/sass/main.scss')
    .on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  gulp.src('build/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(prettify({indentSize: 2}))
    .pipe(gulp.dest('assets/'))
});
