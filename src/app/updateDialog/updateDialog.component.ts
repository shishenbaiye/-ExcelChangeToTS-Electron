/*
 * @Author: zebin.ge@appshahe.com
 * @Date: 2022-07-08 15:33:53
 * @LastEditors: zebin.ge@appshahe.com
 * @LastEditTime: 2022-08-17 15:36:01
 * @FilePath: \excelexporttots\src\app\updateDialog\updateDialog.component.ts
 * @Description: 
 */
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectorRef } from "@angular/core";
const baseApi = "/api/v1/game";
@Component({
    templateUrl: './UpdateDialog.component.html',
})
export class UpdateDialogComponent {
    
    public name:string = "正在下载更新...";
    public value:number = 0;
    private _headers: HttpHeaders =
    new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Bearer my-token'
    });
    constructor(
        public dialogRef: MatDialogRef<UpdateDialogComponent>,
        private ref:ChangeDetectorRef
        // @Inject(MAT_DIALOG_DATA) public data: {name:string, animal:string},
    ) {}
}
