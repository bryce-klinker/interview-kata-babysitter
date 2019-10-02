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

function validateTimes(startTime, endTime) {
  const startHour = getHour(startTime);
  const endHour = getHour(endTime);

  if (startHour < 17) {
    throw `A start time of ${startTime} is not allowed`;
  }
  if (endHour > 4 && endHour < 17) {
    throw `An end time of ${endTime} is not allowed`;
  }
}

export function getHoursWorked(startTime, endTime) {
  validateTimes(startTime, endTime);

  return collectHoursWorked(getHour(startTime), getHour(endTime));
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
