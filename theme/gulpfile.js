var gulp = require('gulp')
  , sass = require('gulp-sass')
  , del = require('del')
  , argv = require('yargs').argv
  , symlink = require('gulp-symlink')
  , pkg = require('./package.json')
  , rootpath = '../docroot/sites/all/themes/' + pkg.name
;

gulp.task('clean', function() {
  return del('./ui/css/**/*.css');
});

gulp.task('styles', function() {
  return gulp.src('./ui/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./ui/css/'));
});

gulp.task('move', function() {
  return gulp.src(['./**/*.*', '!./ui/sass/{,/**}', '!./gulpfile.js', '!./package.json'], { base: './' })
    .pipe(gulp.dest(rootpath));
});

gulp.task('symlink', function() {
  return gulp.src(['./**/*.*', '!./ui/sass/{,/**}', '!./gulpfile.js', '!./package.json'], { base: './' })
    .pipe(symlink(rootpath));
});

gulp.task('default', ['clean', 'styles', 'move']);
gulp.task('develop', ['clean', 'styles', 'symlink']);
