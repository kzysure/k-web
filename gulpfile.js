var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');

gulp.task('default',function(){
var proccessors=[
    px2rem({remUnit:75})
];
return gulp.src('./src/css/mobile.css')
.pipe(postcss(proccessors))
.pipe(gulp.dest('./dist/css/'))
})
