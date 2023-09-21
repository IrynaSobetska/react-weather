const orderWeather = (data) => {
  if (data === null) {
    return;
  }

  let i = 0;
  let prevTemp;
  const weatherData = [];
  const days = [];

  // days
  data.hourly.time
    .map((item) => item.slice(0, 10))
    .forEach((element) => {
      if (!days.includes(element)) {
        days.push(element);
      }
    });

  days.forEach((day) => {
    const arr = [];
    // hours
    const hours = [];
    const dayHours = data.hourly.time;
    dayHours.filter((element) => {
      if (element.includes(day)) {
        hours.push(element.slice(11));
      }
    });
    // temp
    for (let j = 0; j < hours.length; j++) {
      const hourArr = [];
      let temp = data.hourly.temperature_2m[i];
      const hour = hours[j];
      // add class
      if (prevTemp > temp) {
        hourArr.push("less");
      } else if (prevTemp === temp) {
        hourArr.push("same");
      } else if (prevTemp < temp) {
        hourArr.push("more");
      } else {
        hourArr.push("");
      }
      if (!temp.toString().split("").includes(".")) {
        temp += ".0";
      }
      hourArr.push(temp);
      hourArr.push(hour);
      i++;
      prevTemp = temp;
      arr.push(hourArr);
    }
    // create an obj
    const dayObj = {
      day: day,
      arr,
    };
    weatherData.push(dayObj);
  });
  return weatherData;
};

export default orderWeather;
