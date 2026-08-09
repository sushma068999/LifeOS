import { modulesRegistry } from "./modules/modulesRegistry";

export function buildDashboard(user) {
    const widgets = [];

    // Profile defaults

    widgets.push("greeting");
    widgets.push("todayFocus");
    widgets.push("aiInsights");

    switch (user.profile) {
        case "professional":
            widgets.push("calendar");
            break;

        case "creator":
            widgets.push("contentIdeas");
            break;

        default:
            break;
    }

    // Module widgets

    (user.modules ?? []).forEach((moduleId) => {

        const module =
            modulesRegistry[moduleId];

        if (!module) return;

        widgets.push(
            ...(module.widgets ?? [])
        );

    });

    return [...new Set(widgets)].sort((a, b) => {

        if (a === "greeting") return -1;
        if (b === "greeting") return 1;

        return 0;
    });
}