export default function EditorSection({
    title,
    children,
}) {
    return (
        <section
            style={{
                marginBottom: "var(--space-6)",
            }}
        >
            <h3
                style={{
                    margin: "0 0 var(--space-4)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                }}
            >
                {title}
            </h3>

            {children}
        </section>
    );
}