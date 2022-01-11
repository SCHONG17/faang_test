import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Decc",
  ];

  const [days, setDays] = useState([
    { label: 1, value: true },
    { label: 2, value: false },
    { label: 3, value: false },
    { label: 4, value: false },
    { label: 5, value: false },
    { label: 6, value: false },
    { label: 7, value: false },
    { label: 8, value: false },
    { label: 9, value: false },
    { label: 10, value: false },
    { label: 11, value: false },
    { label: 12, value: false },
    { label: 13, value: false },
    { label: 14, value: false },
  ]);

  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const pastDate = d.getDate() - 14;

  d.setDate(pastDate);

  console.log("d : ", d);

  const pastWeeks = [];

  for (var i = 0; i < 14; i++) {
    // pastWeeks.push(d);
  }
  console.log(pastWeeks);

  const numClicked = (e) => {
    console.log(e);
  };

  return (
    <div>
      {/* {startDay.format("MM/DD")} - {endDay.format("MM/DD")}
      {day.format("MM/DD")}

      {calendar.map()} */}
      {day}, {month} {pastDate}
      <br />
      {pastWeeks}
      <br />
      {days.map((day) => {
        return (
          <ul className={day.value === true ? "selected" : "day_gray"}>
            <li onClick={(e) => numClicked(day.value)}>{day.label}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Calendar;
