import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetail } from './book-detail.component';

describe('BookDetail', () => {
  let component: BookDetail;
  let fixture: ComponentFixture<BookDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
