import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTabs } from "../../context/TabContext";

export default function TabBar() {
  const navigate = useNavigate();
  const {
    tabs,
    activeTab,
    setActiveTab,
    closeTab,
  } = useTabs();

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
          onClick={() => {
            setActiveTab(tab.title);
            if (tab.path) {
              navigate(tab.path);
            }
          }}
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
                ? "var(--primary)"
                : "var(--text-secondary)",
            transition: ".2s",
          }}
        >
          {tab.title}

          <X
            size={14}
            onClick={(e) => {
              e.stopPropagation();
              const nextTab = closeTab(tab.title);
              if (nextTab?.path) {
                navigate(nextTab.path)
              }
            }}
          />
        </button>
      ))}
    </div>
  );
}