import { createContext, useContext } from "react";
import { useUser } from "./UserContext";
import { buildDashboard } from "../config/buildDashboard";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
    const { user, setUser } = useUser();
    const defaultWidgets = buildDashboard(user);
    const widgets =
        user.dashboard?.length
            ? user.dashboard
            : defaultWidgets;

    function addWidget(widgetId) {
        if (widgets.includes(widgetId)) return;
        setUser({
            ...user,
            dashboard: [
                ...widgets,
                widgetId,
            ],
        });
    }

    function removeWidget(widgetId) {
        setUser({
            ...user,
            dashboard:
                widgets.filter(
                    (id) => id !== widgetId
                ),
        });
    }

    return (
        <DashboardContext.Provider
            value={{
                widgets,
                addWidget,
                removeWidget,

                widgetSettings:
                    user.widgetSettings ?? {},

                updateWidgetSettings(
                    widgetId,
                    updates
                ) {
                    setUser({
                        ...user,

                        widgetSettings: {
                            ...(user.widgetSettings ?? {}),

                            [widgetId]: {
                                ...(user.widgetSettings?.[widgetId] ?? {}),
                                ...updates,
                            },
                        },
                    });
                },
            }}
        >
            {children}
        </DashboardContext.Provider>
    );

}

export function useDashboard() {
    return useContext(DashboardContext);
}