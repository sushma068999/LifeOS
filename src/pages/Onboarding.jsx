import { useState } from "react";
import { cardStyle } from "../styles/cardStyle";
import { buildDefaultCalendars } from "../utils/calendarData";

import StepIndicator from "../components/Auth/OnboardingPP/StepIndicator";
import Step1Name from "../components/Auth/OnboardingPP/Step1Name";
import Step2Profile from "../components/Auth/OnboardingPP/Step2Profile";
import Step3Modules from "../components/Auth/OnboardingPP/Step3Modules";
import Step4ModulesSettings from "../components/Auth/OnboardingPP/Step4ModulesSettings";
import Step5Plan from "../components/Auth/OnboardingPP/Step5Plan";

import { buildDashboard } from "../config/buildDashboard";

export default function Onboarding({
    onFinish,
}) {
    const [step, setStep] = useState(1);

    const [user, setUser] = useState({
        name: "",
        profile: "",
        modules: [],
        modulesSettings: {},
        dashboard: [],
        plan: "free",
    });

    const backDisabled = step === 1;

    const nextDisabled =
        (step === 1 && user.name.trim() === "") ||
        (step === 2 && user.profile === "");

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.35)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "var(--z-sidebar)",
                padding: "var(--space-5)",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    ...cardStyle,
                    width: "min(650px, 100%)",
                    maxHeight: "90vh",
                    padding: "var(--space-6)",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <StepIndicator
                    currentStep={step}
                    totalSteps={5}
                />

                <div
                    style={{
                        flex: 1,
                        minHeight: 0,
                        overflowY: "auto",
                        paddingRight: "var(--space-2)",
                    }}
                >
                    {step === 1 && (
                        <Step1Name
                            user={user}
                            setUser={setUser}
                        />
                    )}

                    {step === 2 && (
                        <Step2Profile
                            user={user}
                            setUser={setUser}
                        />
                    )}

                    {step === 3 && (
                        <Step3Modules
                            user={user}
                            setUser={setUser}
                        />
                    )}

                    {step === 4 && (
                        <Step4ModulesSettings
                            user={user}
                            setUser={setUser}
                        />
                    )}

                    {step === 5 && (
                        <Step5Plan
                            user={user}
                            setUser={setUser}
                        />
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "var(--space-5)",
                        paddingTop: "var(--space-4)",
                        borderTop:
                            "1px solid var(--border-light)",
                        flexShrink: 0,
                    }}
                >
                    <button
                        disabled={backDisabled}
                        onClick={() =>
                            setStep(step - 1)
                        }
                        style={{
                            background: "transparent",
                            border: "none",
                            color:
                                backDisabled
                                    ? "var(--text-muted)"
                                    : "var(--primary)",
                            cursor:
                                backDisabled
                                    ? "not-allowed"
                                    : "pointer",
                            fontWeight: 600,
                            fontSize: "16px",
                        }}
                    >
                        Back
                    </button>

                    <button
                        disabled={nextDisabled}
                        onClick={() => {
                            if (step < 5) {
                                setStep(step + 1);
                            } else {
                                const dashboard =
                                    buildDashboard(user);

                                const calendars =
                                    buildDefaultCalendars(
                                        user.profile
                                    );

                                onFinish({
                                    ...user,
                                    dashboard,
                                    calendars,
                                });
                            }
                        }}
                        style={{
                            background: "transparent",
                            border: "none",
                            color:
                                nextDisabled
                                    ? "var(--text-muted)"
                                    : "var(--primary)",
                            cursor:
                                nextDisabled
                                    ? "not-allowed"
                                    : "pointer",
                            fontWeight: 600,
                            fontSize: "16px",
                        }}
                    >
                        {step === 5
                            ? "Finish"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}