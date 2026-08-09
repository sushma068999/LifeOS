import {
    LayoutDashboard,
    BrainCircuit,
    Target,
    Heart,
} from "lucide-react";

import GreetingCard from "../../../widgets/GreetingCard/GreetingCard";
import TodayFocus from "../../../widgets/TodaysFocus/TodaysFocus";
import AIInsights from "../../../widgets/AIInsights/AIInsights";

export const widgetRegistry = {
    greeting: {
        id: "greeting",
        title: "Greeting Card",
        description:
            "Your welcome screen with greeting and quick stats.",
        icon: LayoutDashboard,
        component: GreetingCard,
        removable: false,
        system: true,
        default: true,
        category: "Dashboard",
        layout: {
            colSpan: 2,
        },
    },

    todayFocus: {
        id: "todayFocus",
        title: "Today's Focus",
        description: "Shows today's important tasks and events.",
        component: TodayFocus,
        removable: true,
        default: true,
        icon: Target,
        category: "Productivity",
        layout: {
            colSpan: 1,
        },
    },

    aiInsights: {
        id: "aiInsights",
        title: "AI Insights",
        component: AIInsights,
        removable: true,
        default: true,
        description: "AI generated productivity summary.",
        icon: BrainCircuit,
        category: "Analytics",
        layout: {
            colSpan: 1,
        },
    },

    habitTracker: {
        id: "habitTracker",
        title: "Habit Tracker",
        description: "Track your daily habits.",
        icon: Heart,
        category: "Health",
        removable: true,
        default: false,
    },
};