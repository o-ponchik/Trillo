// list dependencies
const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");

// create functions

// scss
function compilescss() {
  return src("sass/*.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(minify())
    .pipe(dest("css"));
}

// create watchtask

function watchTask() {
  watch("sass/*.scss", compilescss);
}

// default gulp

exports.default = series(compilescss, watchTask);
