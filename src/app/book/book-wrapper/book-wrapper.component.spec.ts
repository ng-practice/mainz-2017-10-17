import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWrapper } from './book-wrapper.component';

describe('BookWrapper', () => {
  let component: BookWrapper;
  let fixture: ComponentFixture<BookWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookWrapper ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
