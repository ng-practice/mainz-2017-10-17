import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookShelf } from '../services/book-shelf.service';
import {Book} from '../../core/models/book';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetail implements OnInit {
  book: Book;
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookShelf: BookShelf) {}

  ngOnInit() {
    this.route.params
      .map(params => params.isbn)
      .switchMap(isbn => this.bookShelf.single(isbn))
      .subscribe(book => (this.book = book));

    // or

    this.book$ = this.route
      .params
      .switchMap(params => this.bookShelf.single(params.isbn));
  }
}
