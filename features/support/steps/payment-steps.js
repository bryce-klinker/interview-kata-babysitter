import {Given, When, Then} from 'cucumber';
import {expect} from 'chai';
import {calculatePayment} from '../../../src/baby-sitter';

const options = {
  startTime: null,
  family: null,
  endTime: null
};
let actualTotal = null;

Given(/^I arrive at '(.*)'$/, function (time) {
  options.startTime = time;
});

Given(/^I am working for family '(.*)'$/, function (family) {
  options.family = family;
});

When(/^I leave at '(.*)'$/, function (time) {
  options.endTime = time;
  actualTotal = calculatePayment(options);
});

Then(/^I should charge '(.*)' for the night$/, function (total) {
  expect(actualTotal).to.equal(total);
});
