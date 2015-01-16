var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var watch = require('gulp-watch');
var livereload = require ('gulp-livereload');

var reload = browserSync.reload;

//watch files for changes and reload
gulp.task('serve', function(){
	browserSync({
		server:{
			baseDir: './src'
		}
	});

	gulp.watch([
		'*.html',
        'scss/*.scss',
		'css/*.css',
		'js/*.js'], {cwd: 'src'}, reload);
});

gulp.task('imagemin', function(){
    return gulp.src('src/resources/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('src/img'));
});
