import { useNavigate } from "react-router-dom";
import { useTabs } from "../../context/TabContext"

export default function QuickStats({
    title,
    value,
    icon: Icon,
    path,
}) {

    const navigate = useNavigate();
    const { openTab } = useTabs();

    return (
        <div
        onClick={() => {
            openTab ({
                id: path.slice(1),
                title,
                path,
            });
            navigate(path);
        }}
        style={{
            flex: 1,
            cursor: "pointer",
            background: "var(--bg-main)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "18px",
            position: "relative",
            overflow: "hidden",
            transition: ".2s",
        }}
        >

        <div
            style={{
            position: "absolute",
            left: "-25px",
            top: "-25px",
            width: "90px",
            height: "90px",
            border: "2px solid var(--primary-light)",
            borderRadius: "50%",
            opacity: .25,
            }}
        />

        <div
            style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-secondary)",
            }}
        >
            {Icon &&
            <Icon
                size={16}
                color="var(--primary)"
            />
            }

            {title}
        </div>

        <h2
            style={{
            marginTop: "16px",
            color: "var(--text-primary)",
            }}
        >
            {value}
        </h2>

        </div>
    );
}