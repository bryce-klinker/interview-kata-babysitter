export function calculatePaymentAmount(hoursWorked, rates) {
  const total = rates.reduce((p, r) => p + r.rate, 0);
  return `$${total}`;
}
