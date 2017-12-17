'use strict';

Browser.localhost('www.chatroom.com', 3001);

describe('Users', function() {

  const browser = new Browser();

  before(function(done) {
    this.server = http.createServer(app).listen(3001);
    browser.visit('/users/new', done);
  });

  describe("Signing up", function() {
    it('expects to see Sign up', function() {
      expect(browser.html('body')).to.contain('<form');
    });

    // it('expects to see username field', function() {
    //   expect(browser.html('body')).to.contain('<input');
    //   expect(browser.html('#username')).to.contain('Username:');
    // });

    // it('expects to see Sign up', function() {
    //   expect(browser.html('body')).to.contain('<form');
    // });
  });

  after(function(done) {
    this.server.close();
    done();
  });

});
