import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookList } from './book-list.component';

describe('BookList', () => {
  let component: BookList;
  let fixture: ComponentFixture<BookList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
