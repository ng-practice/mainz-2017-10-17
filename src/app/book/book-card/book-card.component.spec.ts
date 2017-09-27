import {
  ComponentFixture, fakeAsync, TestBed,
  tick
} from '@angular/core/testing';
import { BookCard } from './book-card.component';
import { BookDetail } from '../book-detail/book-detail.component';
import { BookShelf } from '../services/book-shelf.service';

import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('Component: BookCard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCard, BookDetail],
      providers: [{
        provide: BookShelf,
        useFactory() { return { single: () => of({}) }; }
      }],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'books/:isbn', component: BookDetail }
        ])
      ]
    }).compileComponents();
  });

  describe('When the link "Details" is clicked', () => {
    let fixture: ComponentFixture<BookCard>;
    let bookCard: BookCard;
    let detailLink: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(BookCard);

      bookCard = fixture.componentInstance;

      bookCard.book = { isbn: '1-2-3' } as any;

      fixture.detectChanges();
    });

    it('the details of the book are shown', fakeAsync(() => {
      detailLink = fixture.debugElement.query(By.css('[href]'));

      detailLink.nativeElement.click();

      tick();

      expect(TestBed.get(Location).path()).toBe('/books/1-2-3');
    }));
  });
});
