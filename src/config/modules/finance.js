import {
    Wallet,
    PiggyBank,
    Coins,
    Landmark,
    Shield,
    Receipt,
    TrendingUp,
} from "lucide-react";

export const financeModule = {
    id: "finance",
    title: "Finance",
    icon: Wallet,
    sidebar: {
        student: [
            {
                title: "Finance",
                icon: Wallet,
                children: [
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                    },
                    {
                        title: "Budget",
                        icon: PiggyBank,
                        path: "/budget",
                    },
                ],
            },
        ],

        professional: [
            {
                title: "Finance",
                icon: Wallet,
                children: [
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                    },
                    {
                        title: "Budget",
                        icon: PiggyBank,
                        path: "/budget",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                    },
                    {
                        title: "Investments",
                        icon: Landmark,
                        path: "/investments",
                    },
                    {
                        title: "Insurance",
                        icon: Shield,
                        path: "/insurance",
                    },
                ],
            },
        ],

        creator: [
            {
                title: "Finance",
                icon: Wallet,
                children: [
                    {
                        title: "Revenue",
                        icon: TrendingUp,
                        path: "/revenue",
                    },
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                    },
                ],
            },
        ],

        hobbyist: [
            {
                title: "Finance",
                icon: Wallet,
                children: [
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                    },
                ],
            },
        ],

        other: [
            {
                title: "Finance",
                icon: Wallet,
                children: [
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                    },
                ],
            },
        ],
    },

    widgets: [
        "budgetSummary",
    ],
};