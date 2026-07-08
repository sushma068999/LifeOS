export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "var(--space-8)",
      }}
    >
      {eyebrow && (
        <p
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-subtitle)",
            fontSize: ".9rem",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "var(--space-3)",
          }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        style={{
          fontFamily: "var(--font-title)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          color: "var(--text-primary)",
          marginBottom: "var(--space-4)",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            maxWidth: "650px",
            margin:
              align === "center"
                ? "0 auto"
                : "0",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}