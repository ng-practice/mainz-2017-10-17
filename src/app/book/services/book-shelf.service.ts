import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { BookFromApi, Book } from '../../core/models';

import 'rxjs/add/operator/map';

@Injectable()
export class BookShelf {
  endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http
      .get<BookFromApi[]>(`${this.endpoint}/books`)
      .map(this.mapBooks);
  }

  private mapBooks(books: BookFromApi[]) {
    return books.map(book => new Book(book));
  }

  single(isbn: string): Observable<Book> {
    return this.http.get(`${this.endpoint}/books/${isbn}`);
  }
}
