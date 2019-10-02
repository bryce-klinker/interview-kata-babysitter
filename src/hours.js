export function getHoursWorked(startTime, endTime) {
  let currentHour = getHour(startTime);
  const endHour = getHour(endTime);

  const hoursWorked = [];
  while(currentHour !== endHour) {
    hoursWorked.push(currentHour);
    currentHour++;
    if (currentHour === 24) {
      currentHour = 0;
    }
  }
  return hoursWorked;
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
