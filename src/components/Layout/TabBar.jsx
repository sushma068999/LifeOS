import { useState } from "react";
import { X } from "lucide-react";

export default function TabBar() {
  const [tabs, setTabs] = useState([
    "Dashboard",
    "Calendar",
    "Tasks",
  ]);

  const [active, setActive] = useState("Dashboard");

  const closeTab = (tab, e) => {
    e.stopPropagation();

    const updated = tabs.filter((t) => t !== tab);
    setTabs(updated);

    if (active === tab && updated.length > 0) {
      setActive(updated[0]);
    }
  };

  return (
    <div
      style={{
        height: "42px",
        background: "var(--bg-sidebar)",
        borderBottom: "1px solid var(--border-light)",
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        gap: "6px",
        overflowX: "auto",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            background:
              active === tab ? "white" : "transparent",
            color:
              active === tab
                ? "var(--sage-green)"
                : "var(--text-secondary)",
            transition: ".2s",
          }}
        >
          {tab}

          <X
            size={14}
            onClick={(e) => closeTab(tab, e)}
          />
        </button>
      ))}
    </div>
  );
}