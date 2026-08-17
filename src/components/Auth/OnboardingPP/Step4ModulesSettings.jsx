import { modulesRegistry } from "../../../config/modules/modulesRegistry";
import Switch from "../../Commons/Switch";

export default function Step4ModulesSettings({
    user,
    setUser,
}) {
    function toggleOption(moduleId, optionId) {
        const module = modulesRegistry[moduleId];

        const defaults =
            module?.defaults?.[user.profile] ?? [];

        const currentSettings =
            user.modulesSettings?.[moduleId] ?? defaults;

        const alreadySelected =
            currentSettings.includes(optionId);

        const updatedSettings = alreadySelected
            ? currentSettings.filter(
                (id) => id !== optionId
            )
            : [
                ...currentSettings,
                optionId,
            ];

        setUser({
            ...user,
            modulesSettings: {
                ...(user.modulesSettings ?? {}),
                [moduleId]: updatedSettings,
            },
        });
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h2
                style={{
                    margin: "0 0 8px",
                    fontSize: "24px",
                    color: "var(--text-primary)",
                }}
            >
                Customize your modules
            </h2>

            <p
                style={{
                    margin: "0 0 24px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                }}
            >
                Choose what you want each selected module to
                include. You can modify these selections later
                from Settings.
            </p>

            <div
                style={{
                    maxHeight: "430px",
                    overflowY: "auto",
                    paddingRight: "8px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    {user.modules.map((moduleId) => {
                        const module =
                            modulesRegistry[moduleId];

                        if (!module) {
                            return null;
                        }

                        const options =
                            module.options ?? {};

                        const defaults =
                            module.defaults?.[user.profile] ?? [];

                        const selectedOptions =
                            user.modulesSettings?.[moduleId] ??
                            defaults;

                        return (
                            <div
                                key={moduleId}
                                style={{
                                    padding: "20px",
                                    border:
                                        "1px solid var(--border)",
                                    borderRadius: "16px",
                                    background:
                                        "var(--bg-surface)",
                                    boxSizing: "border-box",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0 0 16px",
                                        fontSize: "18px",
                                        color:
                                            "var(--text-primary)",
                                    }}
                                >
                                    {module.title}
                                </h3>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(2, minmax(0, 1fr))",
                                        columnGap: "24px",
                                        rowGap: "14px",
                                    }}
                                >
                                    {Object.entries(options).map(
                                        ([optionId, option]) => {
                                            const selected =
                                                selectedOptions.includes(
                                                    optionId
                                                );

                                            return (
                                                <div
                                                    key={optionId}
                                                    style={{
                                                        display: "flex",
                                                        alignItems:
                                                            "center",
                                                        justifyContent:
                                                            "space-between",
                                                        gap: "12px",
                                                        minWidth: 0,
                                                        padding:
                                                            "10px 0",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            color:
                                                                "var(--text-primary)",
                                                            fontSize:
                                                                "15px",
                                                            fontWeight:
                                                                500,
                                                        }}
                                                    >
                                                        {option.title}
                                                    </span>

                                                    <Switch
                                                        checked={
                                                            selected
                                                        }
                                                        onChange={() =>
                                                            toggleOption(
                                                                moduleId,
                                                                optionId
                                                            )
                                                        }
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}