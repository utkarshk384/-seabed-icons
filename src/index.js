const { src, dest } = require("gulp");
const svgmin = require("gulp-svgmin");

const svgRawPaths = [
  "export/duotone/*.svg",
  "export/solid/*.svg",
  "export/outline/*.svg",
];

const svgPaths = ["icons/duotone", "icons/solid", "icons/outline"];

src(svgRawPaths[0]).pipe(svgmin()).pipe(dest(svgPaths[0]));
src(svgRawPaths[1]).pipe(svgmin()).pipe(dest(svgPaths[1]));
src(svgRawPaths[2]).pipe(svgmin()).pipe(dest(svgPaths[2]));
