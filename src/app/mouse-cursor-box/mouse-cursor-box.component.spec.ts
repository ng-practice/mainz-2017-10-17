import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCursorBox } from './mouse-cursor-box.component';

describe('MouseCursorBox', () => {
  let component: MouseCursorBox;
  let fixture: ComponentFixture<MouseCursorBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseCursorBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCursorBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
