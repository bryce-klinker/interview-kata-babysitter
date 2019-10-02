import test from 'ava';
import {expect} from 'chai';
import {calculatePaymentAmount} from "./payment-calculator";

test('When one hour worked and rate is $15 per hour then payment is $15', () => {
  let hoursWorked = [17];
  let rates = [{hour: 17, rate: 15}];
  const payment = calculatePaymentAmount(hoursWorked, rates);

  expect(payment).to.equal('$15');
});
