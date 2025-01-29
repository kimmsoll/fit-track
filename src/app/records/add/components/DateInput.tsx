"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function DateInput() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="yyyy-MM-dd"
    />
  );
}
