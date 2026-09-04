import {
    ChevronLeft,
    ChevronRight,
    CalendarDays,
} from "lucide-react";

import { formatMonthYear } from "../../utils/calendarUtils";

export default function CalendarHeader({
    currentDate,
    view,
    onViewChange,
    onPrevious,
    onToday,
    onNext,
}) {
    const views = [
        {
            id: "month",
            label: "Month",
        },
        {
            id: "week",
            label: "Week",
        },
    ];

    return (
        <header
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-5)",
                marginBottom: "var(--space-5)",
            }}
        >
            {/* Top section */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "var(--gap-md)",
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                        }}
                    >
                        <CalendarDays
                            size={24}
                            color="var(--primary)"
                        />

                        <h1
                            style={{
                                margin: 0,
                                fontSize: "32px",
                                lineHeight: 1.2,
                                fontWeight: 700,
                                color: "var(--text-primary)",
                            }}
                        >
                            Calendar
                        </h1>
                    </div>

                    <p
                        style={{
                            margin: 0,
                            color: "var(--text-secondary)",
                            fontSize: "14px",
                        }}
                    >
                        Plan your time, see what is ahead,
                        and keep your life in one place.
                    </p>
                </div>

                {/* View switcher */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "4px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                    }}
                >
                    {views.map((item) => {
                        const selected =
                            view === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() =>
                                    onViewChange(item.id)
                                }
                                style={{
                                    border: "none",
                                    borderRadius:
                                        "var(--radius-sm)",
                                    padding:
                                        "var(--space-2) var(--space-4)",
                                    background: selected
                                        ? "var(--primary)"
                                        : "transparent",
                                    color: selected
                                        ? "var(--text-white)"
                                        : "var(--text-secondary)",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    transition:
                                        "var(--transition-fast)",
                                }}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Navigation */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--gap-md)",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-2)",
                    }}
                >
                    <button
                        onClick={onPrevious}
                        aria-label="Previous month"
                        style={navigationButton}
                    >
                        <ChevronLeft size={19} />
                    </button>

                    <button
                        onClick={onNext}
                        aria-label="Next month"
                        style={navigationButton}
                    >
                        <ChevronRight size={19} />
                    </button>

                    <button
                        onClick={onToday}
                        style={{
                            ...todayButton,
                            marginLeft:
                                "var(--space-2)",
                        }}
                    >
                        Today
                    </button>
                </div>

                <h2
                    style={{
                        margin: 0,
                        color: "var(--text-primary)",
                        fontSize: "22px",
                        fontWeight: 650,
                    }}
                >
                    {formatMonthYear(currentDate)}
                </h2>

                <div
                    style={{
                        minWidth: "110px",
                    }}
                />
            </div>
        </header>
    );
}

const navigationButton = {
    width: "38px",
    height: "38px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)",
    background: "var(--bg-surface)",
    color: "var(--text-secondary)",
    cursor: "pointer",
    transition: "var(--transition-fast)",
};

const todayButton = {
    height: "38px",
    padding:
        "0 var(--button-padding-x)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)",
    background: "var(--bg-surface)",
    color: "var(--primary-dark)",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
};