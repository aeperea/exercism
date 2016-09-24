export default (year, month, dayOfWeek, nth) => {
  let dates = runMonth(year, month, dayOfWeek);
  switch (nth) {
  case '1st' :
    return dates[0];
    break
  case '2nd' :
    return dates[1];
    break
  case '3rd' :
    return dates[2];
    break
  case '4th' :
    return dates[3];
    break
  case '5th' :
    if (typeof dates[4] === 'undefined') { throw new Error('MeetupDayException'); }
    return dates[4];
    break
  case 'teenth' :
    return getTeenth(dates);
    break
  case 'last' :
    return dates[dates.length - 1];
    break
  }
}

const runMonth = (year, month, dayOfWeek) => {
  let matchedDays = [];
  for (let day = 1; day <= 31 ; day++) {
    let date = new Date(year, month, day);
    if (date.getMonth() === month) {
      if (daysNum[date.getDay()] === dayOfWeek) {matchedDays.push(date);}
    }
  }
  return matchedDays;
}

const getTeenth = (dates) => {
  let matchedDate = null;
  dates.forEach(d => {
    if (d.getDate() >= 10 && d.getDate() < 20) {
      matchedDate = d;
    }
  });

  if (matchedDate) { return matchedDate; }
  else {throw new Error('MeetupDayException');}
}

const daysNum = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}
