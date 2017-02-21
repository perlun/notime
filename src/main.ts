import { Aurelia } from 'aurelia-framework'
import { ValidationMessageProvider } from 'aurelia-validation';
import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
// Promise.config({
// 	warnings: {
// 		wForgottenReturn: false
// 	}
// });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('elements');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use.plugin('aurelia-validation');

  ValidationMessageProvider.prototype.getMessage = function(key) {
    const translation = `errorMessages.${key}`;
    return this.parser.parseMessage(translation);
  };

  aurelia.start().then(() => { return aurelia.setRoot() });
}
