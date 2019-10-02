export function calculatePaymentAmount(hoursWorked) {
  const total = 15 * hoursWorked.length;
  return `$${total}`;
}
