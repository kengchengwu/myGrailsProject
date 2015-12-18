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
			  .pipe(plugins.rename({extname:'.min.js'}))
			  .pipe(plugins.uglify())
			  .pipe(gulp.dest(appSrcPath+'/js/dist'))
			  ;
});

//SCSS
gulp.task('scss', function () {
   return gulp.src(appSrcPath+'/scss/src/*.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest(appSrcPath+'/scss/dist'))
        ;
});

//CSS
gulp.task('css', ['scss'], function () {
   return gulp.src([appSrcPath+'/css/src/*.css',appSrcPath+'/scss/dist/*.css'])
          .pipe(plugins.concat('app.css'))
          .pipe(gulp.dest(appSrcPath+'/css/dist'))
          .pipe(plugins.minifyCss({keepSpecialComments: 0}))
          .pipe(plugins.rename({extname:'.min.css'}))
          .pipe(gulp.dest(appSrcPath+'/css/dist'))
          ;
});

// Clean
gulp.task('clean', function() {
  return del([appSrcPath+'/js/dist/*',
              appSrcPath+'/css/dist/*',
              appSrcPath+'/scss/dist/*',
              appTargetPath+'/*',
              '!'+appTargetPath+'/META-INF',
              '!'+appTargetPath+'/WEB-INF'],{force:true});
});

//Build
gulp.task('build', ['clean','js','css'], function() {
  return gulp.src([appSrcPath+'/**',
                   '!'+appSrcPath+'/js/{src,src/**}',
                   '!'+appSrcPath+'/css/{src,src/**}',
                   '!'+appSrcPath+'/{scss,scss/**}'])
  			 	  .pipe(gulp.dest(appTargetPath))
  			 	  ;
});


//Watch
gulp.task('watch', function () {
   gulp.watch([appSrcPath+'/js/src/*.js',
               appSrcPath+'/css/src/*.css',
               appSrcPath+'/scss/src/*.scss'], ['build']);
});
 

gulp.task('default', ['build'], function() {});