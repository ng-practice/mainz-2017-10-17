import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookList } from './book-list/book-list.component';
import { BookCard } from './book-card/book-row.component';

import { BookShelf } from "./services/book-shelf.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoBoxComponent, BookList, BookCard],
  exports: [InfoBoxComponent, BookList],
  providers: [BookShelf]
})
export class BookModule { }
