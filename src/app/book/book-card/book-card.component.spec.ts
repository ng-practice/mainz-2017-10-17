import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCard } from './book-row.component';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
