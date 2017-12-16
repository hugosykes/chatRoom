'use strict';

Browser.localhost('www.chatroom.com', 3001);

describe('Setup', function() {

  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/', done);
  });

  describe("Visiting root directory", function() {
    it('expects url to be correct', function() {
      expect(browser.url).to.equal('http://www.chatroom.com/');
    });

    it('expects to see welcome message', function() {
      expect(browser.html('body')).to.contain('Welcome to ChatRoom!');
    });
  });

  after(function(done) {
    this.server.close();
    done();
  });

});
