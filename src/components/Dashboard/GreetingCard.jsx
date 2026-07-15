import QuickStats from "./QuickStats";
import { cardStyle } from "../../styles/cardStyle";

import { getCurrentBlock } from "../../utils/blockUtils";

export default function GreetingCard() {
    const now = new Date();
    const currentBlock = getCurrentBlock(now);
    const hour = now.getHours();
    const currentTime = now.toLocaleDateString([], {
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
            <div>
            <div>{currentTime}</div>
            <div>{currentBlock?.title}</div>
            </div>

            {/* Greeting */}
            <h1>{greeting}, User</h1>

            <p>
            Here's what's happening today.
            </p>

            {/* Stats */}
            <div style={statsContainer}>
            <QuickStats title="Tasks" value="0" />
            <QuickStats title="Habits" value="0" />
            <QuickStats title="Events" value="0" />
            <QuickStats title="Focus" value="0%" />
            </div>

        </div>
    );
}