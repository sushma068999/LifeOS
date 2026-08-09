import SettingsRow from "../../Commons/SettingsRow";
import EditorSection from "./EditorSection";

import { useDashboard } from "../../../context/DashboardContext";
import { widgetDefaults } from "../../../config/widgetDefaults";

export default function GreetingEditor() {
    const {
        widgetSettings,
        updateWidgetSettings,
    } = useDashboard();
    const settings = {
        ...widgetDefaults.greeting,
        ...(widgetSettings.greeting ?? {}),
    };

    return (
        <div>

            <EditorSection title="Greeting">

                <SettingsRow
                    title="Show Greeting"
                    description="Display welcome message."
                    checked={settings.showGreeting}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showGreeting: !settings.showGreeting,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Show Current Time"
                    description="Display current time."
                    checked={settings.showTime}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showTime: !settings.showTime,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Show Time Block"
                    description="Display Morning / Afternoon / Evening."
                    checked={settings.showBlock}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showBlock: !settings.showBlock,
                            }
                        )
                    }
                />

            </EditorSection>

            <EditorSection title="Quick Stats">

                <SettingsRow
                    title="Tasks"
                    description="Display tasks count."
                    checked={settings.showTasks}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showTasks: !settings.showTasks,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Habits"
                    description="Display habits count."
                    checked={settings.showHabits}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showHabits: !settings.showHabits,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Calendar"
                    description="Display today's events."
                    checked={settings.showCalendar}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showCalendar: !settings.showCalendar,
                            }
                        )
                    }
                />

                <SettingsRow
                    title="Goals"
                    description="Display active goals."
                    checked={settings.showGoals}
                    onChange={() =>
                        updateWidgetSettings(
                            "greeting",
                            {
                                showGoals: !settings.showGoals,
                            }
                        )
                    }
                />

            </EditorSection>

        </div>
    );
}