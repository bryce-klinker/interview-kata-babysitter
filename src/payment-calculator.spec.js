import test from 'ava';
import {expect} from 'chai';
import {calculatePaymentAmount} from "./payment-calculator";

test('When one hour worked and rate is $15 per hour then payment is $15', () => {
  const hoursWorked = [17];
  const rates = [{hour: 17, rate: 15}];
  const payment = calculatePaymentAmount(hoursWorked, rates);

  expect(payment).to.equal('$15');
});

test('When two hours worked and rate is $15 per hour then payment is $15', () => {
  const hoursWorked = [17, 18];
  const rates = [{hour: 17, rate: 15}, {hour: 18, rate: 15}];
  const payment = calculatePaymentAmount(hoursWorked, rates);

  expect(payment).to.equal('$30');
});

test('When two hours worked and rates are $15 and $20 per hour then payment is $35', () => {
  const hoursWorked = [17, 18];
  const rates = [{hour: 17, rate: 15}, {hour: 18, rate: 20}];

  const payment = calculatePaymentAmount(hoursWorked, rates);

  expect(payment).to.equal('$35');
})
