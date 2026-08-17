import { BookHeart } from "lucide-react";

export const journalModule = {
    id: "journal",
    title: "Journal",
    icon: BookHeart,

    options: {
        journal: {
            title: "Journal",
        },
    },

    defaults: {
        student: ["journal"],
        professional: ["journal"],
        creator: ["journal"],
        hobbyist: ["journal"],
        other: ["journal"],
    },

    sidebar: {
        student: [
            {
                title: "Journal",
                icon: BookHeart,
                path: "/journal",
                option: "journal",
            },
        ],

        professional: [
            {
                title: "Journal",
                icon: BookHeart,
                path: "/journal",
                option: "journal",
            },
        ],

        creator: [
            {
                title: "Journal",
                icon: BookHeart,
                path: "/journal",
                option: "journal",
            },
        ],

        hobbyist: [
            {
                title: "Journal",
                icon: BookHeart,
                path: "/journal",
                option: "journal",
            },
        ],

        other: [
            {
                title: "Journal",
                icon: BookHeart,
                path: "/journal",
                option: "journal",
            },
        ],
    },

    widgets: [
        "journalPreview",
    ],
};