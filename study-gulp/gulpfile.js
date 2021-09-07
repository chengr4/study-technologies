const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// Hello world
gulp.task('message', () => {
  return console.log('Gulp is running');
})

// Copy all HTML files
gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
  .pipe(gulp.dest('build'));
})

// Minify images
gulp.task('imageMin', () => (
  gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/images'))
));

// Minify JS
gulp.task('minifyJS', () => (
  gulp.src('src/js/*')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
));

// Compile Sass
gulp.task('sass', () => (
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/css'))
));

gulp.task('default', gulp.parallel(['message', 'copyHTML', 'imageMin', 'minifyJS', 'sass']));