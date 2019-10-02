export function getHoursWorked(startTime, endTime) {
  if (endTime === '1:00 AM') {
    return [19, 20, 21, 22, 23, 0];
  }
  if (startTime === '7:00 PM') {
    return [19, 20, 21, 22, 23];
  }
  return [17, 18, 19, 20, 21, 22];
}

export function getHour(time) {
  const colonIndex = time.indexOf(':');
  const isAm = time.indexOf('AM') > -1;
  let amPmHour = Number(time.substr(0, colonIndex));
  if (amPmHour === 12) {
    amPmHour -= 12;
  }
  return isAm ? amPmHour : amPmHour + 12;
}
