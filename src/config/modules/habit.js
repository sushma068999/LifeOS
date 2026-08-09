import { Target, Trophy } from "lucide-react";

export const habitsModule = {
    id: "habits",
    title: "Habits",
    icon: Target,

    sidebar: {
        student: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
            },
        ],

        professional: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
            },
        ],

        creator: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
            },
        ],

        hobbyist: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
            },
        ],

        other: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
            },
        ],
    },

    widgets: [
        "todayHabits",
        "habitInsights",
    ],
};