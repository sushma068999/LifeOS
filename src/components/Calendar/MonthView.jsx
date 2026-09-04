import {
    getCalendarDays,
    isSameDay,
    formatDayNumber,
} from "../../utils/calendarUtils";

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export default function MonthView({
    currentDate,
    events = [],
    calendars = [],
    onDateClick,
}) {
    const calendarDays =
        getCalendarDays(currentDate);

    const today = new Date();

    return (
        <section
            style={{
                width: "100%",
                background: "var(--bg-surface)",
                border:
                    "1px solid var(--border)",
                borderRadius:
                    "var(--radius-lg)",
                overflow: "hidden",
                boxShadow:
                    "var(--shadow-sm)",
            }}
        >
            {/* Weekday header */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(7, minmax(0, 1fr))",
                    background:
                        "var(--bg-sidebar)",
                    borderBottom:
                        "1px solid var(--border)",
                }}
            >
                {weekdays.map((day) => (
                    <div
                        key={day}
                        style={{
                            padding:
                                "var(--space-3) var(--space-2)",
                            textAlign: "center",
                            color:
                                "var(--text-secondary)",
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform:
                                "uppercase",
                            letterSpacing:
                                "0.05em",
                        }}
                    >
                        {day.slice(0, 3)}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(7, minmax(0, 1fr))",
                }}
            >
                {calendarDays.map(
                    ({
                        date,
                        isCurrentMonth,
                    }) => {
                        const todayCell =
                            isSameDay(
                                date,
                                today
                            );

                        const dayEvents =
                            events.filter((event) =>
                                isSameDay(
                                    new Date(event.date),
                                    date
                                )
                            );

                        return (
                            <button
                                key={date.toISOString()}
                                onClick={() =>
                                    onDateClick(date)
                                }
                                style={{
                                    minHeight: "125px",
                                    padding:
                                        "var(--space-3)",
                                    border: "none",
                                    borderRight:
                                        "1px solid var(--border-light)",
                                    borderBottom:
                                        "1px solid var(--border-light)",
                                    background:
                                        todayCell
                                            ? "var(--primary-soft)"
                                            : "var(--bg-surface)",
                                    opacity:
                                        isCurrentMonth
                                            ? 1
                                            : 0.45,
                                    transition:
                                        "var(--transition-fast)",
                                    boxSizing:
                                        "border-box",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontFamily:
                                        "inherit",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background =
                                        todayCell
                                            ? "var(--primary-soft)"
                                            : "var(--bg-hover)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background =
                                        todayCell
                                            ? "var(--primary-soft)"
                                            : "var(--bg-surface)";
                                }}
                            >
                                {/* Date number */}

                                <div
                                    style={{
                                        display:
                                            "flex",
                                        justifyContent:
                                            "flex-end",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            display:
                                                "flex",
                                            alignItems:
                                                "center",
                                            justifyContent:
                                                "center",
                                            borderRadius:
                                                "50%",
                                            background:
                                                todayCell
                                                    ? "var(--primary)"
                                                    : "transparent",
                                            color:
                                                todayCell
                                                    ? "var(--text-white)"
                                                    : isCurrentMonth
                                                    ? "var(--text-primary)"
                                                    : "var(--text-muted)",
                                            fontSize:
                                                "14px",
                                            fontWeight:
                                                todayCell
                                                    ? 700
                                                    : 600,
                                        }}
                                    >
                                        {formatDayNumber(
                                            date
                                        )}
                                    </span>
                                </div>

                                {/* Events */}

                                <div
                                    style={{
                                        display:
                                            "flex",
                                        flexDirection:
                                            "column",
                                        gap: "5px",
                                        marginTop:
                                            "8px",
                                    }}
                                >
                                    {dayEvents.map((event) => {
                                        const eventCalendar =
                                            calendars.find(
                                                (calendar) =>
                                                    calendar.id ===
                                                    event.calendarId
                                            );

                                        const calendarColor =
                                            eventCalendar?.color ??
                                            "var(--primary)";

                                        return (
                                            <div
                                                key={event.id}
                                                style={{
                                                    padding: "6px 8px",
                                                    borderRadius: "7px",

                                                    background:
                                                        `color-mix(
                                                            in srgb,
                                                            ${calendarColor} 14%,
                                                            var(--bg-surface)
                                                        )`,

                                                    borderLeft:
                                                        `3px solid ${calendarColor}`,

                                                    color:
                                                        "var(--text-primary)",

                                                    fontSize: "12px",

                                                    fontWeight: 600,

                                                    overflow: "hidden",

                                                    textOverflow:
                                                        "ellipsis",

                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {event.title}
                                            </div>
                                        );
                                    })}
                                </div>
                            </button>
                        );
                    }
                )}
            </div>
        </section>
    );
}