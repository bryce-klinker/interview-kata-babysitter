export function calculatePaymentAmount(hoursWorked) {
  const total = hoursWorked.length * 15;
  return `$${total}`;
}
