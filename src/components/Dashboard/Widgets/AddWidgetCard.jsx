import { Plus } from "lucide-react";
import { cardStyle } from "../../../styles/cardStyle";
import { useState } from "react";
import WidgetMarketplace from "../WidgetMarketplace/WidgetMarketplace";

export default function AddWidgetCard() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <button
        onClick={() => setOpen(true)}
        style={{
            ...cardStyle,
            width: "100%",
            minHeight: "170px",
            border: "2px dashed var(--border)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "24px",
            boxSizing: "border-box",
            alignItems: "center",
            gap: "10px",
            background: "var(--bg-surface)",
            transition: ".2s",
        }}
        >
        <Plus
            size={34}
            color="var(--primary)"
        />

        <h3
            style={{
            margin: 0,
            color: "var(--primary)",
            }}
        >
            Add Widget
        </h3>

        <p
            style={{
            margin: 0,
            color: "var(--text-secondary)",
            }}
        >
            Browse available widgets and personalize your workspace.
        </p>
        </button>
        
        {open && (
            <WidgetMarketplace
                onClose={() => setOpen(false)}
            />
        )}
        </>
    );
}