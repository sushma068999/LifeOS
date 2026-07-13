import { useState } from "react";
import { X } from "lucide-react";

export default function TabBar({
  tabs,
  setTabs,
  activeTab,
  setActiveTab,
})
{
  const closeTab = (title, e) => {
    e.stopPropagation();

    const updated = tabs.filter(
      (t) => t.title !== title
    );

    // If every tab is closed → reopen Dashboard
    if (updated.length === 0) {
      const dashboard = {
        title: "Dashboard",
        id: "dashboard",
      };

      setTabs([dashboard]);
      setActiveTab("Dashboard");
      return;
    }

    setTabs(updated);

    // If the active tab was closed → activate the first remaining tab
    if (activeTab === title) {
      setActiveTab(updated[0].title);
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
          key={tab.title}
          onClick={() => setActiveTab(tab.title)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "none",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer",
            background:
              activeTab === tab.title ? "white" : "transparent",
            color:
              activeTab === tab.title
                ? "var(--sage-green)"
                : "var(--text-secondary)",
            transition: ".2s",
          }}
        >
          {tab.title}

          <X
            size={14}
            onClick={(e) => closeTab(tab.title, e)}
          />
        </button>
      ))}
    </div>
  );
}