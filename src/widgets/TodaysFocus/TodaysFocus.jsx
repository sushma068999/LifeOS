import { Circle } from "lucide-react";
import { cardStyle } from "../../styles/cardStyle";

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

  const priorityColor = {
    High: "#D96C6C",
    Medium: "#E8B04D",
    Low: "#69B578",
  };

  const categoryColor = {
    Coding: "#6E9B8A",
    Fitness: "#D8894D",
    Reading: "#9C6BD3",
  };

  return (
    <div
      style={{
        ...cardStyle,
        padding: "24px",
        height: "100%",
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

      {focusItems.map((item) => (

        <div
          key={item.title}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "18px",
            borderRadius: "16px",
            border: "1px solid var(--border-light)",
            marginBottom: "14px",
          }}
        >

          <Circle
            size={20}
            color="var(--text-secondary)"
          />

          <div
            style={{
              flex: 1,
              marginLeft: "16px",
              fontWeight: 600,
            }}
          >
            {item.title}
          </div>

          <div
            style={{
              marginRight: "24px",
              color: "var(--text-secondary)",
              fontSize: "14px",
            }}
          >
            {item.time}
          </div>

          <span
            style={{
              background: priorityColor[item.priority],
              color: "white",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            {item.priority.toUpperCase()}
          </span>

          <span
            style={{
              background: categoryColor[item.category],
              color: "white",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            {item.category.toUpperCase()}
          </span>

        </div>

      ))}

    </div>
  );
}