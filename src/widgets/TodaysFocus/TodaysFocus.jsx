import React from "react";
import { Circle } from "lucide-react";
import { cardStyle } from "../../styles/cardStyle";

import { useDashboard } from "../../context/DashboardContext";
import { widgetDefaults } from "../../config/widgetDefaults";

export default function TodaysFocus() {

  const focusItems = [
    {
      title: "Deep work — LifeOS dashboard polish",
      time: "9:00 AM",
      priority: "High",
      category: "Coding",
    },
    {
      title: "Review pull requests",
      time: "11:30 AM",
      priority: "Medium",
      category: "Coding",
    },
    {
      title: "Gym — leg day",
      time: "5:30 PM",
      priority: "Medium",
      category: "Fitness",
    },
    {
      title: "Read 20 pages — Atomic Habits",
      time: "9:00 PM",
      priority: "Low",
      category: "Reading",
    },
  ];

  const { widgetSettings } = useDashboard();

  const settings = {
    ...widgetDefaults.todayFocus,
    ...(widgetSettings.todayFocus ?? {}),
  };

  const priorityStyle = {
    High: {
      background: "var(--primary-dark)",
      color: "var(--text-white)",
      border: "1px solid var(--primary-dark)",
    },

    Medium: {
      background: "var(--chart-sage)",
      color: "var(--text-white)",
      border: "1px solid var(--chart-sage)",
    },

    Low: {
      background: "var(--primary-light)",
      color: "var(--text-white)",
      border: "1px solid var(--primary-light)",
    },
  };

  const categoryStyle = {
    Coding: {
      color: "var(--primary-dark)",
      border: "1px solid var(--primary-border)",
      background: "var(--primary-soft)",
    },

    Fitness: {
      color: "var(--chart-sage)",
      border: "1px solid var(--chart-sage)",
      background: "var(--primary-soft)",
    },

    Reading: {
      color: "var(--primary-dark)",
      border: "1px solid var(--primary-light)",
      background: "var(--bg-surface)",
    },
  };

  return (
    <div
      style={{
        ...cardStyle,
        padding: "24px",
        minHeight: "260px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >

        <div>

          <h2 style={{ margin: 0 }}>
            Today's Focus
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "var(--text-secondary)",
            }}
          >
            {focusItems.length} tasks & events
          </p>

        </div>

        <button
          style={{
            background: "none",
            border: "none",
            color: "var(--primary)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          View all →
        </button>

      </div>

      {focusItems.map((item, index) => (
        <React.Fragment key={item.title}>
          <div
            key={item.title}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 0",
            }}
          >

            <Circle
              size={20}
              color="var(--text-secondary)"
            />

            <div
              style={{
                flex: 1,
                marginLeft: "14px",
                minWidth: 0,
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
            >
                {item.title}
              </p>
            </div>

            {settings.showTime && (
              <div
                style={{
                  marginRight: "24px",
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                }}
              >
                {item.time}
              </div>
            )}

            {settings.showCategory && (
              <span
                style={{
                  ...categoryStyle[item.category],
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                  marginRight: "10px",
                }}
              >
                {item.category.toUpperCase()}
              </span>
            )}

            {settings.showPriority && (
              <span
                style={{
                  ...priorityStyle[item.priority],
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}
              >
                {item.priority.toUpperCase()}
              </span>
            )}

          </div>

          {index !== focusItems.length - 1 && (
            <hr
              style={{
                border: "none",
                borderTop: "1px solid var(--border-light)",
                margin: 0,
              }}
            />
          )}
        </React.Fragment>

      ))}

    </div>
  );
}