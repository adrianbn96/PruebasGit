const gulp=require("gulp")
const sass=require("gulp-sass")(require("sass"))


function compsass(){
    return gulp.src("./src/scss/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
}
function compilarSASSAUTO(){
    gulp.watch("./src/scss/**/*.scss",compsass)
}

exports.compilarSASS=compsass;
exports.compilarSASSAUTO=compilarSASSAUTO;

