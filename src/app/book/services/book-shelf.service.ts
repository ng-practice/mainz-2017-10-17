import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { BookFromApi, Book } from '../../core/models';

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookShelf {
  endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http
      .get<BookFromApi[]>(`${this.endpoint}/books`)
      .map(this.mapBooks)
      .catch(response =>
        Observable.throw(
          { message: response.statusText }
        ));
  }

  private mapBooks(books: BookFromApi[]) {
    if (!books) { return; }

    return books.map(book => new Book(book));
  }

  single(isbn: string): Observable<Book> {
    return this.http.get(`${this.endpoint}/books/${isbn}`);
  }
}
