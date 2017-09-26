import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfoBoxComponent } from './info-box/info-box.component';
import { BookList } from './book-list/book-list.component';
import { BookCard } from './book-card/book-card.component';
import { BookShelf } from './services/book-shelf.service';
import { BookDetail } from './book-detail/book-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [InfoBoxComponent, BookList, BookCard, BookDetail],
  exports: [InfoBoxComponent, BookList],
  providers: [BookShelf]
})
export class BookModule {}
