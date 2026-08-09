import { useState } from "react";
import Onboarding from "./Onboarding";
import { useUser } from "../context/UserContext";
import { useDashboard } from "../context/DashboardContext";
import WidgetRenderer from "../components/Dashboard/Widgets/WidgetRenderer";
import { buildDashboard } from "../config/buildDashboard";
import AddWidgetCard from "../components/Dashboard/Widgets/AddWidgetCard";

export default function Dashboard() {
  const { setUser } = useUser();
  const { widgets } = useDashboard();
  const greetingWidget = widgets.find(
    (id) => id === "greeting"
  );

  const otherWidgets = widgets.filter(
    (id) => id !== "greeting"
  );

  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem("lifeos-onboarding") !== "done";
  });

  return (
  <>
    {greetingWidget && (
      <WidgetRenderer
        widgetId={greetingWidget}
      />
    )}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "var(--gap-md)",
        marginTop: "var(--space-5)",
        alignItems: "start",
      }}
    >
      {otherWidgets.map((widgetId) => (
        <WidgetRenderer
          key={widgetId}
          widgetId={widgetId}
        />
      ))}

      <div
        style={{
            gridColumn: "1 / -1",
        }}
      >
        <AddWidgetCard />
      </div>
    </div>

    {showOnboarding && (
      <Onboarding
        onFinish={(userData) => {
          setUser({
            name: userData.name ?? "User",
            profile: userData.profile,
            modules: userData.modules,
            dashboard:
              userData.dashboard?.length
                  ? userData.dashboard
                  : buildDashboard(userData),
            plan: userData.plan,
        });
          localStorage.setItem(
            "lifeos-onboarding",
            "done"
          );
          setShowOnboarding(false);
        }}
      />
    )}
  </>
);
}