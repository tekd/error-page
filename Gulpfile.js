var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('static/govlab-styleguide/sass/**/*.{scss,css}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css/'));
});


gulp.task('default',function() {
    gulp.watch('static/govlab-styleguide/sass/**/*.{scss,css}',['styles']);
});