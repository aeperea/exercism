const calculateMinutes = (m) => {
  let hours   = Math.floor(m / 60);
  let minutes = m % 60;
  if (minutes < 0) {minutes = 60 + minutes;}

  return {minutes, hours}
}

const calculateHours = (h) => {
  let hours = h % 24;
  if (hours < 0) {hours = 24 + hours;}

  return {hours}
}

const printTime = (h, m) => {
  if (h < 10) { h = `0${String(h)}`; }
  if (m < 10) { m = `0${String(m)}`; }
  return `${h}:${m}`;
}

const computeTime = (h, m) => {
  let minuteAnalysis = calculateMinutes(m);
  let hoursAnalysis  = calculateHours(h + minuteAnalysis.hours);

  return {
    hours: hoursAnalysis.hours,
    minutes: minuteAnalysis.minutes
  };
}

const at = (hour, min = 0) => {
  let {hours, minutes} = computeTime(hour, min);

  return {
    toString : () => {
      return printTime(hours, minutes);
    },
    plus  : (mins) => {
      return at(hour, minutes + mins);
    },
    minus : (mins) => {
      return at(hour, minutes - mins);
    },
    equals : (clock) => {
      return (printTime(hours, minutes) === clock.toString())
    }
  }
}

export default at;
