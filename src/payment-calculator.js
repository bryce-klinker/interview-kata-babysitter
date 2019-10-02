export function calculatePaymentAmount(hoursWorked, rates) {
  const ratesWorked = rates.filter(r => hoursWorked.includes(r.hour));
  const total = ratesWorked.reduce((p, r) => p + r.rate, 0);
  return `$${total}`;
}
