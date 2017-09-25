import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BookModule} from './book/book.module';
import { MouseCursorBox } from './mouse-cursor-box/mouse-cursor-box.component';
import { TitleBox } from './title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseCursorBox,
    TitleBox
  ],
  imports: [
    BookModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
