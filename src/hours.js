export function getHoursWorked(startTime) {
  if (startTime === '7:00 PM') {
    return [18, 19, 20, 21, 22, 23];
  }
  return [17, 18, 19, 20, 21, 22];
}

export function getHour(time) {
  const colonIndex = time.indexOf(':');
  const amPmHour = Number(time.substr(0, colonIndex));
  return amPmHour + 12;
}
