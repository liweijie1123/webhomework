const { src, dest, watch, series, parallel} = require('gulp');
const gulp = require('gulp');
const uglify = require('gulp-uglify')
const clean  = require('gulp-clean')
const merge  = require('merge-stream')
const less   = require('gulp-less');
const cssmin = require('gulp-minify-css')
const tingpng = require('gulp-tinypng')
const jsonmin = require('gulp-jsonminify')
const htmlmin = require('gulp-htmlmin')
 
const minfy=() => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
}

const files = {
  jsPath: 'src/sys/js/*.js'
}

const cleanTask =()=> {
  return src('dist/.', { read: false })
    .pipe(clean())
}

const jsTask =()=> {
  return merge(['lib/jquery','lib/jsrender','sys/js'].map(item=>{
    return src(`src/${item}/*.js`)
               .pipe(uglify())
               .pipe(dest(`dist/${item}/`))
  }))
}

const cssTask =()=> {
  return merge(['lib/jquery','sys/css'].map(item=>{
    return src([`src/${item}/*.less`,`src/${item}/*.css`])
      .pipe(less())
      .pipe(cssmin())
      .pipe(dest(`dist/${item}/`))
  }))
}

const jsonTask =()=> {
  return src('src/data/*.json')
             .pipe(jsonmin())
             .pipe(dest('dist/data'))
}

const imgTask =()=> {
  return src('src/img/*.jpg')
      .pipe(tingpng('CqxyKzqBgv4GxHZD2nlVdVQhy9vt0zNF'))
      .pipe(dest('dist/img'))
}
exports.default = series(
  cleanTask,
  parallel(
    minfy,
    jsTask,
    cssTask,
    jsonTask,
    imgTask
  )
)
