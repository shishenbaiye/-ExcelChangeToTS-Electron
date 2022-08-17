/*
 * @Author: zebin.ge@appshahe.com
 * @Date: 2022-08-10 19:06:28
 * @LastEditors: zebin.ge@appshahe.com
 * @LastEditTime: 2022-08-17 14:50:54
 * @FilePath: \excelexporttots\src\app\app.module.ts
 * @Description: 
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HttpClientModule} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { ElectronService } from "./provider/electron.service"
import { DialogComponent } from './dialog/dialog.component';
import { UpdateDialogComponent } from './updateDialog/updateDialog.component';
@NgModule({
  declarations: [
    TestComponent,
    DialogComponent,
    UpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [ElectronService],
  bootstrap: [TestComponent]
})
export class AppModule { }
