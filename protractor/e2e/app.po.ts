import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  // From detail
  selectFirstHero() {
    element(by.css('li')).click();
    element(by.cssContainingText('button',"View Details")).click()
  }

  deleteFirstHero() {
    element(by.css('.delete')).click()
  }

  enterNewHeroName(newName: string) {
    let input = element(by.tagName('input'));
    input.clear().then(() => {
      input.sendKeys(newName);
      element(by.buttonText('Save')).click();
      browser.waitForAngular();
    });
  }

  getFirstHeroName() {
    return element(by.css('li')).getText();
  }

  // From Dashboard
  searchForInput(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
  }

  navigateToSuggestion() {
    element(by.css('.search-result')).click();
  }

  getSuggestionDisplayed() {
    return element(by.css('.search-result')).getText();
  }

  getHeroeNameDisplayed() {
    return element(by.tagName('h2')).getText();
  }

  navigateToHero(hero:string) {
    element.all(by.css('.module.hero')).all(by.cssContainingText('h4',hero)).click()
  }
}
