import {
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

import { useDashboard } from "./DashboardContext";

const WidgetContext = createContext();

export function WidgetProvider({ children }) {

    const { widgets } = useDashboard();

    const [customWidgets, setCustomWidgets] = useState([]);

    const dashboardWidgets = useMemo(() => {

        return [
            ...new Set([
                ...widgets,
                ...customWidgets,
            ]),
        ];

    }, [widgets, customWidgets]);

    function addWidget(widgetId) {

        setCustomWidgets((prev) => {

            if (prev.includes(widgetId)) {
                return prev;
            }

            return [
                ...prev,
                widgetId,
            ];
        });

    }

    function removeWidget(widgetId) {

        setCustomWidgets((prev) =>
            prev.filter(
                (id) => id !== widgetId
            )
        );

    }

    return (
        <WidgetContext.Provider
            value={{
                dashboardWidgets,
                addWidget,
                removeWidget,
            }}
        >
            {children}
        </WidgetContext.Provider>
    );

}

export function useWidgets() {
    return useContext(WidgetContext);
}