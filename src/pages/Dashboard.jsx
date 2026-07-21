import { useState } from "react";
import Onboarding from "./Onboarding";
import { useUser } from "../context/UserContext";
import { useDashboard } from "../context/DashboardContext";
import WidgetRenderer from "../components/Dashboard/Widgets/WidgetRenderer";

import AddWidgetCard from "../components/Dashboard/Widgets/AddWidgetCard";

export default function Dashboard() {
  const { setUser } = useUser();
  const { widgets } = useDashboard();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem("lifeos-onboarding") !== "done";
  });

  return (
  <>
    <WidgetRenderer widgetId= "greeting" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "24px",
        marginTop: "24px",
        alignItems: "start",
      }}
    >
      {widgets.includes("todayFocus") ? (
        <WidgetRenderer widgetId= "todayFocus" />
      ) : (
        <div />
      )}

      {widgets.includes("aiInsights") ? (
        <WidgetRenderer widgetId= "aiInsights" />
      ) : (
        <div />
      )}
      
    </div>

    <AddWidgetCard />

    {showOnboarding && (
      <Onboarding
        onFinish={(userData) => {
          setUser({
            name: userData.name ?? "User",
            profile: userData.profile,
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