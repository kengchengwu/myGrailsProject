var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var del = require('del');

var projectPath = '..'
var appSrcPath = 'app';
var appTargetPath = '../web-app';

//JS
gulp.task('js', function () {
   return gulp.src(appSrcPath+'/js/src/*.js')
			  .pipe(plugins.concat('app.js'))
			  .pipe(gulp.dest(appSrcPath+'/js/dist'))
			  .pipe(plugins.rename('app.min.js'))
			  .pipe(plugins.uglify())
			  .pipe(gulp.dest(appSrcPath+'/js/dist'))
			  ;
});


// Clean
gulp.task('clean', function() {
  return del([appTargetPath+'/*','!'+appTargetPath+'/META-INF','!'+appTargetPath+'/WEB-INF'],{force:true});
});

//Build
gulp.task('build', ['clean','js'], function() {
  return gulp.src([appSrcPath+'/**','!'+appSrcPath+'/js/{src,src/**}'])
  			 	  .pipe(gulp.dest(appTargetPath))
  			 	  ;
});


//Watch
gulp.task('watch', ['connect'], function () {
   gulp.watch(appSrcPath+'/js/src/*.js', ['build']);
});


//Connect
// gulp.task('connect', function() {
  // plugins.connect.server({
  // 	root: appSrcPath,
  // 	port: 8081,
  // });
// });
 

gulp.task('default', ['build'], function() {});