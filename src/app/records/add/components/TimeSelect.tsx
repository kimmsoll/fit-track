import React, { ChangeEventHandler } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function TimeSelect({ value, onChange }: Props) {
  const [selectedHour, selectedMinute] = value.split(":");

  const handleHourChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newHour = e.target.value;
    onChange(`${newHour}:${selectedMinute}`);
  };

  const handleMinuteChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newMinute = e.target.value;
    onChange(`${selectedHour}:${newMinute}`);
  };

  return (
    <div className="flex gap-2">
      <select value={selectedHour} onChange={handleHourChange}>
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <span>시</span>
      <select value={selectedMinute} onChange={handleMinuteChange}>
        {minutes.map((minute) => (
          <option key={minute} value={minute}>
            {minute}
          </option>
        ))}
      </select>
      <span>분</span>
    </div>
  );
}

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 12 }, (_, i) =>
  String(i * 5).padStart(2, "0")
);
