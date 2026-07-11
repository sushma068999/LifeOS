import { Bell, Moon, User } from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  return (
    <header
      style={{
        height: "58px",
        background: "var(--bg-sidebar)",
        borderBottom: "1px solid var(--border-light)",

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",

        padding: "0 24px",

        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >

        <div style={{ flex: 1 }} />

        {/* Right */}

        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
          }}
        >
          <button style={iconButton}>
            <Moon size={19} color="var(--text-secondary)" />
          </button>

          <button style={iconButton}>
            <Bell size={19} color="var(--text-secondary)" />
          </button>

          <button
            style={{
              ...iconButton,
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "white",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <User size={18} color="var(--primary)" />
          </button>
        </div>

      </div>
    </header>
  );
}

const iconButton = {
  border: "none",

  background: "transparent",

  cursor: "pointer",

  width: "36px",
  height: "36px",

  borderRadius: "10px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  transition: "0.2s ease",
};