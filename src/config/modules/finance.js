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

    options: {
        expenses: {
            title: "Expenses",
        },
        budget: {
            title: "Budget",
        },
        savings: {
            title: "Savings",
        },
        investments: {
            title: "Investments",
        },
        insurance: {
            title: "Insurance",
        },
        revenue: {
            title: "Revenue",
        },
    },

    defaults: {
        student: [
            "expenses",
            "savings",
            "budget",
        ],

        professional: [
            "expenses",
            "budget",
            "savings",
            "investments",
            "insurance",
        ],

        creator: [
            "revenue",
            "expenses",
            "savings",
        ],

        hobbyist: [
            "expenses",
            "savings",
        ],

        other: [
            "expenses",
        ],
    },

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
                        option: "expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                        option: "savings",
                    },
                    {
                        title: "Budget",
                        icon: PiggyBank,
                        path: "/budget",
                        option: "budget",
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
                        option: "expenses",
                    },
                    {
                        title: "Budget",
                        icon: PiggyBank,
                        path: "/budget",
                        option: "budget",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                        option: "savings",
                    },
                    {
                        title: "Investments",
                        icon: Landmark,
                        path: "/investments",
                        option: "investments",
                    },
                    {
                        title: "Insurance",
                        icon: Shield,
                        path: "/insurance",
                        option: "insurance",
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
                        option: "revenue",
                    },
                    {
                        title: "Expenses",
                        icon: Receipt,
                        path: "/expenses",
                        option: "expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                        option: "savings",
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
                        option: "expenses",
                    },
                    {
                        title: "Savings",
                        icon: Coins,
                        path: "/savings",
                        option: "savings",
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
                        option: "expenses",
                    },
                ],
            },
        ],
    },

    widgets: [
        "budgetSummary",
    ],
};