import React from "react";
import './CurrentDate.css';

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CurrentDate = () => {
  const todayDate = new Date();
  const currentDayOfWeek = daysInWeek[todayDate.getDay()];
  const dateString = todayDate.toDateString().slice(4);

  return (
    <div className="current-date">
      <h1 className="primary-data">{currentDayOfWeek}</h1>
      <p className="secondary-data">{dateString}</p>
    </div>
  );
}

export default CurrentDate;