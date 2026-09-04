import defaultCalendars from "../config/calendars/defaultCalendars";

export function buildDefaultCalendars(profile) {
    const calendars =
        defaultCalendars[profile] ??
        defaultCalendars.other;

    return calendars.map((calendar) => ({
        ...calendar,
        color: `var(${calendar.color})`,
    }));
}