import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {

    const [widgets, setWidgets] = useState([
        "greeting",
        "todayFocus",
        "aiInsights",
    ]);

    return (
        <DashboardContext.Provider
            value={{
                widgets,
                setWidgets,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    return useContext(DashboardContext);
}