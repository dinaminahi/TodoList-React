import React from "react";
import './CurrentDate.css';

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const CurrentDate = () => {
    const currDate = new Date(); 
    const day = daysInWeek[currDate.getDay()];
    const dateStr = currDate.toDateString().slice(4);

    return (
      <div className="current-date">
          <h1 className="primary-data">{day}</h1>
          <p className="secondary-data">{dateStr}</p>
      </div>
    );
}

export default CurrentDate;