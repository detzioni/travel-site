var gulp = require(`gulp`), 
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    cssNested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins')

    gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssVars, cssNested, autoprefixer]))
        .on('error', function(errInfo){
            console.log(errInfo.toString())
            this.emit('end')
        })
        .pipe(gulp.dest("./app/temp/styles"))
})
