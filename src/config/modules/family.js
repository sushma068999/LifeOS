import {
    Users,
    CalendarDays,
} from "lucide-react";

export const familyModule = {
    id: "family",
    title: "Family",
    icon: Users,

    options: {
        sharedCalendar: {
            title: "Shared Calendar",
        },
    },

    defaults: {
        student: ["sharedCalendar"],
        professional: ["sharedCalendar"],
        creator: ["sharedCalendar"],
        hobbyist: ["sharedCalendar"],
        other: ["sharedCalendar"],
    },

    sidebar: {
        student: [
            {
                title: "Family",
                icon: Users,
                children: [
                    {
                        title: "Shared Calendar",
                        icon: CalendarDays,
                        path: "/family-calendar",
                        option: "sharedCalendar",
                    },
                ],
            },
        ],

        professional: [
            {
                title: "Family",
                icon: Users,
                children: [
                    {
                        title: "Shared Calendar",
                        icon: CalendarDays,
                        path: "/family-calendar",
                        option: "sharedCalendar",
                    },
                ],
            },
        ],

        creator: [
            {
                title: "Family",
                icon: Users,
                children: [
                    {
                        title: "Shared Calendar",
                        icon: CalendarDays,
                        path: "/family-calendar",
                        option: "sharedCalendar",
                    },
                ],
            },
        ],

        hobbyist: [
            {
                title: "Family",
                icon: Users,
                children: [
                    {
                        title: "Shared Calendar",
                        icon: CalendarDays,
                        path: "/family-calendar",
                        option: "sharedCalendar",
                    },
                ],
            },
        ],

        other: [
            {
                title: "Family",
                icon: Users,
                children: [
                    {
                        title: "Shared Calendar",
                        icon: CalendarDays,
                        path: "/family-calendar",
                        option: "sharedCalendar",
                    },
                ],
            },
        ],
    },

    widgets: [
        "familyOverview",
    ],
};