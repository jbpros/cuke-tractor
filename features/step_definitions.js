module.exports = function () {
  this.Given(/^something happened$/, function (callback) {
    callback();
  });

  this.When(/^someting happens$/, function (callback) {
    callback();
  });

  this.When(/^something fails via callback$/, function (callback) {
    callback.fail(new Error('#FAIL via callback'));
  });

  this.When(/^something fails via exception$/, function (callback) {
    setTimeout(function () {
      throw new Error('#FAIL via exception');
    }, 20);
  });

  this.Then(/^something should happen$/, function (callback) {
    callback();
  });

  this.Then(/^something should not happen$/, function (callback) {
    // should not be called.
    callback();
  });
};
