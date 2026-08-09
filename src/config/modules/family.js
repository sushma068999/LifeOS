import {
    Users,
    Heart,
    CalendarDays,
} from "lucide-react";

export const familyModule = {
    id: "family",
    title: "Family",
    icon: Users,
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
                    },
                ],
            },
        ],
    },

    widgets: [
        "familyOverview",
    ],
};