import { Component, Input } from '@angular/core';

import { Book } from '../../core/models';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCard {
  @Input() book: Book;
}
