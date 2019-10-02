import test from 'ava'
import {expect} from 'chai';
import {getHoursWorked} from "./hours";

test('When start time is 5:00 PM and end time is 11:00 PM then hours between 5:00 PM and 11:00 PM returned', () => {
  const hoursWorked = getHoursWorked('5:00 PM', '11:00 PM');

  expect(hoursWorked).to.include(17);
  expect(hoursWorked).to.include(18);
  expect(hoursWorked).to.include(19);
  expect(hoursWorked).to.include(20);
  expect(hoursWorked).to.include(21);
  expect(hoursWorked).to.include(22);
});