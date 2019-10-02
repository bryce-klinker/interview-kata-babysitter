import test from 'ava';
import {expect} from 'chai';
import {calculatePaymentAmount} from "./payment-calculator";

const fifteenDollarFlatRate = [
  {hour: 17, rate: 15},
  {hour: 18, rate: 15},
  {hour: 19, rate: 15},
  {hour: 20, rate: 15},
  {hour: 21, rate: 15},
  {hour: 22, rate: 15},
  {hour: 23, rate: 15},
  {hour: 0, rate: 15},
  {hour: 1, rate: 15},
  {hour: 2, rate: 15},
  {hour: 3, rate: 15},
];

test('When one hour worked and rate is $15 per hour then payment is $15', () => {
  const hoursWorked = [17];
  const payment = calculatePaymentAmount(hoursWorked, fifteenDollarFlatRate);

  expect(payment).to.equal('$15');
});
