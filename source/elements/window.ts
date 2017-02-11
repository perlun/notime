import { remote } from 'electron';

export class Window {
  title:string = "App";

  constructor() {
  }

  tryCloseWindow() {
    this.closeWindow();
  }

  closeWindow() {
    var window: Electron.BrowserWindow = remote.getCurrentWindow();

    window.close();
  }

  showHelp() {
    remote.getCurrentWindow().webContents.openDevTools();
  }
}
