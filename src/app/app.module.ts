import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HttpClientModule} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class AppModule { }
