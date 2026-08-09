import { sidebarConfig } from "./sidebarConfig";
import { modulesRegistry } from "./modules/modulesRegistry";

export function buildWorkspace(user) {
    const sidebar = (sidebarConfig[user.profile] || []).map(
        (item) => ({
            ...item,
            children: item.children
                ? [...item.children]
                : undefined,
        })
    );

    const existingPaths = new Set();

    sidebar.forEach((item) => {
        if (item.path) {
        existingPaths.add(item.path);
        }

        item.children?.forEach((child) => {
        existingPaths.add(child.path);
        });
    });

    (user.modules ?? []).forEach((moduleId) => {
        const module = modulesRegistry[moduleId];

        if (!module) return;

        const sidebarItems =
            module.sidebar[user.profile] ??
            module.sidebar.other ??
            [];

        sidebarItems.forEach((item) => {
        if (item.path) {
            if (!existingPaths.has(item.path)) {
            sidebar.push(item);
            existingPaths.add(item.path);
            }
        }

        else if (item.children) {
            const newChildren = item.children.filter(
            (child) => !existingPaths.has(child.path)
            );

            if (newChildren.length > 0) {
            sidebar.push({
                ...item,
                children: newChildren,
            });

            newChildren.forEach((child) =>
                existingPaths.add(child.path)
            );
            }
        }
        });
    });

    return {
        sidebar,
        modules: user.modules,
        profile: user.profile,
    };
}