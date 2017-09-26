import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfoBoxComponent } from './info-box/info-box.component';
import { BookList } from './book-list/book-list.component';
import { BookCard } from './book-card/book-card.component';
import { BookShelf } from './services/book-shelf.service';
import { BookDetail } from './book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { BookWrapper } from './book-wrapper/book-wrapper.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, BookRoutingModule],
  declarations: [InfoBoxComponent, BookWrapper, BookList, BookCard, BookDetail],
  exports: [InfoBoxComponent],
  providers: [BookShelf]
})
export class BookModule {}
