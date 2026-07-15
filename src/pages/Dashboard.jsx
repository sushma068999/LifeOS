import { useState } from "react";
import Onboarding from "./Onboarding";

import DashboardLayout from "../layouts/DashboardLayout";
import GreetingCard from "../components/Dashboard/GreetingCard";

export default function Dashboard() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  return (
  <>
    <div
      style={{
        padding: "40px",
      }}
    >
      <GreetingCard />
    </div>

    {showOnboarding && (
      <Onboarding
        onFinish={(userData) => {
          console.log(userData);
          setShowOnboarding(false);
        }}
      />
    )}
  </>
);
}