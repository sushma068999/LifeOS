const plans = [
    {
        id: "free",
        title: "Free",
        subtitle: "Basic features & AI for ₹0",
        text: "Essential productivity features",
    },
    {
        id: "student",
        title: "Student",
        subtitle: "₹199/Month or ₹1999/Year using verified student email id",
        text: "Everything for academic life",
    },
    {
        id: "premium",
        title: "Premium",
        subtitle: "₹299/Month or ₹2,499/Year",
        text: "Full LifeOS experience",
    },
];

export default function Step5Plan({
    user,
    setUser,
}){
    return (
        <div>
        <h2
            style={{
            marginBottom: "8px",
            }}
        >
            Choose your plan
        </h2>

        <p
            style={{
            color: "var(--text-secondary)",
            marginBottom: "24px",
            }}
        >
            You can always change this later.
        </p>

        <div
            style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            }}
        >
        {plans.map((plan) => {
            const selected = user.plan === plan.id;
            return (
                <button
                    key={plan.id}
                    onClick={() =>
                        setUser({
                        ...user,
                        plan: plan.id,
                        })
                    }
                    style={{
                        background: selected
                        ? "var(--bg-hover)"
                        : "var(--bg-surface)",
                        border: selected
                        ? "2px solid var(--primary)"
                        : "1px solid var(--border)",
                        borderRadius: "18px",
                        padding: "18px",
                        textAlign: "left",
                        cursor: "pointer",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "8px",
                        }}
                        >
                        <h3
                            style={{
                            color: selected
                                ? "var(--primary)"
                                : "var(--text-primary)",
                            margin: 0,
                            fontSize: "20px",
                            fontWeight: 600,
                            }}
                        >
                            {plan.title}
                        </h3>

                        <span
                            style={{
                            color: "var(--primary)",
                            fontSize: "13px",
                            fontWeight: 500,
                            }}
                        >
                            {plan.subtitle}
                        </span>
                    </div>

                    <p
                        style={{
                        color: "var(--text-secondary)",
                        margin: 0,
                        fontSize: "14px",
                        lineHeight: "1.5",
                        }}
                    >
                        {plan.text}
                    </p>
                </button>
            );
            })}
        </div>
        </div>
    );
}