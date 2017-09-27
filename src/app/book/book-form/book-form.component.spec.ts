import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookForm } from './book-form.component';

describe('BookForm', () => {
  let component: BookForm;
  let fixture: ComponentFixture<BookForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
