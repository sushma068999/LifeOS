import { useState, useEffect } from "react";

import { useUser } from "../context/UserContext";

import CalendarHeader from "../components/Calendar/CalendarHeader";
import MonthView from "../components/Calendar/MonthView";
import WeekView from "../components/Calendar/WeekView";
import CalendarForm from "../components/Calendar/CalendarForm";

import {
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
    goToPreviousWeek,
    goToNextWeek,
} from "../utils/calendarUtils";

export default function Calendar() {
    const { user } = useUser();

    const [currentDate, setCurrentDate] =
        useState(() => {
            const today = new Date();

            return new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            );
        });

    const [view, setView] =
        useState("month");

    const [events, setEvents] =
        useState(() => {
            const saved =
                localStorage.getItem(
                    "lifeos-calendar-events"
                );

            return saved
                ? JSON.parse(saved)
                : [];
        });

    const [selectedDate, setSelectedDate] =
        useState(null);

    const [selectedEvent, setSelectedEvent] =
        useState(null);

    useEffect(() => {
        localStorage.setItem(
            "lifeos-calendar-events",
            JSON.stringify(events)
        );
    }, [events]);

    function handlePrevious() {
        setCurrentDate((previous) =>
            view === "month"
                ? goToPreviousMonth(previous)
                : goToPreviousWeek(previous)
        );
    }

    function handleNext() {
        setCurrentDate((previous) =>
            view === "month"
                ? goToNextMonth(previous)
                : goToNextWeek(previous)
        );
    }

    function handleToday() {
        if (view === "month") {
            setCurrentDate(goToToday());
        } else {
            setCurrentDate(new Date());
        }
    }

    function handleAddEvent(event) {
        setEvents((previous) => [
            ...previous,
            event,
        ]);
    }

    function handleUpdateEvent(updatedEvent) {
        setEvents((previous) =>
            previous.map((event) =>
                event.id === updatedEvent.id
                    ? updatedEvent
                    : event
            )
        );
    }

    function handleDeleteEvent(eventId) {
        setEvents((previous) =>
            previous.filter(
                (event) =>
                    event.id !== eventId
            )
        );
    }

    function handleDateClick(date) {
        setSelectedEvent(null);
        setSelectedDate(date);
    }

    function getEventDate(event) {
        if (!event?.date) {
            return null;
        }

        const value = event.date;

        if (
            typeof value === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(value)
        ) {
            const [year, month, day] =
                value.split("-").map(Number);

            return new Date(
                year,
                month - 1,
                day
            );
        }

        const parsed =
            new Date(value);

        if (Number.isNaN(parsed.getTime())) {
            return null;
        }

        return new Date(
            parsed.getFullYear(),
            parsed.getMonth(),
            parsed.getDate()
        );
    }

    function handleEventClick(event) {
        const eventDate =
            getEventDate(event);

        if (!eventDate) {
            return;
        }

        setSelectedDate(eventDate);
        setSelectedEvent(event);
    }

    function closeForm() {
        setSelectedDate(null);
        setSelectedEvent(null);
    }

    function handleViewChange(nextView) {
        setView(nextView);

        if (nextView === "week") {
            setCurrentDate(new Date());
        } else {
            const today = new Date();

            setCurrentDate(
                new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    1
                )
            );
        }
    }

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "none",
                margin: 0,
                padding:
                    "8px 4px 32px",
                boxSizing: "border-box",
            }}
        >
            <CalendarHeader
                currentDate={currentDate}
                view={view}
                onViewChange={
                    handleViewChange
                }
                onPrevious={
                    handlePrevious
                }
                onToday={handleToday}
                onNext={handleNext}
            />

            {view === "month" && (
                <MonthView
                    currentDate={currentDate}
                    events={events}
                    calendars={
                        user.calendars ?? []
                    }
                    onDateClick={
                        handleDateClick
                    }
                    onEventClick={
                        handleEventClick
                    }
                />
            )}

            {view === "week" && (
                <WeekView
                    currentDate={currentDate}
                    events={events}
                    calendars={
                        user.calendars ?? []
                    }
                    onDateClick={
                        handleDateClick
                    }
                    onEventClick={
                        handleEventClick
                    }
                />
            )}

            {selectedDate && (
                <CalendarForm
                    date={selectedDate}
                    calendars={
                        user.calendars ?? []
                    }
                    event={selectedEvent}
                    onAdd={handleAddEvent}
                    onUpdate={
                        handleUpdateEvent
                    }
                    onDelete={
                        handleDeleteEvent
                    }
                    onClose={closeForm}
                />
            )}
        </div>
    );
}