var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin");
var connect=require("gulp-connect");
var rename=require("gulp-rename");
var scss=require("gulp-sass");
var minifyCss=require("gulp-minify-css");

// 管理html
gulp.task("copyh",function(){
    gulp.src("./*.html")
    .pipe(htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
    })
    )
    .pipe(gulp.dest("./dist/"))
    .pipe(connect.reload());
})
// 管理图片
gulp.task("images",function(){
    gulp.src("./images/*.{jpg,png}")
    .pipe(gulp.dest("./dist/images/"))
    .pipe(connect.reload())
});
// 管理json数据
gulp.task("jsond",function(){
    gulp.src("./json/*.json")
    .pipe(gulp.dest("./dist/data/"))
    .pipe(connect.reload())
})
// 管理js代码
gulp.task("jsp",function(){
    gulp.src("./js/*.js")
    .pipe(gulp.dest("./dist/js"))
    .pipe(connect.reload())
})

gulp.task("css", function () {
    gulp.src("./scss/index.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("index.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("css-s", function () {
    gulp.src("./scss/style.scss")
      .pipe(scss())
      .pipe(minifyCss())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("sinup", function () {
    gulp.src("./scss/sinup.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("sinup.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("sinin", function () {
    gulp.src("./scss/sinin.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("sinin.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("product", function () {
    gulp.src("./scss/product.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("product.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("details", function () {
    gulp.src("./scss/details.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("details.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });
  gulp.task("shopt", function () {
    gulp.src("./scss/shopt.scss")
      .pipe(scss())
      .pipe(gulp.dest("./dist/css"))
      .pipe(minifyCss())
      .pipe(rename("shopt.min.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(connect.reload());
  });


gulp.task("build",["copyh","images","jsond","jsp","css","sinup","sinin","product","details","shopt"],function(){
    console.log('建立')
})
// 建立服务器，添加监听
gulp.task("watch",function(){
    gulp.watch("./*.html",["copyh"]);
    gulp.watch("./images/*.{jpg,png}",["images"]);
    gulp.watch("./json/*.json",["jsond"]);
    gulp.watch("./js/*.js",["jsp"]);
    gulp.watch("./scss/index.scss",["css"]);
    gulp.watch("./scss/sinup.scss",["sinup"]);
    gulp.watch("./scss/sinin.scss",["sinin"]);
    gulp.watch("./scss/product.scss",["product"]);
    gulp.watch("./scss/details.scss",["details"]);
    gulp.watch("./scss/shopt.scss",["shopt"]);
})
gulp.task("server",function(){
    connect.server({
        root:"./dist",
        port:8010,
        livereload:true
    })
})
gulp.task("default",["build","watch","server"])