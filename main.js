/*
 * @Author: Gzb
 * @Date: 2021-10-29 14:37:58
 * @LastEditTime: 2021-11-22 13:33:28
 * @LastEditors:Gzb
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ExcelChangeToTS-Electron-main\main.js
 */
const {app,BrowserWindow,Menu, dialog} = require('electron');
const ipc = require('electron').ipcMain;
const path = require('path');

function CreatWindow(){
    // Menu.setApplicationMenu(null);
    const win = new BrowserWindow({
        width: 800,
        height: 500,
        frame:false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: false, // turn off remot
            contextIsolation: false,
            preload: [path.join(__dirname, 'src/uitls/changeScript.js'),path.join(__dirname, 'src/uitls/changeAll.js')]
        }
    })
    win.webContents.openDevTools();
    win.loadFile('dist/myapp/index.html');
    ipc.on('close-win',()=>{
        win.close();
        app.quit();
    })
    ipc.on('hide-win',()=>{
        win.minimize();
    })
}

app.on('ready', CreatWindow);



app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

/**主进程监听 */
ipc.on("finish-change",(event)=>{
    dialog.showMessageBox({message:"转换完成!"})
})


// ipc.on('open-the-file',(event)=>{
//     event.returnValue = dialog.showOpenDialogSync({properties: ['openFile', 'openDirectory', 'multiSelections']})
// })