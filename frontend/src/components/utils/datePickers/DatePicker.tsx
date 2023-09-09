import { ChangeEvent, useState } from "react";
import "./datePicker.css";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  return (
    <input
      className="date-picker-container"
      type="date"
      id="dateInput"
      name="dateInput"
      min={today}
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
}

export default DatePicker;
