import { Component, OnInit } from '@angular/core';
import { Book } from '../../core/models';
import { BookShelf } from "../services/book-shelf.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookList implements OnInit {
  books: Book[];

  constructor(private bookShelf: BookShelf) { }

  ngOnInit() {
    this.bookShelf
      .all()
      .subscribe(books => this.books = books);
  }
}
