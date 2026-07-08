export default function Card({
  children,
  padding = "2rem",
  hover = true,
  style = {},
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: padding,
        boxShadow: "var(--shadow-sm)",
        transition: "var(--transition-normal)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;

        e.currentTarget.style.transform =
          "translateY(-6px)";

        e.currentTarget.style.boxShadow =
          "var(--shadow-lg)";

        e.currentTarget.style.borderColor =
          "var(--primary-light)";
      }}
      onMouseLeave={(e) => {
        if (!hover) return;

        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "var(--shadow-sm)";

        e.currentTarget.style.borderColor =
          "var(--border)";
      }}
    >
      {children}
    </div>
  );
}