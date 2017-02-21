import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

function prepareFontAwesome() {
  const source = 'node_modules/font-awesome';

  const taskCss = gulp.src(`${source}/css/font-awesome.min.css`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/css`));

  const taskFonts = gulp.src(`${source}/fonts/*`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/fonts`));

  return merge(taskCss, taskFonts);
}

function prepareOpenSans() {
  const source = 'node_modules/npm-font-open-sans';

  const taskCss = gulp.src(`${source}/open-sans.css`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/css`));

  // The target path here is arguably stupid. The .css file expects it this way. I tried to get this working with the SASS
  // stylesheet instead, but I couldn't easily get it working and this was considered good enough for now.
  return gulp.src(`${source}/fonts/**/*`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/css/fonts`));
}

export default gulp.series(
  prepareFontAwesome,
  prepareOpenSans
);
