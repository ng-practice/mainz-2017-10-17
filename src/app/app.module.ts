import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BookModule} from "./book/book.module";
import { MouseCursorBox } from './mouse-cursor-box/mouse-cursor-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseCursorBox
  ],
  imports: [
    BookModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
