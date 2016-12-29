module.exports = function() {
	   var chai = require('chai');
	   var chaiAsPromised = require('chai-as-promised');
       chai.use(chaiAsPromised);
       var expect = chai.expect;

       this.Given('I am on Home Page of my application', function (callback) {
         browser.get('https://chormule.github.io/');
         callback();
       });

	   this.When(/^I provides first input as "([^"]*)"$/, function (arg1, callback) {

		 element(by.model('ctrl.object1')).clear();
		 element(by.model('ctrl.object1')).sendKeys(arg1);
         callback();
       });

	   this.When(/^I provides second input as "([^"]*)"$/, function (arg1, callback) {

		 element(by.model('ctrl.object2')).clear();
		 element(by.model('ctrl.object2')).sendKeys(arg1);
         callback();
       });

	  this.When(/^I clicks on the "([^"]*)" button$/, function (arg1, callback) {

		  element(by.buttonText(arg1)).click();
		  callback();
	   });


	  this.Then(/^I am able to see result as "([^"]*)"$/, function (arg1, callback) {
		 var result = element(by.binding('ctrl.result'));
		 expect(result.getText()).to.eventually.equal(arg1).and.notify(callback);
		 
       });

};