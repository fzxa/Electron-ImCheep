// import { app, Menu } from 'electron';
// import path from 'path';
// import url from 'url';
// import MainWindow from './windows/mainWindow';
// import { mainMenu } from './menu';
// import TrayCreator from './tray';
//
// const isDev = process.env.NODE_ENV === 'development';
// const port = parseInt(process.env.PORT!, 10) || 3000;
// const devUrl = `http://localhost:${port}/`;
//
// // https://github.com/jarek-foksa/xel/issues/23
// const prodUrl = url.format({
//   pathname: path.resolve(__dirname, 'build/index.html'),
//   protocol: 'file:',
//   slashes: true
// });
// const indexUrl = isDev ? devUrl : prodUrl;
//
// class Electron {
//   mainWindowInstance: MainWindow;
//
//   init() {
//     this.initApp();
//   }
//
//   initApp() {
//     app.on('ready', async () => {
//       this.createMainWindow();
//       this.mainWindowInstance.loadURL(indexUrl);
//       Menu.setApplicationMenu(mainMenu);
//       const appIconPath = path.join(__dirname, './assets/electron.png');
//       const tray = new TrayCreator(appIconPath);
//       tray.initTray();
//       if (isDev) {
//         this.mainWindowInstance.openDevTools();
//         await this.installExtensions();
//       }
//     });
//     app.on('window-all-closed', () => {
//       app.quit();
//     });
//   }
//
//   createMainWindow() {
//     this.mainWindowInstance = new MainWindow();
//     this.mainWindowInstance.show();
//   }
//
//   installExtensions = async () => {
//     const { default: installer, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
//
//     installer([REACT_DEVELOPER_TOOLS])
//     .then((name: string) => console.log(`Added Extension:  ${name}`))
//     .catch((err: Error) => console.log('An error occurred: ', err));
//   }
// }

// new Electron().init();

import { dialog } from 'electron';
import { setUnexpectedErrorHandler } from "../../base/common/errors";

// class ExpectedError extends Error {
//   readonly isExpected = true;
// }



class CodeMain {

    main(): void {
        setUnexpectedErrorHandler(err => console.error(err));

        // Parse arguments
        let args: object;
        args = {};
        // Launch
        this.startup(args);
    }

    private async startup(args: object): Promise<void> {
        try {

        }catch (e) {
            this.showStartupWarningDialog(
                'A second instance of {0} is already running as administrator',
                'Please close the other instance and try again.'
            )
        }
    }

    private showStartupWarningDialog(message: string, detail: string): void {
        dialog.showMessageBox({
            title: '', //
            type: 'warning',
            buttons: ['close'],
            message,
            detail,
            noLink: true
        });
    }
}

// Main Startup
const code = new CodeMain();
code.main();
