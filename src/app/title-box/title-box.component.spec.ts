import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitleBox } from './title-box.component';

// Test Suite
describe('[Unit] Component TitleBox', () => {
  describe('When title is clicked', () => {
    let titleBox: TitleBox;
    let titleClicked: jasmine.Spy;

    // Test Setup
    beforeEach(() => {
      titleBox = new TitleBox();
      titleClicked = spyOn(titleBox.titleClicked, 'emit');
    });

    // Test Case
    it('should trigger event "titleClicked"', () => {
      titleBox.triggerGreet();

      // assertion
      expect(titleClicked).toHaveBeenCalled();
    });
  });
});

describe('[Shallow] Component TitleBox', () => {
  let fixture: ComponentFixture<TitleBox>;
  let titleBox: TitleBox;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBox]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleBox);
    titleBox = fixture.componentInstance;
  });

  describe('When the title is clicked', () => {
    let titleClicked: jasmine.Spy;

    beforeEach(() => {
      titleClicked = spyOn(titleBox.titleClicked, 'emit');

      // query template for h3
      const title = fixture.debugElement.query(By.css('h3'));
      (title.nativeElement as HTMLTitleElement).click();

      // trigger change detection
      fixture.detectChanges();
    });

    it('the event "titleClicked" is raised', () => {
      expect(titleClicked).toHaveBeenCalledWith('Hey there! I wish you a pleasent and sunny day.');
    });
  });
});
