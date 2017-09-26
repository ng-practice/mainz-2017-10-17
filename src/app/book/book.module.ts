import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfoBoxComponent } from './info-box/info-box.component';
import { BookList } from './book-list/book-list.component';
import { BookCard } from './book-card/book-row.component';
import { BookShelf } from './services/book-shelf.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [InfoBoxComponent, BookList, BookCard],
  exports: [InfoBoxComponent, BookList],
  providers: [BookShelf]
})
export class BookModule {}
