import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div>
      <Calendar
        onChange={(v) => setDate(v as Date)}
        value={date}
        formatDay={(locale, date) => date.getDate().toString()}
      />
      <p>선택한 날짜: {date?.toDateString()}</p>
    </div>
  );
}
