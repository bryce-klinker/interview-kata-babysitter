const { Given, When, Then,  } = require('cucumber');
const { expect } = require('chai');

let options = {
  arrivalTime: null,
  family: null,
  leaveTime: null
};

Given(/^I arrive at '(.*)'$/, function (time) {
  options.arrivalTime = time;
});

Given(/^I am working for family '(.*)'$/, function (family) {
  options.family = family;
});

When(/^I leave at '(.*)'$/, function (time) {
  options.leaveTime = time;
});

Then(/^I should charge '(.*)' for the night$/, function (total) {
  expect(options.arrivalTime).to.equal('5:00 PM');
  expect(options.leaveTime).to.equal('12:00 AM');
  expect(options.family).to.equal('A');
});
