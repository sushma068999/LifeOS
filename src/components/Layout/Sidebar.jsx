import { useState } from "react";
import { useTabs } from "../../context/TabContext";
import { useUser } from "../../context/UserContext";

import { PanelLeft, Settings, TabletSmartphone } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { buildWorkspace } from "../../config/buildWorkspace";

export default function Sidebar({
  collapsed,
  setCollapsed,
}) {
  const { activeTab } = useTabs();

  const [openGroup, setOpenGroup] = useState({
    Workspace: true,
  });

  const [expandMenus, setExpandedMenus] = useState({});
  const toggleMenu = (title) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const { user } = useUser();
  const { sidebar: menu } = buildWorkspace(user);

  const analyticsItem = menu.find(
      (item) => item.path === "/analytics"
  );

  const mainMenu = menu.filter(
      (item) => item.path !== "/analytics"
  );

  return (
    <aside
      style={{
        width: collapsed ? "74px" : "245px",
        height: "100vh",
        background: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border-light)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width .25s ease",
        overflow: "hidden",
      }}
    >
      <div>
        {/* Logo */}
        <div
          onClick={() => setCollapsed(!collapsed)}
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <PanelLeft
            size={22}
            color="var(--primary)"
          />

          {!collapsed && (
            <span
              style={{
                marginLeft: 14,
                fontSize: 24,
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              LifeOS
            </span>
          )}
        </div>
      </div>

        {/* Navigation */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",

            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {mainMenu.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
              collapsed={collapsed}
              active={activeTab}
              openGroup={openGroup}
              setOpenGroup={setOpenGroup}
            />
          ))}
      </div>
      
      {/* Bottom */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid var(--border-light)",
          background: "var(--bg-sidebar)"
        }}
      >
        {analyticsItem && (
          <SidebarItem
              item={analyticsItem}
              collapsed={collapsed}
              active={activeTab}
              openGroup={openGroup}
              setOpenGroup={setOpenGroup}
          />
        )}

        <SidebarItem
          item={{
            title: "Settings",
            icon: Settings,
            path: "/settings",
          }}
          collapsed={collapsed}
          active={activeTab}
          openGroup={openGroup}
          setOpenGroup={setOpenGroup}
        />
      </div>
    </aside>
  );
}