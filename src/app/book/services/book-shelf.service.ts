import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Book } from '../../core/models';

@Injectable()
export class BookShelf {
  endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http.get(`${this.endpoint}/books`);
  }
}
