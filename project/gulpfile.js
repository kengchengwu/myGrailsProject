var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var del = require('del');

var appSrcPath = 'app';
var appTargetPath = '../web-app';

//JS
gulp.task('js', function () {
   return gulp.src(appSrcPath+'/js/src/*.js')
			  .pipe(plugins.concat('main.js'))
			  .pipe(gulp.dest(appSrcPath+'/js/dist'))
			  .pipe(plugins.rename('main.min.js'))
			  .pipe(plugins.uglify())
			  .pipe(gulp.dest(appSrcPath+'/js/dist'))
			  .pipe(plugins.livereload());
});


// Clean
gulp.task('clean', function() {
  return del([appTargetPath+'/*','!'+appTargetPath+'/META-INF','!'+appTargetPath+'/WEB-INF'],{force:true});
});

//Build
gulp.task('build', ['clean','js'], function() {
  return gulp.src([appSrcPath+'/**','!'+appSrcPath+'/js/{src,src/**}'])
  			 	  .pipe(gulp.dest(appTargetPath))
});

//Watch
gulp.task('watch', function () {
   plugins.livereload.listen();
   gulp.watch(appSrcPath+'/js/src/*.js', ['build']);
});


gulp.task('default', ['build'], function() {});