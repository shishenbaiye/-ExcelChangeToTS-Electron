/*
 * @Author: zebin.ge@appshahe.com
 * @Date: 2022-07-08 15:33:53
 * @LastEditors: zebin.ge@appshahe.com
 * @LastEditTime: 2022-08-17 14:59:01
 * @FilePath: \excelexporttots\src\app\dialog\dialog.component.ts
 * @Description: 
 */
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChangeDetectorRef } from "@angular/core";
@Component({
    templateUrl: './dialog.component.html',
})
export class DialogComponent{
    
    public name:string = "";
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        private ref:ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data:{name:string},
    ) {
    
    }
  
    onNoClick(): void {
        this.name = "";
        console.error("onNoClick");
        
        // this.ref.markForCheck();
        // this.ref.detectChanges();
        this.dialogRef.close(false);
    }
    okClick(){
        this.dialogRef.close(true);    
    }
    setname(name:string){
        this.name = name;
        // this.ref.markForCheck();
        // this.ref.detectChanges();
    }
}
