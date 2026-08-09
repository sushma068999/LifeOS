import SettingsRow from "../../Commons/SettingsRow";
import EditorSection from "./EditorSection";

import { useDashboard } from "../../../context/DashboardContext";
import { widgetDefaults } from "../../../config/widgetDefaults";

export default function TodaysFocusEditor() {

    const {
        widgetSettings,
        updateWidgetSettings,
    } = useDashboard();

    const settings = {
        ...widgetDefaults.todayFocus,
        ...(widgetSettings.todayFocus ?? {}),
    };

    return (

        <EditorSection title="Display">

            <SettingsRow
                title="Priority"
                description="Show priority chips."
                checked={settings.showPriority}
                onChange={() =>
                    updateWidgetSettings(
                        "todayFocus",
                        {
                            showPriority: !settings.showPriority,
                        }
                    )
                }
            />

            <SettingsRow
                title="Category"
                description="Show category chips."
                checked={settings.showCategory}
                onChange={() =>
                    updateWidgetSettings(
                        "todayFocus",
                        {
                            showCategory: !settings.showCategory,
                        }
                    )
                }
            />

            <SettingsRow
                title="Time"
                description="Show task time."
                checked={settings.showTime}
                onChange={() =>
                    updateWidgetSettings(
                        "todayFocus",
                        {
                            showTime: !settings.showTime,
                        }
                    )
                }
            />

        </EditorSection>

    );

}