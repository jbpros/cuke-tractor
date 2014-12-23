module.exports = function () {
  this.Given(/^something happened$/, function (callback) {
    callback();
  });

  this.Given(/^Protractor opened an Angular app$/, function (callback) {
    browser.get('http://angular.github.io/protractor/#/').then(callback);
  });

  this.When(/^something happens$/, function (callback) {
    callback();
  });

  this.When(/^something fails via callback$/, function (callback) {
    setTimeout(function () {
      callback.fail(new Error('#FAIL via callback'));
    }, 20);
  });

  this.When(/^something fails via exception$/, function (callback) {
    setTimeout(function () {
      throw new Error('#FAIL via exception');
    }, 20);
  });

  this.When(/^Protractor doesn't find Angular on the page$/, function (callback) {
    browser.get('https://localhost/', function (element) {
      callback();
    });
  });

  this.When(/^Protractor throws up$/, function (callback) {
    $('bad_css_path')
      .click()
      .then(function (res) {
        console.log('OK', res);
        callback();
      });
  });

  this.When(/^Protractor does not find an element by CSS$/, function (callback) {
    $('css_bad_path').click().then(callback);
  });

  this.When(/^I double\-callback$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback();
  });

  this.Then(/^something should happen$/, function (callback) {
    callback();
  });

  this.Then(/^something should not happen$/, function (callback) {
    // should not be called.
    callback();
  });
};
