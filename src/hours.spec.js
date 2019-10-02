import test from 'ava'
import {expect} from 'chai';
import {getHoursWorked, getHour} from "./hours";

test('When start time is 5:00 PM and end time is 11:00 PM then hours between 5:00 PM and 11:00 PM returned', () => {
  const hoursWorked = getHoursWorked('5:00 PM', '11:00 PM');

  expect(hoursWorked).to.include(17);
  expect(hoursWorked).to.include(18);
  expect(hoursWorked).to.include(19);
  expect(hoursWorked).to.include(20);
  expect(hoursWorked).to.include(21);
  expect(hoursWorked).to.include(22);

  expect(hoursWorked).not.to.include(23);
  expect(hoursWorked).not.to.include(0);
  expect(hoursWorked).not.to.include(1);
  expect(hoursWorked).not.to.include(2);
  expect(hoursWorked).not.to.include(3);
});

test('When start time is 7:00 PM and end time is 12:00 AM then hours between 7:00 PM and 12:00 AM returned', () => {
  const hoursWorked = getHoursWorked('7:00 PM', '12:00 AM');

  expect(hoursWorked).to.include(19);
  expect(hoursWorked).to.include(20);
  expect(hoursWorked).to.include(21);
  expect(hoursWorked).to.include(22);
  expect(hoursWorked).to.include(23);

  expect(hoursWorked).not.to.include(17);
  expect(hoursWorked).not.to.include(18);
  expect(hoursWorked).not.to.include(0);
  expect(hoursWorked).not.to.include(1);
  expect(hoursWorked).not.to.include(2);
  expect(hoursWorked).not.to.include(3);
});

test('When start time is 7:00 PM and end time is 1:00 AM then hours between 7:00 PM and 12:00 AM returned', () => {
  const hoursWorked = getHoursWorked('7:00 PM', '1:00 AM');

  expect(hoursWorked).to.include(19);
  expect(hoursWorked).to.include(20);
  expect(hoursWorked).to.include(21);
  expect(hoursWorked).to.include(22);
  expect(hoursWorked).to.include(23);
  expect(hoursWorked).to.include(0);

  expect(hoursWorked).not.to.include(17);
  expect(hoursWorked).not.to.include(18);
  expect(hoursWorked).not.to.include(1);
  expect(hoursWorked).not.to.include(2);
  expect(hoursWorked).not.to.include(3);
});

test('When start time is 5:00 PM and end time is 1:00 AM then hours between 5:00 PM and 1:00 AM are returned', () => {
  const hoursWorked = getHoursWorked('5:00 PM', '1:00 AM');

  expect(hoursWorked).to.include(17);
  expect(hoursWorked).to.include(18);
  expect(hoursWorked).to.include(19);
  expect(hoursWorked).to.include(20);
  expect(hoursWorked).to.include(21);
  expect(hoursWorked).to.include(22);
  expect(hoursWorked).to.include(23);
  expect(hoursWorked).to.include(0);

  expect(hoursWorked).not.to.include(1);
  expect(hoursWorked).not.to.include(2);
  expect(hoursWorked).not.to.include(3);
});

test('When start time is 11:00 PM and end time is 12:00 AM then hours between 11:00 PM and 12:00 AM are returned', () => {
  const hoursWorked = getHoursWorked('11:00 PM', '12:00 AM');

  expect(hoursWorked).to.deep.equal([23]);
});

test('Given time when get hour then hour is in military', () => {
  expect(getHour('5:00 PM')).to.equal(17);
  expect(getHour('7:00 PM')).to.equal(19);
  expect(getHour('9:00 PM')).to.equal(21);
  expect(getHour('11:00 PM')).to.equal(23);
  expect(getHour('1:00 AM')).to.equal(1);
  expect(getHour('12:00 AM')).to.equal(0);
});

