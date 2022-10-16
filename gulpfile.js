import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import { deleteAsync } from 'del';
import ts from 'gulp-typescript'

const { src, dest, series, parallel, watch } = gulp;

const tsProject = ts.createProject('tsconfig.json');
const sass = gulpSass(dartSass);
const sync = browserSync.create();

function liquid() {
    return src('./src/templates/**/*.liquid')
        .pipe(htmlmin({
            collapseWhitespace: true,
        }))       
        .pipe(dest('dist/templates'));
}

function scss() {
    return src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
            }),
        )
        .pipe(csso())
        .pipe(concat('style.css'))
        .pipe(dest('./dist/css'));
}

function script() {
    return src('./src/**/*.js')
        .pipe(dest('dist/'));
}

function typescript() {
    return src('./src/**/*.ts')
        .pipe(tsProject())
        .pipe(dest('dist/'));
}

function img() {
    return src(`./src/img/**/*.{jpg,png,jpeg,ico,svg}`)
        .pipe(dest('./dist/img'));
}

function fonts() {
    return src(`./src/fonts/**/*.{ttf,woff,woff2}`)
        .pipe(dest('./dist/fonts'));
}

function clear() {
    return deleteAsync('dist/**');
}

function serve() {
    watch('./src/templates/**/*.liquid', series(liquid)).on('change', sync.reload);
    watch('./src/scss/**/*.scss', series(scss)).on('change', sync.reload);
    watch('./src/**/**.js', series(script)).on('change', sync.reload);
    watch('./src/**/**.ts', series(typescript)).on('change', sync.reload);
}

async function startBrowerSync() {
    sync.init({
        proxy: {
            target: 'localhost:3020',
        },
        open: false,
    });
}

async function startNodemon() {
    nodemon({
        ext: 'js',
        script: './dist/index.js',
    }).on('start', function() {
        serve();
    });
}

export const watchNode = parallel(
    startBrowerSync,
    series(
        clear,
        scss,
        script,
        typescript,
        parallel(img, fonts, liquid),
        startNodemon,
    )
)