import { Target, Trophy } from "lucide-react";

export const habitsModule = {
    id: "habits",
    title: "Habits",
    icon: Target,

    options: {
        habitTracker: {
            title: "Habit Tracker",
        },
        goals: {
            title: "Goals",
        },
    },

    defaults: {
        student: ["habitTracker", "goals"],
        professional: ["habitTracker", "goals"],
        creator: ["habitTracker", "goals"],
        hobbyist: ["habitTracker", "goals"],
        other: ["habitTracker"],
    },

    sidebar: {
        student: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
                option: "habitTracker",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
                option: "goals",
            },
        ],

        professional: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
                option: "habitTracker",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
                option: "goals",
            },
        ],

        creator: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
                option: "habitTracker",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
                option: "goals",
            },
        ],

        hobbyist: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
                option: "habitTracker",
            },
            {
                title: "Goals",
                icon: Trophy,
                path: "/goals",
                option: "goals",
            },
        ],

        other: [
            {
                title: "Habit Tracker",
                icon: Target,
                path: "/habits",
                option: "habitTracker",
            },
        ],
    },

    widgets: [
        "todayHabits",
        "habitInsights",
    ],
};