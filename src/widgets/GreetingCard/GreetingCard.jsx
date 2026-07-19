import { useUser } from "../../context/UserContext";
import QuickStats from "../QuickStats/QuickStats";
import { cardStyle } from "../../styles/cardStyle";

import { Sunrise, Sun, Sunset, Moon, CheckSquare, CalendarDays, Heart, Target } from "lucide-react";
import { getCurrentBlock } from "../../utils/blockUtils";

export default function GreetingCard() {
    const { user } = useUser();
    const now = new Date();
    const currentBlock = getCurrentBlock(now);
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
                <BlockIcon size={18} />

                <span>
                    {blockName} • {currentTime}
                </span>
            </div>
            
            {/* Greeting */}
            <h1>{greeting}, <span style={{color: "var(--primary)"}}>{user.name}</span></h1>

            <p>
            Here's what's happening today.
            </p>

            {/* Stats */}
            <div style={statsContainer}>
                <QuickStats 
                    title="Tasks" 
                    value="0"
                    icon={CheckSquare}
                    path= "/tasks" 
                />
                <QuickStats 
                    title="Habits" 
                    value="0"
                    icon={Heart}
                    path= "/habits" 
                />
                <QuickStats 
                    title="Events" 
                    value="0"
                    icon={CalendarDays}
                    path= "/calendar" 
                />
                <QuickStats 
                    title="Focus" 
                    value="0"
                    icon={Target}
                    path= "/goals" 
                />
            </div>
        </div>
    );
}