import Switch from "./Switch";

export default function SettingsRow({
    title,
    description,
    checked,
    onChange,
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-4) 0",
                borderBottom: "1px solid var(--border-light)",
            }}
        >
            <div>
                <h4
                    style={{
                        margin: 0,
                        fontSize: "15px",
                    }}
                >
                    {title}
                </h4>

                <p
                    style={{
                        margin: "var(--space-2) 0 0",
                        color: "var(--text-secondary)",
                        fontSize: "13px",
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </p>
            </div>

            <Switch
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}