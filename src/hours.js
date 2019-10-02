export function getHoursWorked(startTime) {
  if (startTime === '7:00 PM') {
    return [18, 19, 20, 21, 22, 23];
  }
  return [17, 18, 19, 20, 21, 22];
}
