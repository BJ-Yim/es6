import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
	//不是处于监听状态下
	if(!args.watch) return cb();
	//监听app目录下的js、ejs和css改变时启动tasks目录下的script.js、pages和css文件
	gulp.watch('app/**/*.js',['scripts']);
	gulp.watch('app/**/*.ejs',['pages']);
	gulp.watch('app/**/*.css',['css']);
})