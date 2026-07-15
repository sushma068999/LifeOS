import { useState } from "react";
import { cardStyle } from "../styles/cardStyle";

import StepIndicator from "../components/Auth/OnboardingPP/StepIndicator";
import Step1Name from "../components/Auth/OnboardingPP/Step1Name";
import Step2Profile from "../components/Auth/OnboardingPP/Step2Profile";
import Step3Interests from "../components/Auth/OnboardingPP/Step3Interests";
import Step4Plan from "../components/Auth/OnboardingPP/Step4Plan";

export default function Onboarding({
    onFinish,
}) {
    const [step, setStep] = useState(1);

    const [user, setUser] = useState({
        name: "",
        profile: "",
        interests: [],
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
            zIndex: 999,
            padding: "24px",
        }}
        >
        <div
            style={{
                ...cardStyle,
                width: "650px",
                padding: "32px",
            }}
        >
            <StepIndicator
                currentStep={step}
                totalSteps={4}
            />

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
            <Step3Interests
                user={user}
                setUser={setUser}
            />
            )}
            {step === 4 && (
            <Step4Plan
                user={user}
                setUser={setUser}
            />
            )}

            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "32px",
            }}
            >
            <button
                disabled={backDisabled}
                onClick={() => setStep(step - 1)}
                style={{
                    background: "transparent",
                    border: "none",
                    color:
                        backDisabled
                        ? "#bdbdbd"
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
                    if (step < 4) {
                        setStep(step + 1);
                    } else {
                        onFinish(user);
                    }
                }}
                style={{
                    background: "transparent",
                    border: "none",
                    color:
                        nextDisabled
                        ? "#bdbdbd"
                        : "var(--primary)",
                    cursor:
                        nextDisabled
                        ? "not-allowed"
                        : "pointer",
                    fontWeight: 600,
                    fontSize: "16px",
                    }}
            >
                {step === 4? "Finish" : "Next"}
            </button>
            </div>
        </div>
        </div>
    );
}