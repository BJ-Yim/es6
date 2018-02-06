import gulp from 'gulp';
import del from 'del';
import args from './util/aigs';

// 清空对应目录
gulp.task('clean',()=>{
	return del(['server/public','server/views'])
})