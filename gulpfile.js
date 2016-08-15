var gulp = require('gulp'),    
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    minifycss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    notify = require('gulp-notify'),
    del = require('del'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync'),
    fs = require('fs-extra');

gulp.task('styles', ['cleanCSS'], function () {
  gulp.src('./static/sass/main.scss')//lee estos archivos
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifycss({keepBreaks:false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({ message: 'CSS - task completed'}))
});

gulp.task("jshint", function(){
    return gulp.src(['/static/js/*.js']) // pasamos nuestros propios archivos js
        .pipe(jshint()) // los revisamos
        .pipe(jshint.reporter('default')) // pedimos a jshint que nos muestre los errores usando un revisor estándar
        .pipe(notify({ message: 'JSHints task complete' })); // notifcamos al sistema
});

gulp.task('scripts', ['cleanJS'], function() {
  gulp.src('./static/js/index.js')
    .pipe(gulp.dest('./dist/js')) // trabajaremos con el archivo de jquery y nuestros js 
    .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
    .pipe(rename({suffix: '.min'})) // hacemos una copia y le agregamos el prefijo min
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'Scripts task complete' })); // avisamos al sistema que la tarea se completó
}); 

gulp.task('images', function() {
  return gulp.src('static/images/*') // ruta a nuestras imágenes, queremos que busque a dos niveles
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })) // proceso de optimización
    .pipe(gulp.dest('dist/images')) // guardamos las imágenes procesadas
    .pipe(notify({ message: 'Images task complete' })); // avisamos al sistema
});

gulp.task('watch', function() {
  gulp.watch('./static/sass/**/*.scss', ['styles']);
});

gulp.task('cleanCSS', function() {
  fs.removeSync('./dist/css');
});

gulp.task('cleanJS', function() {
  fs.removeSync('./dist/js');
});

gulp.task('clean', function(cb) {
    del(['./dist/css', './dist/js', './dist/images'], cb)
});

gulp.task('default', ['clean'] ,function() {
    gulp.start('styles', 'scripts', 'images');
});