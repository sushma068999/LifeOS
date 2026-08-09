import { profileWorkspaces } from "../config/workspaces/profileWorkspaces";
import { moduleRegistry } from "../config/modules/moduleRegistry";

export function buildWorkspace(user) {
    const workspace = [];

    // Base workspaces for the selected profile
    const base =
        profileWorkspaces[user.profile] ?? [];

    return [
    ...base.flat(),
    ...(user.modules ?? [])
        .map(name => moduleRegistry[name])
        .filter(Boolean),
    ];

    // Extra modules selected during onboarding
    (user.modules ?? []).forEach((moduleName) => {
        const module = moduleRegistry[moduleName];

        if (module) {
        workspace.push(module);
        }
    });

    return workspace;
}