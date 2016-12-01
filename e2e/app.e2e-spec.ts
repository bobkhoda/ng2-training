import { BobPage } from './app.po';

describe('bob App', function() {
  let page: BobPage;

  beforeEach(() => {
    page = new BobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
