import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import TabBar from "../components/Layout/TabBar";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTabs } from "../context/TabContext";

export default function DashboardLayout() {
  const location = useLocation();

  const {
    tabs,
    setActiveTab,
  } = useTabs();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const currentTab = tabs.find(
      (tab) => tab.path === location.pathname
    );

    if (currentTab) {
      setActiveTab(currentTab.title);
    }
  }, [
    location.pathname,
    tabs,
    setActiveTab,
  ]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-main)",
      }}
    >

      {/* Sidebar */}

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          zIndex: "var(--z-sidebar)",
        }}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </div>

      {/* Main Content */}

      <div
        style={{
          marginLeft: collapsed ? "74px" : "245px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          transition: "margin-left .25s ease",
        }}
      >

        {/* Topbar + Tabbar */}

        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: "var(--z-topbar)",
          }}
        >
          <Topbar />
          <TabBar />
        </div>

        {/* Page Content */}

        <main
          style={{
            flex: 1,
            padding: "32px",
            overflowY: "auto",
            height: "calc(100vh - 64px - 42px)",
          }}
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
}