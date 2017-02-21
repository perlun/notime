// Can't easily be rewritten in TypeScript, since this file is loaded before the Aurelia build pipeline has had a change to transpile .ts files to .js.

define('electron', ['exports'], function (exports) {
  if (window.nodeRequire) {
    const electron = window.nodeRequire('electron');

    exports['default'] = electron;

    for (let key in electron) {
      exports[key] = electron[key];
    }
  }
});
