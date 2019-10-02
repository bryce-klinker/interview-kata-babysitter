import test from 'ava'
import {expect} from 'chai';
import {getHoursWorked, getHour} from "./hours";

test('When start time is 5:00 PM and end time is 11:00 PM then hours between 5:00 PM and 11:00 PM returned', () => {
  const hoursWorked = getHoursWorked('5:00 PM', '11:00 PM');

  expect(hoursWorked).to.deep.equal([17, 18, 19, 20, 21, 22]);
});

test('When start time is 7:00 PM and end time is 12:00 AM then hours between 7:00 PM and 12:00 AM returned', () => {
  const hoursWorked = getHoursWorked('7:00 PM', '12:00 AM');

  expect(hoursWorked).to.deep.equal([19, 20, 21, 22, 23]);
});

test('When start time is 7:00 PM and end time is 1:00 AM then hours between 7:00 PM and 12:00 AM returned', () => {
  const hoursWorked = getHoursWorked('7:00 PM', '1:00 AM');

  expect(hoursWorked).to.deep.equal([19, 20, 21, 22, 23, 0]);
});

test('When start time is 5:00 PM and end time is 1:00 AM then hours between 5:00 PM and 1:00 AM are returned', () => {
  const hoursWorked = getHoursWorked('5:00 PM', '1:00 AM');

  expect(hoursWorked).to.deep.equal([17, 18, 19, 20, 21, 22, 23, 0]);
});

test('When start time is 11:00 PM and end time is 12:00 AM then hours between 11:00 PM and 12:00 AM are returned', () => {
  const hoursWorked = getHoursWorked('11:00 PM', '12:00 AM');

  expect(hoursWorked).to.deep.equal([23]);
});

test('When start time is 4:00 PM then error is raised', () => {
  expect(() => getHoursWorked('4:00 PM', '11:00 PM')).to.throw('A start time of 4:00 PM is not allowed');
});

test('Given time when get hour then hour is in military', () => {
  expect(getHour('5:00 PM')).to.equal(17);
  expect(getHour('7:00 PM')).to.equal(19);
  expect(getHour('9:00 PM')).to.equal(21);
  expect(getHour('11:00 PM')).to.equal(23);
  expect(getHour('1:00 AM')).to.equal(1);
  expect(getHour('12:00 AM')).to.equal(0);
});

