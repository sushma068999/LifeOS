import SettingsRow from "../../Commons/SettingsRow";
import EditorSection from "./EditorSection";

import { useDashboard } from "../../../context/DashboardContext";
import { widgetDefaults } from "../../../config/widgetDefaults";

export default function AIInsightsEditor() {
    const {
        widgetSettings,
        updateWidgetSettings,
    } = useDashboard();

    const settings = {
        ...widgetDefaults.aiInsights,
        ...(widgetSettings.aiInsights ?? {}),
    };

    return (
        <>
            <EditorSection title="Insights">

                <SettingsRow
                    title="Productivity Score"
                    description="Show productivity percentages."
                    checked={settings.showScore}
                    onChange={() =>
                        updateWidgetSettings(
                            "aiInsights",
                            {
                                showScore: !settings.showScore,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Show Progress"
                    description="Show progress categories and bars."
                    checked={settings.showProgress}
                    onChange={() =>
                        updateWidgetSettings(
                            "aiInsights",
                            {
                                showProgress:
                                    !settings.showProgress,
                            }
                        )
                    }
                />

            </EditorSection>

            <EditorSection title="Analysis">

                <SettingsRow
                    title="AI Remark"
                    description="Show the AI-generated insight."
                    checked={settings.showRecommendation}
                    onChange={() =>
                        updateWidgetSettings(
                            "aiInsights",
                            {
                                showRecommendation:
                                    !settings.showRecommendation,
                            }
                        )
                    }
                />

            </EditorSection>
        </>
    );
}