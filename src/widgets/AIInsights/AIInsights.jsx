import { cardStyle } from "../../styles/cardStyle";

export default function AIInsights() {
  const insights = [
    {
        title: "Deep Work",
        value: 64,
        color: "var(--accent)",
    },
    {
        title: "Goal Alignment",
        value: 78,
        color: "var(--success)",
    },
    {
        title: "Consistency",
        value: 82,
        color: "var(--warning)",
    },
    {
        title: "Balance",
        value: 71,
        color: "var(--primary)",
    },
  ];

  return (
    <div
        style={{
            ...cardStyle,
            padding: "24px",
        }}
    >
        <h2 style={{ margin: 0 }}>
            AI Insights
        </h2>

        <p
            style={{
            marginTop: "6px",
            color: "var(--text-secondary)",
            }}
        >
            Last 30 days • Updated just now
        </p>

        <div
            style={{
            marginTop: "24px",
            }}
        >
        {insights.map((item) => (
            <div
                key={item.title}
                style={{
                marginBottom: "18px",
                }}
            >
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                }}
                >
                <span>{item.title}</span>
                <strong>{item.value}%</strong>
                </div>

                <div
                style={{
                    height: "8px",
                    background: "var(--border-light)",
                    borderRadius: "999px",
                    overflow: "hidden",
                }}
                >
                <div
                    style={{
                    width: `${item.value}%`,
                    height: "100%",
                    background: item.color,
                    borderRadius: "999px",
                    }}
                />
                </div>
            </div>
        ))}
        </div>

        <div
        style={{
            marginTop: "24px",
            padding: "16px",
            borderRadius: "16px",
            background: "var(--primary-soft)",
            border: "1px solid var(--primary-border)",
            color: "var(--primary-dark)",
            fontWeight: 500,
        }}
        >
            💡 You were 18% more productive during Afternoon Blocks this week.
        </div>
    </div>
  );
}