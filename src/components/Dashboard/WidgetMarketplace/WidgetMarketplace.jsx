import { useState } from "react";
import { X } from "lucide-react";

import Switch from "../../Commons/Switch";

import { widgetRegistry } from "../Widgets/widgetRegistry";
import { useDashboard } from "../../../context/DashboardContext";
import { cardStyle } from "../../../styles/cardStyle";

export default function WidgetMarketplace({ onClose }) {

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(
            Object.values(widgetRegistry).map(
                widget => widget.category
            )
        ),
    ];

    const {
        widgets,
        addWidget,
        removeWidget,
    } = useDashboard();

    const availableWidgets = Object.values(widgetRegistry)
        .filter(widget => widget.removable)
        .filter(widget =>
            widget.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.35)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                zIndex: 9999,
            }}
        >
            <div
                style={{
                    ...cardStyle,
                    width: "900px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >

                {/* Header */}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >

                    <div>
                        <h2
                            style={{
                                margin: 0,
                            }}
                        >
                            Add Widgets
                        </h2>

                        <p
                            style={{
                                marginTop: "6px",
                                color: "var(--text-secondary)",
                            }}
                        >
                            Personalize your dashboard
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        <X
                            size={22}
                            color="var(--text-secondary)"
                        />
                    </button>

                </div>

                {/* Search */}

                <input
                    placeholder="Search widgets..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    style={{
                        width: "100%",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        border:
                            "1px solid var(--border)",
                        outline: "none",
                        background:
                            "var(--bg-main)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                    }}
                >
                    {categories.map(category => (

                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "999px",
                                border:
                                    selectedCategory === category
                                        ? "none"
                                        : "1px solid var(--border)",

                                background:
                                    selectedCategory === category
                                        ? "var(--primary)"
                                        : "transparent",

                                color:
                                    selectedCategory === category
                                        ? "white"
                                        : "var(--text-primary)",

                                cursor: "pointer",
                                fontWeight: 600,
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill,minmax(220px,1fr))",
                        gap: "18px",
                    }}
                >
                    {availableWidgets.map((widget) => {
                        const added =
                            widgets.includes(widget.id);

                        return (
                            <div
                                key={widget.id}
                                style={{
                                    border:
                                        "1px solid var(--border)",
                                    borderRadius: "18px",
                                    padding: "18px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent:
                                        "space-between",
                                    gap: "16px",
                                    background:
                                        "var(--bg-main)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        gap: "12px",
                                    }}
                                >

                                    <div>
                                        <h3
                                            style={{
                                                margin: 0,
                                            }}
                                        >
                                            {widget.title}
                                        </h3>

                                        <p
                                            style={{
                                                marginTop: "6px",
                                                color: "var(--text-secondary)",
                                                fontSize: "14px",
                                            }}
                                        >
                                            {widget.description ??
                                                "Coming soon."}
                                        </p>
                                    </div>

                                    <button
                                        style={{
                                            border: "none",
                                            background: "transparent",
                                            cursor: "pointer",
                                            color: "var(--text-secondary)",
                                            fontSize: "18px",
                                            padding: 0,
                                        }}
                                    >
                                        ⋮
                                    </button>

                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "auto",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {added
                                            ? "Enabled"
                                            : "Disabled"}
                                    </span>

                                    <Switch
                                        checked={added}
                                        onChange={() => {

                                            if (added) {
                                                removeWidget(widget.id);
                                            }

                                            else {
                                                addWidget(widget.id);
                                            }

                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}