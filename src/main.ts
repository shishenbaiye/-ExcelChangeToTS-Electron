/*
 * @Author: zebin.ge@appshahe.com
 * @Date: 2022-08-10 19:06:28
 * @LastEditors: zebin.ge@appshahe.com
 * @LastEditTime: 2022-08-12 16:21:44
 * @FilePath: \excelexporttots\src\main.ts
 * @Description: 
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
