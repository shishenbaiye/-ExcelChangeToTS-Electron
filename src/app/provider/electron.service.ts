/*
 * @Author: zebin.ge@appshahe.com
 * @Date: 2022-08-12 14:58:45
 * @LastEditors: zebin.ge@appshahe.com
 * @LastEditTime: 2022-08-17 15:24:03
 * @FilePath: \excelexporttots\src\app\provider\electron.service.ts
 * @Description: angular CLI 与electron交互的服务
 */
import { Injectable } from '@angular/core';
import { IpcRendererEvent } from 'electron';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
@Injectable()
export class ElectronService {

    ipcRenderer:  any;
    childProcess: any;
    fs: any;
    constructor() {
        if(this.isElectron()) {
            console.error('electron');
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }

    private isElectron = () => {
        return window && window.process && window.process.type;
    };

    send(key: string, value: any) {
        this.ipcRenderer.send(key, value);
    }

    on(key: string, callback:(event: IpcRendererEvent, ...args: any[]) => void) {
        this.ipcRenderer.on(key, (event: Electron.IpcRendererEvent, arg: any) => {
            callback(event,arg);
        });
    }
    onUpdate(callback:(message:string,data:any) => void) {
        this.on('message', (event: Electron.IpcRendererEvent, arg: any) => {
            callback(arg.message,arg.data);
        });
    }
}