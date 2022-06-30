/*
 * @Author: Gzb
 * @Date: 2021-10-29 14:37:58
 * @LastEditTime : 2022-05-20 18:07:52
 * @LastEditors  : Shuai.Wang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath     : \ExcelChangeToTS-Electron-main\main.js
 */
const { app, BrowserWindow, Menu, dialog, globalShortcut, ipcMain, ipcRenderer } = require('electron');
const { fstat } = require('fs');
const ipc = require('electron').ipcMain;
const path = require('path');
const fs = require('fs');
const { resolve } = require('path');

var win = null;
function CreatWindow() {
    // Menu.setApplicationMenu(null);
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: false, // turn off remot
            contextIsolation: false,
            preload: [path.join(__dirname, 'src/uitls/changeScript.js'), path.join(__dirname, 'src/uitls/changeAll.js'), path.join(__dirname, 'src/uitls/changeMuch.js')]
        }
    })
    win.loadFile('dist/myapp/index.html');
    ipc.on('close-win', () => {
        win.close();
        app.quit();
    })
    ipc.on('hide-win', () => {
        win.minimize();
    })
}

app.on('ready', () => {
    CreatWindow();
    globalShortcut.register('CommandOrControl+Alt+F10', () => {
        win.webContents.openDevTools();
    })
});


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

/**主进程监听 */
ipc.on("finish-change", (event) => {
    dialog.showMessageBox({ message: "转换完成!" })
})


// ipc.on('open-the-file',(event)=>{
//     event.returnValue = dialog.showOpenDialogSync({properties: ['openFile', 'openDirectory', 'multiSelections']})
// })