import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('title-box h3')).getText();
  }

  clickFirstDetailLink() {
    return element(by.css('book-card a')).click();
  }
}
