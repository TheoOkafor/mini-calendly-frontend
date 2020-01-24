const prepCalendar = (dataObj) => {
  const calendarData = {};

  dataObj.calendar.forEach(opening => {
    const datetime = new Date(opening['date_time']);
    const month = datetime.getMonth();
    const dayOfMonth = datetime.getDate();
    const timeData = {
      hour: datetime.getHours(),
      time: opening['date_time']
    }
    if(calendarData[month]) {
      if(calendarData[month][dayOfMonth]) {
        calendarData[month][dayOfMonth].push(timeData);
      } else {
        calendarData[month][dayOfMonth] = [timeData]
      }
    } else {
      calendarData[month] = {
        [dayOfMonth]: [timeData]
      }
    }
  });
  return calendarData;
}

export default prepCalendar;
