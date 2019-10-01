const { Given, When, Then,  } = require('cucumber');
const { expect } = require('chai');

Given(/^I arrive at '(.*)'$/, function (time) {
  return 'pending';
});

Given(/^I am working for family '(.*)'$/, function (family) {
  return 'pending';
});

When(/^I leave at '(.*)'$/, function (time) {
  return 'pending';
});

Then(/^I should charge '(.*)' for the night$/, function (total) {

});
