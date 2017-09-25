import { TestBed, inject } from '@angular/core/testing';

import { BookShelf } from './book-shelf.service';

describe('BookShelf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookShelf]
    });
  });

  it('should be created', inject([BookShelf], (service: BookShelf) => {
    expect(service).toBeTruthy();
  }));
});
