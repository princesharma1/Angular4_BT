import { BtwapPage } from './app.po';

describe('btwap App', () => {
  let page: BtwapPage;

  beforeEach(() => {
    page = new BtwapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
