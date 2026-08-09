import { X } from "lucide-react";
import SettingsRow from "../../Commons/SettingsRow";
import { useDashboard } from "../../../context/DashboardContext";
import { widgetDefaults } from "../../../config/widgetDefaults";

import GreetingEditor from "../WidgetEditors/GreetingEditor";
import TodaysFocusEditor from "../WidgetEditors/TodaysFocusEditor";
import AIInsightsEditor from "../WidgetEditors/AIInsightsEditor";

export default function WidgetEditor({
    widget,
    onClose,
}) {
    const {
        widgetSettings,
        updateWidgetSettings,
    } = useDashboard();

    const settings = {
        ...widgetDefaults[widget.id],
        ...widgetSettings[widget.id],
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                right: 0,

                width: "380px",
                height: "100vh",

                background: "var(--bg-surface)",
                borderLeft: "1px solid var(--border)",

                boxShadow: "var(--shadow-lg)",

                padding: "var(--space-6)",

                zIndex: 9999,
            }}
        >

            {/* Header */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-6)",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                    }}
                >
                    {widget.title}
                </h2>

                <button
                    onClick={onClose}
                    style={{
                        width: "36px",
                        height: "36px",

                        border: "none",
                        borderRadius: "10px",

                        background: "transparent",

                        cursor: "pointer",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <X
                        size={18}
                        color="var(--text-secondary)"
                    />
                </button>
            </div>

            {/* Body */}

            {widget.id === "greeting" && <GreetingEditor />}

            {widget.id === "todayFocus" && (
                <TodaysFocusEditor />
            )}

            {widget.id === "aiInsights" && (
                <AIInsightsEditor />
            )}
        </div>
    );
}