import { BrowserWindow } from 'electron';

export default class MainWindow {
  mainWindow: BrowserWindow;
  constructor() {
    this.createMainWindow();
  }

  createMainWindow() {
    // @ts-ignore
    this.mainWindow = new BrowserWindow({
      height: 700,
      width: 960,
      show: false,
      movable: true,
      titleBarStyle: 'hidden'
    });
  }

  loadURL(url: string) {
    this.mainWindow.loadURL(url);
    // this.mainWindow.webContents.openDevTools();
  }

  openDevTools() {
    this.mainWindow.webContents.openDevTools();
  }

  show() {
    this.mainWindow.show();
  }
}
