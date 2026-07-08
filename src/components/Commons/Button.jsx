export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) {
  const styles = {
    primary: {
      background: "var(--primary)",
      // color: "var(--text-white)",
      color: "#fff",
      border: "none",
    },

    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border)",
    },

    accent: {
      background: "var(--accent)",
      color: "var(--text-white)",
      border: "none",
    },

    ghost: {
      background: "transparent",
      color: "var(--primary)",
      border: "none",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],

        width: fullWidth ? "100%" : "fit-content",

        padding:
          "var(--button-padding-y) var(--button-padding-x)",

        borderRadius: "var(--radius-md)",

        fontFamily: "var(--font-subtitle)",

        fontWeight: 500,

        fontSize: "1rem",

        transition: "var(--transition-normal)",

        cursor: disabled ? "not-allowed" : "pointer",

        opacity: disabled ? 0.6 : 1,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "var(--shadow-md)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </button>
  );
}