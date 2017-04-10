import { MyfirstassignPage } from './app.po';

describe('myfirstassign App', function() {
  let page: MyfirstassignPage;

  beforeEach(() => {
    page = new MyfirstassignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
