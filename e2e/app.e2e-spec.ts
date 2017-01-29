import { PwnedApiPage } from './app.po';

describe('pwned-api App', function() {
  let page: PwnedApiPage;

  beforeEach(() => {
    page = new PwnedApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
