import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
	//不是处于监听状态下
	if(!args.watch) return cb();
	//创建服务器
	var server = liveserver.new(['--harmony','server/bin/www']);
	server.start();
	//监听server目录下面的js、ejs改变用于浏览器热更新
	gulp.watch(['server/public/**/*.js','server/viwes/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})
	//路由或者接口改变，重启服务器
	
})