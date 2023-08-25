"use client";
import { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentMonth = selectedDate.getMonth()
  const displayMonth = monthNames[selectedDate.getMonth()];
  const currentYear = selectedDate.getFullYear();



  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const currDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="font-semibold">
              {displayMonth}, {currentYear}
            </h2>
          </div>
          <div className="grid grid-cols-7 gap-1 mx-auto justify-center">
            {daysHeader.map((day) => (
              <div key={day} className="text-gray-300 p-1 text-xs">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 mx-auto justify-center">
            {daysArray.map((day) => (
              <div
                key={day}
                className={`text-center text-xs ${
                  day === selectedDate.getDate()
                    ? "bg-blue-500 text-white rounded-lg"
                    : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
