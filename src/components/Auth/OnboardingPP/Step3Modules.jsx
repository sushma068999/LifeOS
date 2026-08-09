import { modulesList } from "../../../config/modules/modulesList";

export default function Step3Modules({
    user,
    setUser,
}) {
    function toggleModule(moduleId) {
        const alreadySelected =
        user.modules.includes(moduleId);

        if (alreadySelected) {
            setUser({
                ...user,
                modules: user.modules.filter(
                (item) => item !== moduleId
                ),
        });
        } else {
            setUser({
                ...user,
                modules: [
                ...user.modules,
                moduleId,
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
                {modulesList.map((module) => {
                    const selected =
                    (user.modules ?? []).includes(module.id);

                    return (
                    <button
                        key={module.id}
                        onClick={() =>
                        toggleModule(module.id)
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
                        {module.title}
                    </button>
                    );
                })}
            </div>
        </div>
    );
}