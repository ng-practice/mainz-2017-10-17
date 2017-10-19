import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('main App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Deine Workshop Übungen');
  });

  it('should navigate to details', () => {
    page.navigateTo();
    page.clickFirstDetailLink();

    expect(browser.getCurrentUrl()).toMatch(/books\/.+$/);
  });
});
