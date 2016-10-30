var gulp, sass, _watchSass, _scss, _cssDist;
gulp = require('gulp');
sass = require('gulp-sass');
_watchSass = 'scss/**/*.scss';
_scss = 'scss/*.scss';
_cssDist = 'css';
gulp.task('watch', function (){

    gulp.run("sass:src");
    var watcher = gulp.watch(_watchSass, ['sass:src']);
    watcher.on('change', function (e) {
        console.warn('File ' + e.path + ' was ' + e.type + ', running tasks...');
    })
})

gulp.task('sass:src', function (){
	gulp.src( [_scss, '!_*.scss'] )
		.pipe( sass() ).on('error', sass.logError)
		.pipe( gulp.dest(_cssDist) );
})