export function getMonthStart(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    );
}

export function getMonthEnd(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    );
}

export function getCalendarDays(date) {
    const monthStart = getMonthStart(date);
    const monthEnd = getMonthEnd(date);

    // Monday = 0 ... Sunday = 6
    const startDay =
        (monthStart.getDay() + 6) % 7;

    const daysInMonth =
        monthEnd.getDate();

    const previousMonthDays =
        new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();

    const days = [];

    // Previous month's trailing days
    for (let i = startDay - 1; i >= 0; i--) {
        days.push({
            date: new Date(
                date.getFullYear(),
                date.getMonth() - 1,
                previousMonthDays - i
            ),
            isCurrentMonth: false,
        });
    }

    // Current month
    for (let day = 1; day <= daysInMonth; day++) {
        days.push({
            date: new Date(
                date.getFullYear(),
                date.getMonth(),
                day
            ),
            isCurrentMonth: true,
        });
    }

    // Next month's leading days
    const remainingDays =
        42 - days.length;

    for (let day = 1; day <= remainingDays; day++) {
        days.push({
            date: new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                day
            ),
            isCurrentMonth: false,
        });
    }

    return days;
}

export function isSameDay(first, second) {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}

export function formatMonthYear(date) {
    return new Intl.DateTimeFormat(
        undefined,
        {
            month: "long",
            year: "numeric",
        }
    ).format(date);
}

export function formatDayNumber(date) {
    return new Intl.DateTimeFormat(
        undefined,
        {
            day: "numeric",
        }
    ).format(date);
}

export function goToPreviousMonth(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
    );
}

export function goToNextMonth(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
    );
}

export function goToToday() {
    const today = new Date();

    return new Date(
        today.getFullYear(),
        today.getMonth(),
        1
    );
}

export function getWeekDays(date) {
    const current = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    // Convert JavaScript Sunday = 0
    // into Monday = 0
    const day =
        (current.getDay() + 6) % 7;

    const monday = new Date(current);

    monday.setDate(
        current.getDate() - day
    );

    const weekDays = [];

    for (let i = 0; i < 7; i++) {
        const weekDay =
            new Date(monday);

        weekDay.setDate(
            monday.getDate() + i
        );

        weekDays.push(weekDay);
    }

    return weekDays;
}


export function goToPreviousWeek(date) {
    const previousWeek =
        new Date(date);

    previousWeek.setDate(
        date.getDate() - 7
    );

    return previousWeek;
}


export function goToNextWeek(date) {
    const nextWeek =
        new Date(date);

    nextWeek.setDate(
        date.getDate() + 7
    );

    return nextWeek;
}


export function formatWeekRange(date) {
    const weekDays =
        getWeekDays(date);

    const firstDay =
        weekDays[0];

    const lastDay =
        weekDays[6];

    const sameMonth =
        firstDay.getMonth() ===
        lastDay.getMonth();

    const sameYear =
        firstDay.getFullYear() ===
        lastDay.getFullYear();

    if (sameMonth && sameYear) {
        return `${firstDay.toLocaleDateString(
            undefined,
            {
                month: "long",
                day: "numeric",
            }
        )} – ${lastDay.getDate()}, ${
            lastDay.getFullYear()
        }`;
    }

    return `${firstDay.toLocaleDateString(
        undefined,
        {
            month: "short",
            day: "numeric",
        }
    )} – ${lastDay.toLocaleDateString(
        undefined,
        {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    )}`;
}