// Test Suite
import { TitleBox } from './title-box.component';

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
