import {app, Menu, MenuItemConstructorOptions } from 'electron';

const isMac: boolean = process.platform === 'darwin';
console.log('is mac', isMac);
console.log(app.getName());
const mainMenuTemplate: MenuItemConstructorOptions[]  = [
  {
    label: app.getName(),
    submenu: [

  ]},
  {
    label: '编辑',
    submenu: [
      { label: '撤销', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
      { label: '重做', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
      { type: 'separator' },
      { label: '剪贴', accelerator: 'CmdOrCtrl+X', role: 'cut' },
      { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
      { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' },
      { label: '全选', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      { label: '开发者工具', accelerator: 'Shift+CmdOrCtrl+I', role: 'toggleDevTools' },
    ]},
  {
    label: '窗口',
    submenu: [
      { label: '重载', accelerator: 'Cmd+R', role: 'reload' },
      { label: '最小化', accelerator: 'Cmd+M', role: 'minimize' },
      { label: '关闭', accelerator: 'Cmd+M', role: 'close' },
      { type: 'separator' },
      { label: '吱声', role: 'about' }
    ]}
];

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

export { mainMenu };
