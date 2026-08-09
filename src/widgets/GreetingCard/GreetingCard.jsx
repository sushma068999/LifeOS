import { useUser } from "../../context/UserContext";
import QuickStats from "../QuickStats/QuickStats";
import { cardStyle } from "../../styles/cardStyle";

import { useDashboard } from "../../context/DashboardContext";
import { widgetDefaults } from "../../config/widgetDefaults";

import { Sunrise, Sun, Sunset, Moon, CheckSquare, CalendarDays, Heart, Target } from "lucide-react";

export default function GreetingCard() {
    const { user } = useUser();

    const { widgetSettings } = useDashboard();

    const settings = {
        ...widgetDefaults.greeting,
        ...(widgetSettings.greeting ?? {}),
    };

    const now = new Date();
    const hour = now.getHours();

    let blockName = " ";
    let BlockIcon = Sun;
    if (hour >= 5 && hour < 12) {
        blockName = "Morning Block";
        BlockIcon = Sunrise;
    } else if (hour >= 12 && hour < 17) {
        blockName = "Afternoon Block";
        BlockIcon = Sun;
    } else if (hour >= 17 && hour < 21) {
        blockName = "Evening Block";
        BlockIcon = Sunset;
    } else {
        blockName = "Night Block";
        BlockIcon = Moon;
    }

    const currentTime = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    })

    let greeting = "";

    if(hour < 12){
        greeting = "Good Morning";
    }else if(hour < 17){
        greeting = "Good Afternoon";
    }else{
        greeting = "Good Evening";
    }

    const containerStyle = {
        ...cardStyle,
        width: "100%",
        minHeight: "260px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
    };

    const statsContainer = {
        display: "flex",
        gap: "16px",
        marginTop: "24px",
    };

    return(
        <div style={containerStyle}>
            {/* Top row */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                }}
            >
                {settings.showBlock && (
                    <BlockIcon size={18} />
                )}

                <span>
                    {settings.showBlock && blockName}

                    {settings.showBlock &&
                        settings.showTime &&
                        " • "}

                    {settings.showTime && currentTime}
                </span>
            </div>
            
            {/* Greeting */}
            {settings.showGreeting && (
                <h1>
                    {greeting},{" "}
                    <span
                        style={{
                            color:"var(--primary)",
                        }}
                    >
                        {user.name}
                    </span>
                </h1>
            )}

            <p>
            Here's what's happening today.
            </p>

            {/* Stats */}
            <div style={statsContainer}>
                {settings.showTasks && (
                    <QuickStats
                        title="Tasks"
                        value="0"
                        icon={CheckSquare}
                        path="/tasks"
                    />
                )}

                {settings.showHabits && (
                    <QuickStats
                        title="Habit Tracker"
                        value="0"
                        icon={Heart}
                        path="/habits"
                    />
                )}

                {settings.showCalendar && (
                    <QuickStats
                        title="Calendar"
                        value="0"
                        icon={CalendarDays}
                        path="/calendar"
                    />
                )}

                {settings.showGoals && (
                    <QuickStats
                        title="Goals"
                        value="0"
                        icon={Target}
                        path="/goals"
                    />
                )}
            </div>
        </div>
    );
}