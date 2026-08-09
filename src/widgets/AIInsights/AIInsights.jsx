import { cardStyle } from "../../styles/cardStyle";
import { useDashboard } from "../../context/DashboardContext";
import { widgetDefaults } from "../../config/widgetDefaults";

export default function AIInsights() {
    const { widgetSettings } = useDashboard();

    const settings = {
        ...widgetDefaults.aiInsights,
        ...(widgetSettings.aiInsights ?? {}),
    };

    const insights = [
        {
            title: "Deep Work",
            value: 64,
        },
        {
            title: "Goal Alignment",
            value: 78,
        },
        {
            title: "Consistency",
            value: 82,
        },
        {
            title: "Balance",
            value: 71,
        },
    ];

    return (
        <div
            style={{
                ...cardStyle,
                padding: "24px",
                height: "100%",
                minHeight: "260px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
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

            {settings.showProgress && (
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
                                    justifyContent:
                                        "space-between",
                                    marginBottom: "6px",
                                }}
                            >
                                <span>{item.title}</span>

                                {settings.showScore && (
                                    <strong>
                                        {item.value}%
                                    </strong>
                                )}
                            </div>

                            <div
                                style={{
                                    height: "6px",
                                    background:
                                        "var(--border)",
                                    borderRadius: "999px",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width:
                                            `${item.value}%`,
                                        height: "100%",
                                        background:
                                            "var(--primary)",
                                        borderRadius:
                                            "999px",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {settings.showRecommendation && (
                <div
                    style={{
                        marginTop: settings.showProgress
                            ? "6px"
                            : "24px",
                        padding: "16px",
                        borderRadius: "16px",
                        background:
                            "var(--primary-soft)",
                        border:
                            "1px solid var(--primary-border)",
                        color:
                            "var(--primary-dark)",
                        fontWeight: 500,
                    }}
                >
                    💡 You were 18% more productive during
                    Afternoon Blocks this week.
                </div>
            )}
        </div>
    );
}