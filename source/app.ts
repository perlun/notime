import { remote } from 'electron';
import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  public pages = [
    {
      title: "page1",
      viewModel: "./pages/example-page",
      model: "hello"
    },
    {
      title: "page2",
      viewModel: "./pages/example-page",
      model: "world"
    }
  ]

  open() {
    remote.dialog.showMessageBox({
      message: 'test',
      buttons: ["OK"]
    });
  }
}
