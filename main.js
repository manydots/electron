// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,
  MenuItem
} = require('electron');
const path = require('path');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;


// 特点：
// 1、electron-builder 可以打包成msi、exe、dmg文件，macOS系统，只能打包dmg文件，window系统才能打包exe，msi文件；
// 2、几乎支持了所有平台的所有格式；
// 3、支持Auto Update；
// 4、支持CLI和JS API两种使用方式；

let template = [{
  label: '菜单1'
}, {
  label: '菜单2',
  submenu: [{
    label: '最小化',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: '关闭',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: '重新打开窗口',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function() {
      app.emit('activate')
    }
  }]
}, {
  label: '菜单3'
}];


function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  let menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  };
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.