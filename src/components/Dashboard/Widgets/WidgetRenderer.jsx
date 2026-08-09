import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { widgetRegistry } from "./widgetRegistry";
import { useDashboard } from "../../../context/DashboardContext";
import WidgetEditor from "./WidgetEditor";

export default function WidgetRenderer({ widgetId }) {
    const [hovered, setHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { removeWidget } = useDashboard();
    const [showEditor, setShowEditor] = useState(false);

    const widget = widgetRegistry[widgetId];

    if (!widget) return null;

    const Component = widget.component;

    const menuItem = {
        width: "100%",
        padding: "14px 18px",

        background: "transparent",
        border: "none",
        textAlign: "left",
        cursor: "pointer",
        fontSize: "14px",
    };

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setMenuOpen(false);
            }}
            style={{
                position: "relative",

                gridColumn:
                    widget.layout?.colSpan === 2
                        ? "1 / -1"
                        : "auto",
            }}
        >
            {hovered && (
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",

                        width: "34px",
                        height: "34px",

                        borderRadius: "10px",
                        border: "none",
                        background: "var(--bg-surface)",
                        boxShadow: "var(--shadow-sm)",
                        cursor: "pointer",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 5,
                    }}
                >
                    <MoreVertical size={18} />
                </button>
            )}

            {menuOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: "56px",
                        right: "16px",
                        width: "170px",

                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        boxShadow: "var(--shadow-md)",
                        overflow: "hidden",
                        zIndex: 10,
                    }}
                >
                    <button
                        style={menuItem}
                        onClick={() => {
                            setShowEditor(true);
                            setMenuOpen(false);
                        }}
                    >
                        Edit
                    </button>

                    <button style={menuItem}>
                        Duplicate
                    </button>

                    {widget.removable && (
                        <button
                            style={menuItem}
                            onClick={() => {
                                removeWidget(widget.id);
                                setMenuOpen(false);
                            }}
                        >
                            Remove
                        </button>
                    )}
                </div>
            )}
            <Component />
            {showEditor && (
                <WidgetEditor
                    widget={widget}
                    onClose={() => setShowEditor(false)}
                />
            )}
        </div>
    );
}