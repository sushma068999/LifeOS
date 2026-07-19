import { createContext, useContext, useState } from "react";
import { getDefaultDashboard } from "../data/dashboard/defaultDashboard";
import { useUser } from "./UserContext";
import { useEffect } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
    const [widgets, setWidgets] = useState([]);
    const { user } = useUser();
    useEffect(() => {
        setWidgets (
            getDefaultDashboard(user.profileType)
        );
    }, [user.profileType]);
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