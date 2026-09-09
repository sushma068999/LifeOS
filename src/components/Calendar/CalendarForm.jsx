import { useState } from "react";

export default function CalendarForm({
    date,
    calendars = [],
    event = null,
    onAdd,
    onUpdate,
    onDelete,
    onClose,
}) {
    const isEditing = Boolean(event);

    const [title, setTitle] = useState(
        event?.title ?? ""
    );

    const [type, setType] = useState(
        event?.type ?? "event"
    );

    const [calendarId, setCalendarId] =
        useState(
            event?.calendarId ??
            calendars[0]?.id ??
            ""
        );

    const [startTime, setStartTime] =
        useState(
            event?.startTime ?? ""
        );

    const [endTime, setEndTime] =
        useState(
            event?.endTime ?? ""
        );

    const [timeError, setTimeError] =
        useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        if (
            type === "event" &&
            startTime &&
            endTime
        ) {
            if (startTime >= endTime) {
                setTimeError(
                    "End time must be later than start time."
                );
                return;
            }
        }

        setTimeError("");

        const updatedEvent = {
            ...(event ?? {}),

            id:
                event?.id ??
                crypto.randomUUID(),

            title: title.trim(),

            date: new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
            ),

            type,

            calendarId,

            startTime,

            endTime:
                type === "event"
                    ? endTime
                    : "",
        };

        if (isEditing) {
            onUpdate(updatedEvent);
        } else {
            onAdd(updatedEvent);
        }

        onClose();
    }

    function handleDelete() {
        if (!event) {
            return;
        }

        onDelete(event.id);
        onClose();
    }

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1000,
                background:
                    "rgba(0, 0, 0, 0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
            onMouseDown={onClose}
        >
            <form
                onSubmit={handleSubmit}
                onMouseDown={(e) =>
                    e.stopPropagation()
                }
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    background:
                        "var(--bg-surface)",
                    border:
                        "1px solid var(--border)",
                    borderRadius: "20px",
                    padding: "24px",
                    boxShadow:
                        "var(--shadow-lg)",
                }}
            >
                <h2
                    style={{
                        margin: "0 0 6px",
                        color:
                            "var(--text-primary)",
                        fontSize: "22px",
                    }}
                >
                    {isEditing
                        ? "Edit your plan"
                        : "Add to your day"}
                </h2>

                <p
                    style={{
                        margin: "0 0 20px",
                        color:
                            "var(--text-secondary)",
                        fontSize: "14px",
                    }}
                >
                    {date.toLocaleDateString(
                        undefined,
                        {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </p>

                {/* Title */}

                <input
                    autoFocus
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    placeholder="What are you planning?"
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "12px 14px",
                        border:
                            "1px solid var(--border)",
                        borderRadius: "12px",
                        background:
                            "var(--bg-main)",
                        color:
                            "var(--text-primary)",
                        outline: "none",
                        fontSize: "14px",
                        marginBottom: "12px",
                    }}
                />

                {/* Type */}

                <select
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                        setTimeError("");
                    }}
                    style={{
                        width: "100%",
                        padding: "12px 14px",
                        border:
                            "1px solid var(--border)",
                        borderRadius: "12px",
                        background:
                            "var(--bg-main)",
                        color:
                            "var(--text-primary)",
                        fontSize: "14px",
                        marginBottom: "12px",
                    }}
                >
                    <option value="event">
                        Event
                    </option>

                    <option value="task">
                        Task
                    </option>
                </select>

                {/* Calendar */}

                {calendars.length > 0 && (
                    <select
                        value={calendarId}
                        onChange={(e) =>
                            setCalendarId(
                                e.target.value
                            )
                        }
                        style={{
                            width: "100%",
                            padding:
                                "12px 14px",
                            border:
                                "1px solid var(--border)",
                            borderRadius:
                                "12px",
                            background:
                                "var(--bg-main)",
                            color:
                                "var(--text-primary)",
                            fontSize: "14px",
                            marginBottom:
                                "12px",
                        }}
                    >
                        {calendars.map(
                            (calendar) => (
                                <option
                                    key={
                                        calendar.id
                                    }
                                    value={
                                        calendar.id
                                    }
                                >
                                    {calendar.name}
                                </option>
                            )
                        )}
                    </select>
                )}

                {/* Start time */}

                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => {
                        setStartTime(
                            e.target.value
                        );
                        setTimeError("");
                    }}
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "12px 14px",
                        border:
                            timeError
                                ? "1px solid var(--danger)"
                                : "1px solid var(--border)",
                        borderRadius: "12px",
                        background:
                            "var(--bg-main)",
                        color:
                            "var(--text-primary)",
                        fontSize: "14px",
                        marginBottom:
                            timeError
                                ? "8px"
                                : "12px",
                    }}
                />

                {/* End time */}

                {type === "event" && (
                    <>
                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) => {
                                setEndTime(
                                    e.target.value
                                );
                                setTimeError("");
                            }}
                            style={{
                                width: "100%",
                                boxSizing:
                                    "border-box",
                                padding:
                                    "12px 14px",
                                border:
                                    timeError
                                        ? "1px solid var(--danger)"
                                        : "1px solid var(--border)",
                                borderRadius:
                                    "12px",
                                background:
                                    "var(--bg-main)",
                                color:
                                    "var(--text-primary)",
                                fontSize: "14px",
                                marginBottom:
                                    timeError
                                        ? "8px"
                                        : "12px",
                            }}
                        />

                        {timeError && (
                            <div
                                style={{
                                    marginBottom:
                                        "20px",
                                    padding:
                                        "9px 11px",
                                    borderRadius:
                                        "9px",
                                    background:
                                        "color-mix(in srgb, var(--danger) 10%, var(--bg-surface))",
                                    border:
                                        "1px solid color-mix(in srgb, var(--danger) 35%, var(--border))",
                                    color:
                                        "var(--danger)",
                                    fontSize:
                                        "12px",
                                    fontWeight:
                                        600,
                                    lineHeight:
                                        1.4,
                                }}
                            >
                                {timeError}
                            </div>
                        )}
                    </>
                )}

                <div
                    style={{
                        display: "flex",
                        justifyContent:
                            "space-between",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    {isEditing ? (
                        <button
                            type="button"
                            onClick={handleDelete}
                            style={{
                                padding:
                                    "10px 16px",
                                border:
                                    "1px solid var(--danger)",
                                borderRadius:
                                    "10px",
                                background:
                                    "transparent",
                                color:
                                    "var(--danger)",
                                cursor:
                                    "pointer",
                                fontWeight: 600,
                            }}
                        >
                            Delete
                        </button>
                    ) : (
                        <div />
                    )}

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding:
                                    "10px 16px",
                                border:
                                    "1px solid var(--border)",
                                borderRadius:
                                    "10px",
                                background:
                                    "transparent",
                                color:
                                    "var(--text-secondary)",
                                cursor:
                                    "pointer",
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            style={{
                                padding:
                                    "10px 18px",
                                border: "none",
                                borderRadius:
                                    "10px",
                                background:
                                    "var(--primary)",
                                color:
                                    "var(--text-white)",
                                cursor:
                                    "pointer",
                                fontWeight: 600,
                            }}
                        >
                            {isEditing
                                ? "Save Changes"
                                : "Add"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}