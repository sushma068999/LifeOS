import GreetingCard from "../../../widgets/GreetingCard/GreetingCard";
import TodayFocus from "../../../widgets/TodaysFocus/TodaysFocus";
import AIInsights from "../../../widgets/AIInsights/AIInsights";

export const widgetRegistry = {
    greeting: {
        id: "greeting",
        title: "Greeting",
        component: GreetingCard,
        removable: false,
        default: true,
    },

    todayFocus: {
        id: "todayFocus",
        title: "Today's Focus",
        component: TodayFocus,
        removable: true,
        default: true,
    },

    aiInsights: {
        id: "aiInsights",
        title: "AI Insights",
        component: AIInsights,
        removable: true,
        default: true,
    },
};