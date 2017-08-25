var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');

gulp.task('test', function() {
    return gulp.src('**/spec/calcSpec.js').pipe(jasmine({
        integration: true
    }));
})