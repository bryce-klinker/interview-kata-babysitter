export function getHoursWorked(startTime) {
  if (startTime === '7:00 PM') {
    return [18, 19, 20, 21, 22, 23];
  }
  return [17, 18, 19, 20, 21, 22];
}

export function getHour(time) {
  if (time === '7:00 PM') {
    return 19;
  }
  if (time === '9:00 PM') {
    return 21;
  }
  return 17;
}
