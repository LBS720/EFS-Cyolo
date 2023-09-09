import { ChangeEvent, useState } from "react";
import "./datePicker.css";

interface DatePickerProps {
  onDateChange: (date: string) => void;
}

function DatePicker({ onDateChange }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSelectedDate = e.target.value;
    const selectedDateTime = new Date(newSelectedDate).getTime();
    const currentDateTime = new Date().getTime();

    if (selectedDateTime < currentDateTime) {
      alert("Please select a date and time in the future.");
    } else {
      setSelectedDate(newSelectedDate);
      onDateChange(newSelectedDate);
    }
  };

  return (
    <input
      className="date-picker-container"
      type="datetime-local"
      id="dateInput"
      name="dateInput"
      min={today}
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
}

export default DatePicker;
