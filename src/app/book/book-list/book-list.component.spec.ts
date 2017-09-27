import { fakeAsync, tick } from '@angular/core/testing';
import { BookList } from './book-list.component';
import { BookShelf } from '../services/book-shelf.service';

import { of } from 'rxjs/observable/of';

describe('Component BookList', () => {
  describe('When the list of books is going to be initialized', () => {
    let bookList: BookList;
    let service: jasmine.SpyObj<BookShelf>;

    beforeEach(() => {
      // create mock for book service
      service = jasmine.createSpyObj('bookShelf', ['all']);
      service.all.and.returnValue(of([{ title: 'The Willpower Instinct' }]));

      bookList = new BookList(service);
    });

    // indicate that we have an asyncronous test
    it('all books are loaded', fakeAsync(() => {
      // execute asyncronous call
      bookList.ngOnInit();

      // resolves all asyncronous operations
      tick();

      // toBe -> checks if expected === actual
      expect(bookList.books.length).toBe(1);

      expect(bookList.books[0].title).toBe('The Willpower Instinct');

      // verify type of retrieved data
      // expect(typeof bookList.books[0]).toBe('Book');
    }));
  });
});
