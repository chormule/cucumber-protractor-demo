var gulp = require('gulp');
var protractorReport = require('gulp-protractor-cucumber-html-report');

gulp.task('reports', function() {
  gulp.src('reports/cucumber-test-results.json')
    .pipe(protractorReport({
        dest: 'reports/'
     }))

});