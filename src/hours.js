function collectHoursWorked(startHour, endHour) {
  const hoursWorked = [];
  let currentHour = startHour;
  while (currentHour !== endHour) {
    hoursWorked.push(currentHour);
    currentHour++;
    if (currentHour === 24) {
      currentHour = 0;
    }
  }
  return hoursWorked;
}

export function getHoursWorked(startTime, endTime) {
  const startHour = getHour(startTime);
  if (startHour < 17) {
    throw `A start time of ${startTime} is not allowed`;
  }
  const endHour = getHour(endTime);
  return collectHoursWorked(startHour, endHour);
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
