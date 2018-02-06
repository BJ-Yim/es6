import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

//处理js文件
gulp.task('scripts',()=>{
	// 入口
	return gulp.src(['app/js/index.js'])
	//抛出异常，集中处理
	.pipe(plumber({
		errorHandle:function(){

		}
	}))
	//命名
	.pipe(named())
	//编译js
	.pipe(gulpWebpack({
		module:{
			loaders:[{
				test:/\.js$/,
				loader:'babel'
			}]
		}
	}),null,(err,stats)=>{
		log(`Finished '${colors.cyan('scripts')}'`),
		stats.toString({
			chunks:false
		})
	})
	//出口
	pipe(gulp.dest('server/public/js'))
	//重命名
	.pipe(rename({
		basename:'cp',
		extname:'.min.js'
	}))
	//压缩
	.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
	//出口
	.pipe(gulp.dest('server/public/js'))
	//自动刷新
	.pipe(gulpif(args.watch,livereload()))
})