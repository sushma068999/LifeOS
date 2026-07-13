import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";
import TabBar from "../components/Layout/TabBar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [tabs, setTabs] = useState([
    {title:"Dashboard"}
  ]);
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--bg-main)",
      }}
    >
      {/* Fixed Sidebar */}

      {/* <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          // width: collapsed ? "74px" : "240px",
          height: "100vh",
          zIndex: 1000,
        }}
      > */}
        <Sidebar 
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      {/* </div> */}

      {/* Main Content */}

      <div
        style={{
          marginLeft: 0,
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
        </div>

        <TabBar 
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Page Content */}

        <main
          style={{
            flex: 1,
            padding: "2rem",
            overflowY: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}