import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

const events = [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 1),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2022, 4, 7),
    end: new Date(2022, 4, 10),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2022, 6, 13, 0, 0, 0),
    end: new Date(2022, 6, 20, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2022, 4, 6, 0, 0, 0),
    end: new Date(2022, 4, 13, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2022, 5, 9, 0, 0, 0),
    end: new Date(2022, 5, 9, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2022, 5, 11),
    end: new Date(2022, 5, 13),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Big conference for important people",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2022, 5, 12, 10, 30, 0, 0),
    end: new Date(2022, 5, 12, 12, 30, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2022, 5, 12, 12, 0, 0, 0),
    end: new Date(2022, 5, 12, 13, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Power lunch",
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2022, 5, 12, 14, 0, 0, 0),
    end: new Date(2022, 5, 12, 15, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2022, 5, 12, 17, 0, 0, 0),
    end: new Date(2022, 5, 12, 17, 30, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
    desc: "Most important meal of the day",
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2022, 5, 12, 20, 0, 0, 0),
    end: new Date(2022, 5, 12, 21, 0, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2022, 5, 13, 7, 0, 0),
    end: new Date(2022, 5, 13, 10, 30, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2022, 5, 17, 19, 30, 0),
    end: new Date(2022, 5, 18, 2, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2022, 5, 20, 19, 30, 0),
    end: new Date(2022, 5, 22, 2, 0, 0),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    url: "http:demourl.com",
    allocatedBy: "mr.Rayn Ronalds",
  },
];

const Calendar = () => {
  const calendarRef = useRef(null);

  return (
    <div className="border border-slate-200 bg-white p-4 md:p-6 rounded-b-lg">
      <FullCalendar
        innerRef={calendarRef}
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable
        selectable
        height={550}
        events={events}
      />
    </div>
  );
};

export default Calendar;
