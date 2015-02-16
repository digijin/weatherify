gulp = require 'gulp'
bower = require 'gulp-bower'
mocha = require 'gulp-mocha'
nodemon = require 'gulp-nodemon'
lint = require 'gulp-jshint'

gulp.task 'default', ['bower', 'check', 'watch']

source = ['app/**/*.*', 'spec/**/*.*', '!app/public/lib/**/*.*']


gulp.task 'watch', ->
	gulp.watch source, ['check']

gulp.task 'check', ['test', 'lint']

gulp.task 'test', ['bower'], ->
	gulp.src 'spec/**/*.*', {read: false}
        .pipe mocha {reporter: 'nyan'}

gulp.task 'bower', ->
	bower 'app/public/lib/'

gulp.task 'lint', ->
	gulp.src source
		.pipe lint()
		.pipe lint.reporter 'default'
