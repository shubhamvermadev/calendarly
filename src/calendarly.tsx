/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import "./assets/calendar.css";
import { cn } from "./stories/utility";

const QuickSelectOptions = [
  { label: "Today", range: [dayjs(), dayjs()] },
  { label: "Yesterday", range: [dayjs().subtract(1, "day"), dayjs().subtract(1, "day")] },
  { label: "This Week", range: [dayjs().startOf("week"), dayjs()] },
  { label: "Last Week", range: [dayjs().subtract(1, "week").startOf("week"), dayjs().subtract(1, "week").endOf("week")] },
  { label: "This Month", range: [dayjs().startOf("month"), dayjs()] },
  { label: "Last Month", range: [dayjs().subtract(1, "month").startOf("month"), dayjs().subtract(1, "month").endOf("month")] },
];

const generateCalendar = (month: any) => {
  const startOfMonth = month.startOf("month");
  const endOfMonth = month.endOf("month");
  const daysInMonth = endOfMonth.date();
  const firstDayIndex = startOfMonth.day();

  let days = Array.from({ length: firstDayIndex }, () => null);
  days = [...days, ...Array.from({ length: daysInMonth }, (_, i) => startOfMonth.add(i, "day"))];

  return days;
};

const renderIf = (condition: boolean) => (component: JSX.Element) => condition ? component : null;

export const Calendarly = ({ isRange = false, type, onSelect, quickSelection = false }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateRange, setDateRange] = useState<[null | Dayjs, null | Dayjs]>([null, null]);
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());



  const handleSelectQuickOption = (range: any) => {
    setDateRange(range);
    setSelectedDate(null);
    setOpen(false);
  };

  const handleDateClick = (date: Dayjs) => {
    if (isRange) {
      if (!dateRange[0]) setDateRange([date, null]);
      else if (!dateRange[1]) {
        setDateRange([dateRange[0], date])
        onSelect([dateRange[0].toDate(), date.toDate()])
      }
      else setDateRange([date, null]);
    } else {
      setSelectedDate(date);
      onSelect(date)
      setOpen(false);
    }
  };

  const isMultiple = renderIf(type === "multiple");
  const showQuickSelection = renderIf(quickSelection);
  return (
    <div className="calendar-container">
      <input
        type="text"
        readOnly
        className="calendar-input"
        onClick={() => setOpen(!open)}
        value={
          isRange && dateRange[0] && dateRange[1]
            ? `${dateRange[0].format("YYYY-MM-DD")} - ${dateRange[1].format("YYYY-MM-DD")}`
            : selectedDate?.format("YYYY-MM-DD") || "Select Date"
        }
      />
      {open && (
        <div className="calendar-popup">
          <div className="calendar-header">
            <button className="nav-button" onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}>
              ◀
            </button>
            <span className="calendar-title">{currentMonth.format("MMMM YYYY")}</span>
            {isMultiple(<span className="calendar-title">{currentMonth.add(1, "month").format("MMMM YYYY")}</span>)}
            <button className="nav-button" onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
              ▶
            </button>
          </div>
          <div className="calendar-body">
            {showQuickSelection(<div className="quick-select">
              {QuickSelectOptions.map((option) => (
                <button
                  key={option.label}
                  className="quick-option"
                  onClick={() => handleSelectQuickOption(option.range)}
                >
                  {option.label}
                </button>
              ))}
            </div>)}
            <div className="flex">
              <div className="calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="calendar-day-label">{day}</div>
                ))}
                {generateCalendar(currentMonth).map((date, index) => (
                  <button
                    key={index}
                    className={cn("calendar-day", {
                      "selected": date && selectedDate?.isSame(date, "day"),
                      "start": date && dateRange[0]?.isSame(date, "day"),
                      "end": date && dateRange[1]?.isSame(date, "day"),
                      "in-between": dateRange[0]?.isBefore(date, "day") && dateRange[1]?.isAfter(date, "day")
                    })}
                    onClick={() => date && handleDateClick(date)}
                  >
                    {date ? date.date() : ""}
                  </button>
                ))}
              </div>
              {isMultiple(<div className={"separator"}> - </div>)}
              {isMultiple(<div className="calendar-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="calendar-day-label">{day}</div>
                ))}
                {generateCalendar(currentMonth.add(1, "month")).map((date, index) => (
                  <button
                    key={index}
                    className={cn("calendar-day", {
                      "selected": date && selectedDate?.isSame(date, "day"),
                      "start": date && dateRange[0]?.isSame(date, "day"),
                      "end": date && dateRange[1]?.isSame(date, "day"),
                      "in-between": dateRange[0]?.isBefore(date, "day") && dateRange[1]?.isAfter(date, "day")
                    })}
                    onClick={() => date && handleDateClick(date)}
                  >
                    {date ? date.date() : ""}
                  </button>
                ))}
              </div>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

