/// <binding BeforeBuild='BeforeBuild' AfterBuild='AfterBuild' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('aot-compile', shell.task([
    'npm run aot'
]));

gulp.task('rollup', shell.task([
    'npm run rollup'
]));

gulp.task('copy-zone', function () {
    return gulp.src(['node_modules/zone.js/dist/zone.min.js'], { "base": "node_modules/zone.js/dist" })
                .pipe(gulp.dest('wwwroot/scripts/'))
});

gulp.task('copy-reflect', function () {
    return gulp.src(['node_modules/reflect-metadata/Reflect.js'], { "base": "node_modules/reflect-metadata" })
                .pipe(gulp.dest('wwwroot/scripts/'))
});

/* this should run before each build */
gulp.task('BeforeBuild', ['aot-compile'], function () { });

/* this should run after each build */
gulp.task('AfterBuild', ['copy-zone', 'copy-reflect', 'rollup'], function () { });
