import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-row',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCard {
  @Input() book;
}
