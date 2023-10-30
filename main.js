/*
 * @Author: Gzb
 * @Date: 2021-10-29 14:37:58
 * @LastEditTime: 2022-08-17 16:25:39
 * @LastEditors: zebin.ge@appshahe.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \excelexporttots\main.js
 */
const { app, BrowserWindow, Menu, dialog, globalShortcut, ipcMain, ipcRenderer } = require('electron');
const { fstat } = require('fs');
const ipc = require('electron').ipcMain;
const path = require('path');
const fs = require('fs');
const autoUpdater = require("electron-updater").autoUpdater;
const { resolve } = require('path');

Object.defineProperty(app, 'isPackaged', { get() { return true; }})

var win = null;
const feedUrl = "http://172.16.32.143/file"
function CreatWindow() {
    // Menu.setApplicationMenu(null);
    win = new BrowserWindow({
        width: 800,
        height: 700,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: false, // turn off remot
            contextIsolation: false,
            preload: [
                path.join(__dirname, 'src/uitls/UIExport.js'), 
                path.join(__dirname, 'src/uitls/changeScript.js'), 
                path.join(__dirname, 'src/uitls/changeAll.js'), 
                path.join(__dirname, 'src/uitls/changeMuch.js'),
                path.join(__dirname, 'src/uitls/changeMuch026.js'),
                path.join(__dirname, 'src/uitls/update.js'),
            ]
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
    // ipc.on('export-ui', (event, path) => {
    //     startExport(path)
    // })
}

app.on('ready', () => {
    CreatWindow();
    globalShortcut.register('CommandOrControl+Alt+F10', () => {
        win.webContents.openDevTools();
    })
    // 检查更新
    setTimeout(() => {
        checkForUpdates();
        // 30分钟检查一次更新
        setInterval(() => {
            checkForUpdates();
        }, 1000 * 60 * 30);
    },5000);
});


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

/**主进程监听 */
ipc.on("finish-change", (event) => {
    dialog.showMessageBox({ message: "转换完成!" })
})

//#region 检查更新
//发给渲染进程监听
function sendUpdateMessage(message, data) {
    win.webContents.send("message", { message, data });
}
// 检查更新
function checkForUpdates() {
    console.log(`checkForUpdates`);
    // 执行检查更新
    autoUpdater.checkForUpdates();
}
autoUpdater.setFeedURL(feedUrl);
autoUpdater.autoInstallOnAppQuit = false;
autoUpdater.autoDownload = false;
autoUpdater.on("error", function(message) {
  sendUpdateMessage("error", message);
});
autoUpdater.on("checking-for-update", function(message) {
  sendUpdateMessage("checking-for-update", message);
});
autoUpdater.on("update-available", function(message) {
  sendUpdateMessage("update-available", message);
});
autoUpdater.on("update-not-available", function(message) {
  sendUpdateMessage("update-not-available", message);
});

// 更新下载进度事件
autoUpdater.on("download-progress", function(progressObj) {
  sendUpdateMessage("download-Progress", progressObj.percent.toFixed(1));
});
// 下载完成事件
autoUpdater.on("update-downloaded", function(event) {
    sendUpdateMessage("update-downloaded", event);
});
ipcMain.on("updateNow",(e, arg) => {
    // 停止当前程序并安装
    autoUpdater.downloadUpdate();

});
ipcMain.on("quitAndInstall", (e, arg) => {
    autoUpdater.quitAndInstall(true,true);
})
ipcMain.on(`clickUpdate`,(e, arg) =>{
    checkForUpdates();
})
//#endregion

// ipc.on('open-the-file',(event)=>{
//     event.returnValue = dialog.showOpenDialogSync({properties: ['openFile', 'openDirectory', 'multiSelections']})
// })