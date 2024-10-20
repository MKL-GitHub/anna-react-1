import { useState } from "react";
import "./Calendar.css";
import Grid from "./Grid";

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Calendar() {
  const [date, setDate] = useState(new Date());

  const updateDate = (month) => {
    const clone = new Date(date);
    clone.setMonth(date.getMonth() + month);

    setDate(clone);
  };

  return (
    <div className="Calendar">
      <div className="Calendar__week-days">
        {WEEK_DAYS.map((day) => (
          <div className="Calendar__week-day">{day}</div>
        ))}
      </div>

      <div className="Calendar__controls">
        <button onClick={() => updateDate(-1)}>prev</button>
        <div>{date.toLocaleString("default", { month: "long" })}</div>
        <button onClick={() => updateDate(1)}>next</button>
      </div>

      <Grid
        date={date}
        // onCellRender={(date) => {
        //   // console.log("date", date);

        //   return (
        //     <div style={{ height: "5rem", width: "10rem", fontSize: 10 }}>
        //       <ul>
        //         <li> Event 1 </li>
        //         <li> Event 2 </li>
        //       </ul>
        //     </div>
        //   );
        // }}
      />
    </div>
  );
}

export default Calendar;
