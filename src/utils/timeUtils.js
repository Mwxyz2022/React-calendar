export const formatTime = time => {
  return time < 10 ? `0${time}` : time;
};

export const getFullTime = hour => {
  if (hour === 24) return '23:59';

  return hour < 10 ? `0${hour}:00` : `${hour}:00`;
};

export const getDefStartTime = date => {
  let hour = date.get('hour');
  const currentMins = date.get('minutes');
  let mins = null;

  if (currentMins > 0 && currentMins <= 15) mins = '15';
  if (currentMins > 15 && currentMins <= 30) mins = '30';
  if (currentMins > 30 && currentMins <= 45) mins = '45';

  if ((currentMins > 45 && currentMins <= 59 && hour === 23) || (hour === 0 && currentMins === 0))
    return '00:00';

  if (currentMins > 45 && hour !== 23) {
    hour += 1;
    return `${formatTime(hour)}:00`;
  }

  hour = formatTime(hour);

  return `${hour}:${mins}`;
};

export const getDefEndTime = date => {
  let [hour, mins] = date.split(':');
  hour = parseInt(hour);

  if (hour === 0 && mins >= 0) {
    return `01:${mins}`;
  }

  if (hour === 23 && mins > 0) {
    return '23:59';
  }

  return `${formatTime(hour + 1)}:${mins}`;
};
