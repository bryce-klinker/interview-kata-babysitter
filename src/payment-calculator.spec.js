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

test('When two hours worked and rate is $15 per hour then payment is $30', () => {
  const hoursWorked = [17, 18];

  const payment = calculatePaymentAmount(hoursWorked, fifteenDollarFlatRate);

  expect(payment).to.equal('$30');
});

test('When one hour worked at $15 and second hour worked at $30 then payment is $45', () => {
  const hoursWorked = [17, 18];
  const rates = [
    {hour: 17, rate: 15},
    {hour: 18, rate: 30},
    {hour: 19, rate: 30},
    {hour: 20, rate: 30},
    {hour: 21, rate: 30},
    {hour: 22, rate: 30},
    {hour: 23, rate: 30},
    {hour: 0, rate: 30},
    {hour: 1, rate: 30},
    {hour: 2, rate: 30},
    {hour: 3, rate: 30},
  ];

  const payment = calculatePaymentAmount(hoursWorked, rates);

  expect(payment).to.equal('$45');

});
