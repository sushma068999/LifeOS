import { createContext, useContext, useState, useEffect } from "react";
import { buildDashboard } from "../config/buildDashboard";
import { buildDefaultCalendars } from "../utils/calendarData";

const UserContext = createContext();
export function UserProvider({ children }) {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("lifeos-user");

        return savedUser
        ? (() => {
            const parsed =
                JSON.parse(savedUser);

            return {
                name:
                    parsed.name ?? "User",

                profile:
                    parsed.profile ?? "student",

                modules:
                    parsed.modules ?? [],

                dashboard:
                    parsed.dashboard ??
                    buildDashboard(parsed),

                plan:
                    parsed.plan ?? "free",

                calendars:
                    parsed.calendars ??
                    buildDefaultCalendars(
                        parsed.profile ?? "student"
                    ),
            };
        })()
        : {
            name: "User",
            profile: "student",
            modules: [],
            dashboard: [],
            plan: "free",
            calendars: buildDefaultCalendars("student"),
        };
    });

    useEffect(() => {
        localStorage.setItem(
            "lifeos-user",
            JSON.stringify(user)
        );
    }, [user]);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}