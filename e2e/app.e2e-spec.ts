import { A2dynPage } from './app.po';

describe('a2dyn App', function() {
  let page: A2dynPage;

  beforeEach(() => {
    page = new A2dynPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
