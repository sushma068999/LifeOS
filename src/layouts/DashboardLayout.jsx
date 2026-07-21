import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import TabBar from "../components/Layout/TabBar";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTabs } from "../context/TabContext";

export default function DashboardLayout() {
  const location = useLocation();
  const {
    tabs,
    setActiveTab,
  } = useTabs();

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
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
      {/* Fixed Sidebar */}

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          // width: collapsed ? "74px" : "240px",
          height: "100vh",
          zIndex: 1000,
        }}
      >
        <Sidebar/>
      </div>

      {/* Main Content */}

      <div
        style={{
          marginLeft: "245px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Sticky Topbar */}

        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 900,
          }}
        >
          <Topbar />
          <TabBar/>
        </div>

        {/* <div
          style={{
            position: "sticky",
            top: "64px",
            zIndex: 800,
            background: "var(--bg-main)"
          }}
        >
          
        </div> */}

        {/* Page Content */}

        <main
          style={{
            flex: 1,
            padding: "32px",
            overflowY: "auto",
            height: "calc(100vh - 64px - 42px)"
          }}
        >
          <Outlet/>
        </main>
      </div>
    </div>
  );
}