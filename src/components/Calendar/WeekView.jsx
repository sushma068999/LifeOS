import {
    getWeekDays,
    isSameDay,
} from "../../utils/calendarUtils";

const START_HOUR = 6;
const END_HOUR = 22;
const HOUR_HEIGHT = 70;

const weekdays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
];

export default function WeekView({
    currentDate,
    events = [],
    calendars = [],
    onDateClick,
    onEventClick,
}) {
    const weekDays =
        getWeekDays(currentDate);

    const today = new Date();

    const hours = [];

    for (
        let hour = START_HOUR;
        hour <= END_HOUR;
        hour++
    ) {
        hours.push(hour);
    }

    function getCalendar(calendarId) {
        return calendars.find(
            (calendar) =>
                calendar.id === calendarId
        );
    }

    function formatHour(hour) {
        const suffix =
            hour >= 12 ? "PM" : "AM";

        const displayHour =
            hour % 12 === 0
                ? 12
                : hour % 12;

        return `${displayHour}:00 ${suffix}`;
    }

    function formatTime(time) {
        if (!time) {
            return "";
        }

        const [hour, minute] =
            time.split(":").map(Number);

        if (
            Number.isNaN(hour) ||
            Number.isNaN(minute) ||
            hour < 0 ||
            hour > 23 ||
            minute < 0 ||
            minute > 59
        ) {
            return time;
        }

        const suffix =
            hour >= 12 ? "PM" : "AM";

        const displayHour =
            hour % 12 === 0
                ? 12
                : hour % 12;

        return `${displayHour}:${String(
            minute
        ).padStart(2, "0")} ${suffix}`;
    }

    function getMinutes(time) {
        if (!time) {
            return null;
        }

        const parts =
            time.split(":");

        if (parts.length !== 2) {
            return null;
        }

        const hour =
            Number(parts[0]);

        const minute =
            Number(parts[1]);

        if (
            Number.isNaN(hour) ||
            Number.isNaN(minute) ||
            hour < 0 ||
            hour > 23 ||
            minute < 0 ||
            minute > 59
        ) {
            return null;
        }

        return (
            hour * 60 + minute
        );
    }

    function getEventStyle(event) {
        const startMinutes =
            getMinutes(event.startTime);

        const endMinutes =
            getMinutes(event.endTime);

        if (
            startMinutes === null
        ) {
            return null;
        }

        const dayStartMinutes =
            START_HOUR * 60;

        const dayEndMinutes =
            END_HOUR * 60;

        const visibleStart =
            Math.max(
                startMinutes,
                dayStartMinutes
            );

        const visibleEnd =
            Math.min(
                endMinutes ??
                    startMinutes + 60,
                dayEndMinutes
            );

        const top =
            ((visibleStart -
                dayStartMinutes) /
                60) *
            HOUR_HEIGHT;

        let duration;

        if (
            event.type === "event" &&
            endMinutes !== null &&
            endMinutes > startMinutes
        ) {
            duration =
                visibleEnd -
                visibleStart;
        } else {
            duration = 60;
        }

        const height =
            Math.max(
                38,
                (duration / 60) *
                    HOUR_HEIGHT
            );

        return {
            top: `${top}px`,
            height: `${height}px`,
        };
    }

    function getDayEvents(date) {
        return events.filter(
            (event) => {
                if (!event?.date) {
                    return false;
                }

                const value =
                    event.date;

                let eventDate;

                if (
                    typeof value ===
                        "string" &&
                    /^\d{4}-\d{2}-\d{2}$/.test(
                        value
                    )
                ) {
                    const [
                        year,
                        month,
                        day,
                    ] =
                        value
                            .split("-")
                            .map(Number);

                    eventDate =
                        new Date(
                            year,
                            month - 1,
                            day
                        );
                } else {
                    const parsed =
                        new Date(value);

                    if (
                        Number.isNaN(
                            parsed.getTime()
                        )
                    ) {
                        return false;
                    }

                    eventDate =
                        new Date(
                            parsed.getFullYear(),
                            parsed.getMonth(),
                            parsed.getDate()
                        );
                }

                return isSameDay(
                    eventDate,
                    date
                );
            }
        );
    }

    return (
        <section
            style={{
                width: "100%",
                background:
                    "var(--bg-surface)",
                border:
                    "1px solid var(--border)",
                borderRadius:
                    "var(--radius-lg)",
                overflow: "hidden",
                boxShadow:
                    "var(--shadow-sm)",
            }}
        >
            {/* Week header */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "80px repeat(7, minmax(0, 1fr))",
                    borderBottom:
                        "1px solid var(--border)",
                    background:
                        "var(--bg-sidebar)",
                }}
            >
                <div
                    style={{
                        borderRight:
                            "1px solid var(--border)",
                    }}
                />

                {weekDays.map(
                    (date, index) => {
                        const isToday =
                            isSameDay(
                                date,
                                today
                            );

                        return (
                            <div
                                key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                                style={{
                                    padding:
                                        "var(--space-4)",
                                    textAlign:
                                        "center",
                                    borderRight:
                                        index < 6
                                            ? "1px solid var(--border-light)"
                                            : "none",
                                    background:
                                        isToday
                                            ? "var(--primary-soft)"
                                            : "var(--bg-sidebar)",
                                }}
                            >
                                <div
                                    style={{
                                        color:
                                            "var(--text-secondary)",
                                        fontSize:
                                            "11px",
                                        fontWeight:
                                            700,
                                        textTransform:
                                            "uppercase",
                                        letterSpacing:
                                            "0.05em",
                                        marginBottom:
                                            "6px",
                                    }}
                                >
                                    {
                                        weekdays[
                                            index
                                        ]
                                    }
                                </div>

                                <div
                                    style={{
                                        width:
                                            "32px",
                                        height:
                                            "32px",
                                        margin:
                                            "0 auto",
                                        display:
                                            "flex",
                                        alignItems:
                                            "center",
                                        justifyContent:
                                            "center",
                                        borderRadius:
                                            "50%",
                                        background:
                                            isToday
                                                ? "var(--primary)"
                                                : "transparent",
                                        color:
                                            isToday
                                                ? "var(--text-white)"
                                                : "var(--text-primary)",
                                        fontWeight:
                                            700,
                                    }}
                                >
                                    {date.getDate()}
                                </div>
                            </div>
                        );
                    }
                )}
            </div>

            {/* Time grid */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "80px repeat(7, minmax(0, 1fr))",
                    minHeight: `${
                        hours.length *
                        HOUR_HEIGHT
                    }px`,
                    overflowX: "auto",
                }}
            >
                {/* Time labels */}

                <div
                    style={{
                        background:
                            "var(--bg-sidebar)",
                        borderRight:
                            "1px solid var(--border)",
                    }}
                >
                    {hours.map((hour) => (
                        <div
                            key={hour}
                            style={{
                                height: `${HOUR_HEIGHT}px`,
                                boxSizing:
                                    "border-box",
                                padding:
                                    "8px 10px 0 0",
                                textAlign:
                                    "right",
                                color:
                                    "var(--text-muted)",
                                fontSize:
                                    "11px",
                                fontWeight:
                                    600,
                                borderBottom:
                                    "1px solid var(--border-light)",
                            }}
                        >
                            {formatHour(hour)}
                        </div>
                    ))}
                </div>

                {/* Days */}

                {weekDays.map(
                    (date, dayIndex) => {
                        const dayEvents =
                            getDayEvents(date);

                        const timedEvents =
                            dayEvents.filter(
                                (event) =>
                                    event.startTime
                            );

                        const untimedTasks =
                            dayEvents.filter(
                                (event) =>
                                    !event.startTime
                            );

                        const isToday =
                            isSameDay(
                                date,
                                today
                            );

                        return (
                            <div
                                key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
                                style={{
                                    position:
                                        "relative",
                                    minHeight: `${
                                        hours.length *
                                        HOUR_HEIGHT
                                    }px`,
                                    borderRight:
                                        dayIndex < 6
                                            ? "1px solid var(--border-light)"
                                            : "none",
                                    background:
                                        isToday
                                            ? "rgba(110, 155, 138, 0.035)"
                                            : "var(--bg-surface)",
                                }}
                                onDoubleClick={() =>
                                    onDateClick(
                                        date
                                    )
                                }
                            >
                                {/* Hour lines */}

                                {hours.map(
                                    (hour) => (
                                        <div
                                            key={
                                                hour
                                            }
                                            style={{
                                                position:
                                                    "absolute",
                                                top: `${
                                                    (hour -
                                                        START_HOUR) *
                                                    HOUR_HEIGHT
                                                }px`,
                                                left: 0,
                                                right: 0,
                                                height:
                                                    "1px",
                                                background:
                                                    "var(--border-light)",
                                                pointerEvents:
                                                    "none",
                                            }}
                                        />
                                    )
                                )}

                                {/* Untimed tasks */}

                                {untimedTasks.length >
                                    0 && (
                                    <div
                                        style={{
                                            position:
                                                "absolute",
                                            top:
                                                "8px",
                                            left:
                                                "8px",
                                            right:
                                                "8px",
                                            display:
                                                "flex",
                                            flexDirection:
                                                "column",
                                            gap:
                                                "5px",
                                            zIndex:
                                                3,
                                        }}
                                    >
                                        {untimedTasks.map(
                                            (event) => {
                                                const calendar =
                                                    getCalendar(
                                                        event.calendarId
                                                    );

                                                const color =
                                                    calendar?.color ??
                                                    "var(--primary)";

                                                return (
                                                    <button
                                                        key={
                                                            event.id
                                                        }
                                                        onClick={(
                                                            e
                                                        ) => {
                                                            e.stopPropagation();

                                                            onEventClick(
                                                                event
                                                            );
                                                        }}
                                                        style={{
                                                            width:
                                                                "100%",
                                                            padding:
                                                                "7px 9px",
                                                            border:
                                                                "none",
                                                            borderLeft:
                                                                `3px solid ${color}`,
                                                            borderRadius:
                                                                "7px",
                                                            background:
                                                                `color-mix(in srgb, ${color} 12%, var(--bg-surface))`,
                                                            color:
                                                                "var(--text-primary)",
                                                            textAlign:
                                                                "left",
                                                            fontFamily:
                                                                "inherit",
                                                            fontSize:
                                                                "11px",
                                                            fontWeight:
                                                                650,
                                                            cursor:
                                                                "pointer",
                                                            overflow:
                                                                "hidden",
                                                            textOverflow:
                                                                "ellipsis",
                                                            whiteSpace:
                                                                "nowrap",
                                                        }}
                                                    >
                                                        {
                                                            event.title
                                                        }
                                                    </button>
                                                );
                                            }
                                        )}
                                    </div>
                                )}

                                {/* Timed events */}

                                {timedEvents.map(
                                    (event) => {
                                        const calendar =
                                            getCalendar(
                                                event.calendarId
                                            );

                                        const color =
                                            calendar?.color ??
                                            "var(--primary)";

                                        const eventStyle =
                                            getEventStyle(
                                                event
                                            );

                                        if (
                                            !eventStyle
                                        ) {
                                            return null;
                                        }

                                        return (
                                            <button
                                                key={
                                                    event.id
                                                }
                                                onClick={(
                                                    e
                                                ) => {
                                                    e.stopPropagation();

                                                    onEventClick(
                                                        event
                                                    );
                                                }}
                                                style={{
                                                    position:
                                                        "absolute",
                                                    left:
                                                        "7px",
                                                    right:
                                                        "7px",
                                                    ...eventStyle,
                                                    zIndex:
                                                        4,
                                                    padding:
                                                        "8px 9px",
                                                    border:
                                                        "none",
                                                    borderLeft:
                                                        `4px solid ${color}`,
                                                    borderRadius:
                                                        "8px",
                                                    background:
                                                        `color-mix(in srgb, ${color} 15%, var(--bg-surface))`,
                                                    color:
                                                        "var(--text-primary)",
                                                    textAlign:
                                                        "left",
                                                    fontFamily:
                                                        "inherit",
                                                    cursor:
                                                        "pointer",
                                                    overflow:
                                                        "hidden",
                                                    boxSizing:
                                                        "border-box",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize:
                                                            "10px",
                                                        color:
                                                            "var(--text-secondary)",
                                                        fontWeight:
                                                            600,
                                                        marginBottom:
                                                            "3px",
                                                    }}
                                                >
                                                    {formatTime(
                                                        event.startTime
                                                    )}

                                                    {event.endTime &&
                                                        event.type ===
                                                            "event" &&
                                                        ` – ${formatTime(
                                                            event.endTime
                                                        )}`}
                                                </div>

                                                <div
                                                    style={{
                                                        fontSize:
                                                            "12px",
                                                        fontWeight:
                                                            700,
                                                        lineHeight:
                                                            1.25,
                                                    }}
                                                >
                                                    {
                                                        event.title
                                                    }
                                                </div>

                                                {event.type ===
                                                    "task" && (
                                                    <div
                                                        style={{
                                                            marginTop:
                                                                "4px",
                                                            fontSize:
                                                                "9px",
                                                            color:
                                                                "var(--text-secondary)",
                                                            textTransform:
                                                                "uppercase",
                                                            letterSpacing:
                                                                "0.04em",
                                                        }}
                                                    >
                                                        Task
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    }
                                )}

                                {/* Add item */}

                                <button
                                    onClick={() =>
                                        onDateClick(
                                            date
                                        )
                                    }
                                    aria-label={`Add item on ${
                                        weekdays[
                                            dayIndex
                                        ]
                                    }`}
                                    style={{
                                        position:
                                            "absolute",
                                        inset: 0,
                                        background:
                                            "transparent",
                                        border:
                                            "none",
                                        cursor:
                                            "pointer",
                                        zIndex: 1,
                                    }}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
}