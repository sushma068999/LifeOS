export default function Switch({
    checked,
    onChange,
}) {
    return (
        <button
            onClick={() => onChange(!checked)}
            style={{
                width: "48px",
                height: "28px",

                border: "none",
                cursor: "pointer",

                borderRadius: "999px",

                background: checked
                    ? "var(--primary)"
                    : "var(--border)",

                position: "relative",

                transition: ".25s",
            }}
        >
            <div
                style={{
                    width: "22px",
                    height: "22px",

                    background: "white",

                    borderRadius: "50%",

                    position: "absolute",

                    top: "3px",

                    left: checked
                        ? "23px"
                        : "3px",

                    transition: ".25s",

                    boxShadow:
                        "0 2px 6px rgba(0,0,0,.15)",
                }}
            />
        </button>
    );
}