import * as changedInPlace from 'gulp-changed-in-place';
import * as eventStream from 'event-stream';
import * as gulp from 'gulp';
import * as notify from 'gulp-notify';
import * as plumber from 'gulp-plumber';
import * as project from '../aurelia.json';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';

var typescriptCompiler = typescriptCompiler || null;

function buildTypeScript() {
  if(!typescriptCompiler) {
    typescriptCompiler = ts.createProject('tsconfig.json', {
      "typescript": require('typescript')
    });
  }

  let dts = gulp.src(project.transpiler.dtsSource);

  let src = gulp.src('electron_app_src/index.ts')
    .pipe(changedInPlace({ firstPass: true }));

  return eventStream.merge(dts, src)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(typescriptCompiler())
    .pipe(gulp.dest('electron_output'))
}

export default gulp.series(
  buildTypeScript
);
