import { remote } from 'electron';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'noTime';
    config.map([
      { route: '',           moduleId: 'pages/time_entry/time_entry', title: 'noTime' , name: 'time_entry' },
      { route: 'login',      moduleId: 'pages/login/login',           title: 'Login', },
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
