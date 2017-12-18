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
      expect(browser.html('#sign-up-form')).to.contain('<form');
      expect(browser.html('#sign-up-form')).to.contain('Sign up');
    });

    it('expects to see username field', function() {
      expect(browser.html('#sign-up-form')).to.contain('<input');
      expect(browser.html('#sign-up-form')).to.contain('Username:');
    });

    it('expects to see password and password confirmation fields', function() {
      expect(browser.html('#sign-up-form')).to.contain('Password:');
      expect(browser.html('#sign-up-form')).to.contain('Password confirmation:');
    });

    it('expects to see submit button', function() {
      expect(browser.html('#sign-up-form')).to.contain('Sign me up!');
    });
  });

  after(function(done) {
    this.server.close();
    done();
  });

});
