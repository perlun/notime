import { remote } from 'electron';
import { NavigationInstruction, Next, PipelineStep, Router, Redirect, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'noTime';
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      { route: '',           moduleId: 'pages/time_entry/time_entry', title: 'noTime' ,    name: 'time_entry' },
      { route: 'login',      moduleId: 'pages/login/login',           title: 'Login',      name: 'login', settings: { authentication: false } },
      { route: 'estimation', moduleId: 'pages/estimation/estimation', title: 'Estimation', name: 'estimation' }
    ]);

    this.router = router;
  }

  open() {
    remote.dialog.showMessageBox({
      message: 'test',
      buttons: ["OK"]
    });
  }
}

class AuthorizeStep implements PipelineStep {
  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    // Okay, I know, I know. Authentication and authorization are two different things. But I didn't know of a better way to plug in to Aurelias pipeline to enforce authentication than this.
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.authentication !== false)) {
      return next.cancel(new Redirect('login'));
    }

    return next();
  }
}
