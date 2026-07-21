import { Plus } from "lucide-react";
import { cardStyle } from "../../../styles/cardStyle";

export default function AddWidgetCard() {
    return (
        <button
        style={{
            ...cardStyle,

            width: "100%",
            minHeight: "220px",

            borderStyle: "dashed",

            cursor: "pointer",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            gap: "16px",

            background: "transparent",

            transition: ".2s",
        }}
        >
        <Plus
            size={38}
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
            Customize your dashboard
        </p>
        </button>
    );
}