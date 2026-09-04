import { useState, useEffect } from "react";

import { useUser } from "../context/UserContext";

import CalendarHeader from "../components/Calendar/CalendarHeader";
import MonthView from "../components/Calendar/MonthView";
import CalendarForm from "../components/Calendar/CalendarForm";

import {
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
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

    useEffect(() => {
        localStorage.setItem(
            "lifeos-calendar-events",
            JSON.stringify(events)
        );
    }, [events]);

    function handlePrevious() {
        setCurrentDate((previous) =>
            goToPreviousMonth(previous)
        );
    }

    function handleNext() {
        setCurrentDate((previous) =>
            goToNextMonth(previous)
        );
    }

    function handleToday() {
        setCurrentDate(goToToday());
    }

    function handleAddEvent(event) {
        setEvents((previous) => [
            ...previous,
            event,
        ]);
    }

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "none",
                margin: 0,
                padding: "8px 4px 32px",
                boxSizing: "border-box",
            }}
        >
            <CalendarHeader
                currentDate={currentDate}
                view={view}
                onViewChange={setView}
                onPrevious={handlePrevious}
                onToday={handleToday}
                onNext={handleNext}
            />

            {view === "month" && (
                <MonthView
                    currentDate={currentDate}
                    events={events}
                    calendars={user.calendars ?? []}
                    onDateClick={setSelectedDate}
                />
            )}

            {view === "week" && (
                <div
                    style={{
                        padding:
                            "var(--space-7)",
                        textAlign:
                            "center",
                        background:
                            "var(--bg-surface)",
                        border:
                            "1px solid var(--border)",
                        borderRadius:
                            "var(--radius-lg)",
                        color:
                            "var(--text-secondary)",
                    }}
                >
                    Week view is coming next.
                </div>
            )}

            {selectedDate && (
                <CalendarForm
                    date={selectedDate}
                    calendars={
                        user.calendars ?? []
                    }
                    onAdd={handleAddEvent}
                    onClose={() =>
                        setSelectedDate(null)
                    }
                />
            )}
        </div>
    );
}