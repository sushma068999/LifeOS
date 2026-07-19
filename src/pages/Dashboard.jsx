import { useState } from "react";
import Onboarding from "./Onboarding";
import { useUser } from "../context/UserContext";
import TodayFocus from "../widgets/TodaysFocus/TodaysFocus";

import DashboardLayout from "../layouts/DashboardLayout";
import GreetingCard from "../widgets/GreetingCard/GreetingCard";
import QuickStats from "../widgets/QuickStats/QuickStats";
import AIInsights from "../widgets/AIInsights/AIInsights";

export default function Dashboard() {
  const { setUser } = useUser();
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem("lifeos-onboarding") !== "done";
  });
  return (
  <>
    <GreetingCard />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "24px",
        marginTop: "24px",
        alignItems: "start",
      }}
    >
      <TodayFocus />
      <AIInsights />
    </div>

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