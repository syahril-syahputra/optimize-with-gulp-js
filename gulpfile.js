const gulp = require('gulp')
const concatCss = require('gulp-concat-css')
const clean = require('gulp-clean-css')


function defaultTask(cb) {
    // place code for your default task here
    console.log('default')
    cb();
}

function css() {
    return gulp
        .src("src/css/*.css")
        .pipe(concatCss("css/global.css"))
        .pipe(clean())
        .pipe(gulp.dest("dist/"));
}

exports.default = css;
