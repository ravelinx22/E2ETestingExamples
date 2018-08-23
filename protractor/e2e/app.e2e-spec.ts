import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  // New
  it('should search for hero', () => {
    page.navigateTo();
    page.searchForInput("Mr. Nice");
    expect(page.getSuggestionDisplayed()).toEqual("Mr. Nice")
  });

  it('navigate to hero from search', () => {
    page.navigateTo();
    page.searchForInput("Mr. Nice");
    page.navigateToSuggestion()
    expect(page.getHeroeNameDisplayed()).toEqual("Mr. Nice details!")
  });

  it('should navigate to a hero page', () => {
    page.navigateTo();
    page.navigateToHero("Mr. Nice")
    expect(page.getHeroeNameDisplayed()).toEqual("Mr. Nice details!")
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should create new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should navigate to hero', () => {
    page.selectFirstHero()
    expect(page.getHeroeNameDisplayed()).toEqual("Zero details!")
  })

  it('should delete hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteFirstHero()
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  })

  it('should edit hero', () => {
    expect(page.getFirstHeroName()).not.toContain("Test");
    page.selectFirstHero()
    page.enterNewHeroName("Test")
    expect(page.getFirstHeroName()).toContain("Test");
  })
});
