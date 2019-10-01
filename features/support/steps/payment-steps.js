import {Given, When, Then} from 'cucumber';
import {expect} from 'chai';
import {calculatePayment} from '../../../src/baby-sitter';

const options = {
  arrivalTime: null,
  family: null,
  leaveTime: null
};
let actualTotal = null;

Given(/^I arrive at '(.*)'$/, function (time) {
  options.arrivalTime = time;
});

Given(/^I am working for family '(.*)'$/, function (family) {
  options.family = family;
});

When(/^I leave at '(.*)'$/, function (time) {
  options.leaveTime = time;
  actualTotal = calculatePayment(options);
});

Then(/^I should charge '(.*)' for the night$/, function (total) {
  expect(actualTotal).to.equal(total);
});
