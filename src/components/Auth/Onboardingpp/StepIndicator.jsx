export default function StepIndicator({
  currentStep,
  totalSteps,
}) {
    return (
        <div
        style={{
            display: "flex",
            gap: "8px",
            marginBottom: "24px",
        }}
        >
        {Array.from({ length: totalSteps }).map((_, index) => (
            <div
            key={index}
            style={{
                flex: 1,
                height: "6px",
                borderRadius: "999px",
                background:
                index + 1 <= currentStep
                    ? "var(--primary)"
                    : "var(--border)",
                transition: "0.2s",
            }}
            />
        ))}
        </div>
    );
}