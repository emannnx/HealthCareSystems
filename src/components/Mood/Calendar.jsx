import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "./Calendar.css"; // Import your plain CSS file

function Calendar({ className = "", classNames = {}, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`mmood-calendar-wrapper ${className}`}
      classNames={{
        months: "mmood-calendar-months",
        month: "mmood-calendar-month",
        caption: "mmood-calendar-caption",
        caption_label: "mmood-calendar-caption-label",
        nav: "mmood-calendar-nav",
        nav_button: "mmood-calendar-nav-button",
        nav_button_previous: "mmood-calendar-nav-button-previous",
        nav_button_next: "mmood-calendar-nav-button-next",
        table: "mmood-calendar-table",
        head_row: "mmood-calendar-head-row",
        head_cell: "mmood-calendar-head-cell",
        row: "mmood-calendar-row",
        cell: "mmood-calendar-cell",
        day: "mmood-calendar-day",
        day_range_end: "mmood-calendar-day-range-end",
        day_selected: "mmood-calendar-day-selected",
        day_today: "mmood-calendar-day-today",
        day_outside: "mmood-calendar-day-outside",
        day_disabled: "mmood-calendar-day-disabled",
        day_range_middle: "mmood-calendar-day-range-middle",
        day_hidden: "mmood-calendar-day-hidden",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="mmood-calendar-icon" />,
        IconRight: () => <ChevronRight className="mmood-calendar-icon" />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";
export { Calendar };
