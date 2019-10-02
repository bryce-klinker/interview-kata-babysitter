import {getRatesForFamily} from "./rates";
import {getHoursWorked} from "./hours";
import {calculatePaymentAmount} from "./payment-calculator";

export function calculatePayment({ family, endTime, startTime}) {
  const rates = getRatesForFamily(family);
  const hoursWorked = getHoursWorked(startTime, endTime);
  return calculatePaymentAmount(hoursWorked, rates);
}
