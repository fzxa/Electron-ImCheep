import { Menu, MenuItemConstructorOptions } from 'electron';

const mainMenuTemplate: MenuItemConstructorOptions[]  = [
  {
    label: 'Edit',
    submenu: [
      { label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
      { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
      { type: 'separator' },
      { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
      { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
      { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
      { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      { label: 'Developers Tools', accelerator: 'Shift+CmdOrCtrl+I /', role: 'Dev Tools' },
  ]}
];

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

export { mainMenu };
