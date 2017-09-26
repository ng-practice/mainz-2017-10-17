import {AfterViewInit, Component, OnInit} from '@angular/core';
import { BookFromApi } from '../../core/models';
import { BookShelf } from "../services/book-shelf.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookList implements OnInit, AfterViewInit {

  books: BookFromApi[];

  constructor(private bookShelf: BookShelf) { }

  ngOnInit() {
    this.bookShelf
      .all()
      .subscribe(books => this.books = books);
  }

  ngAfterViewInit(): void {
    console.info('[component:book-list] Template is rendered, all bindings are applied.', this);
  }
}
