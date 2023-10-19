function convertDatetimeToLocalDate(datetime) {
  const date = new Date(datetime);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function convertISODatetimeToLocalDateWithTime(isoDatetime) {
  let datetime = new Date(isoDatetime);
  datetime.setHours(0, 0, 0, 0)
  return datetime;
}

function convertISODatetimeToLocalDatetime(isoDatetime) {
  let datetime = new Date(isoDatetime);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }

  return datetime.toLocaleString('en-US', options).replace(',', '')
}

function getDateInLocalDate(localDate) {
  let localDateTime = new Date(localDate);
  let date = localDateTime.getDate();

  return date;
}

function isDateIsToday(isoDatetime) {
  let today = new Date()
  let date = new Date(isoDatetime)

  let ymdToday = convertDatetimeToLocalDate(today)
  let ymdDate = convertDatetimeToLocalDate(date) 

  if (ymdToday === ymdDate) {
    return true;
  }
  return false;
}

function getMonthInLocalDate(date) {
  let today = new Date(date);
  let month = today.toLocaleString('default', { month: 'short' });
  return month.toUpperCase();
}

function getYearInLocalDate(date) {
  let today = new Date(date);
  let year = today.getFullYear();
  return year;
}