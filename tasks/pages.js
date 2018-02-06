import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/atgs';

//处理ejs模板
gulp.task('pages',()=>{
	return gulp.src('app/**/*ejs')
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()))
})