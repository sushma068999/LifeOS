import defaultInterests from "../../../data/defaultInterests";

export default function Step3Interests({
    user,
    setUser,
}) {
    function toggleInterest(interest) {
        const alreadySelected =
        user.interests.includes(interest);

        if (alreadySelected) {
            setUser({
                ...user,
                interests: user.interests.filter(
                (item) => item !== interest
                ),
        });
        } else {
            setUser({
                ...user,
                interests: [
                ...user.interests,
                interest,
                ],
            });
        }
    }

    return (
        <div>
            <h2
                style={{
                marginBottom: "8px",
                }}
            >
                What matters to you?
            </h2>

            <p
                style={{
                color: "var(--text-secondary)",
                marginBottom: "24px",
                }}
            >
                Choose everything you want LifeOS to help you manage.
            </p>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                }}
                >
                {defaultInterests.map((interest) => {
                    const selected =
                    user.interests.includes(interest);

                    return (
                    <button
                        key={interest}
                        onClick={() =>
                        toggleInterest(interest)
                        }
                        style={{
                        padding: "12px 18px",
                        borderRadius: "999px",
                        cursor: "pointer",
                        background: selected
                            ? "var(--bg-hover)"
                            : "var(--bg-surface)",
                        border: selected
                            ? "2px solid var(--primary)"
                            : "1px solid var(--border)",
                        color: selected
                            ? "var(--primary)"
                            : "var(--text-secondary)",
                        fontWeight: 500,
                        transition: "0.2s",
                        }}
                    >
                        {interest}
                    </button>
                    );
                })}
            </div>
        </div>
    );
}