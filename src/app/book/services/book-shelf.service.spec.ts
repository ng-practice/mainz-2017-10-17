import { fakeAsync, inject, TestBed } from '@angular/core/testing';

import { BookShelf } from './book-shelf.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('[HttpMock] Service:BookShelf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookShelf],
      imports: [HttpClientTestingModule]
    });
  });

  describe('When the API can be accessed', () => {
    it(
      'books are provided',
      inject(
        [BookShelf, HttpTestingController],
        fakeAsync((service: BookShelf, httpMock: HttpTestingController) => {
          service
            .all()
            .subscribe(books => expect(books).toBeDefined());

          const request = httpMock.expectOne('http://localhost:4730/books');

          request.flush([{title: 'Meine Gespräche mit Gott'}]);
        })));
  });

  describe('When an error occurs while loading books', () => {
    // Without this type TypeScript-Compiler complains.
    type Deps = [typeof BookShelf, typeof HttpTestingController];

    const deps: Deps = [BookShelf, HttpTestingController];

    it('the error message "Could not load books" should be provided',
      use(deps, (service: BookShelf, httpMock: HttpTestingController) => {

        service
          .all()
          .subscribe(
            () => {},
            err => expect(err.message).toBe('Could not load books')
          );

        const request = httpMock
          .expectOne('http://localhost:4730/books');

        request.error(new ErrorEvent('not found'), { statusText: 'Could not load books'});
        }));
  });
});

/**
 * TODO: Not yet ready for reuse
 * @param deps Dependencies that should be injected by test moduke
 * @param test Callback providing instantuated dependencies
 * @returns easy to use function setting up all given test dependencies
 */
function use(
  deps: [typeof BookShelf, typeof HttpTestingController],
  test: (b: BookShelf, h: HttpTestingController ) => void
) {
  return inject(deps, fakeAsync((s, h) => test(s, h)));
}
