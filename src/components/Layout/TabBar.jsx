import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTabs } from "../../context/TabContext";
import { useLocation } from "react-router-dom";

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    tabs,
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
          key={tab.id}
          onClick={() => {
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
              location.pathname === tab.path 
              ? "white" 
              : "transparent",
            color:
              location.pathname === tab.path
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