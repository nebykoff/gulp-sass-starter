const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build:css', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']            
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('build:css'))
})