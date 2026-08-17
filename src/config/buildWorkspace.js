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

        const defaults =
            module.defaults?.[user.profile] ?? [];

        const selectedOptions =
            user.modulesSettings?.[moduleId] ??
            defaults;

        sidebarItems.forEach((item) => {

            if (item.path) {
                if (
                    item.option &&
                    !selectedOptions.includes(item.option)
                ) {
                    return;
                }

                if (!existingPaths.has(item.path)) {
                    sidebar.push(item);
                    existingPaths.add(item.path);
                }

                return;
            }

            if (item.children) {
                const newChildren = item.children.filter(
                    (child) => {
                        if (
                            child.option &&
                            !selectedOptions.includes(
                                child.option
                            )
                        ) {
                            return false;
                        }

                        return !existingPaths.has(
                            child.path
                        );
                    }
                );

                if (newChildren.length > 0) {
                    sidebar.push({
                        ...item,
                        children: newChildren,
                    });

                    newChildren.forEach((child) =>
                        existingPaths.add(
                            child.path
                        )
                    );
                }
            }
        });
    });

    return {
        sidebar,
        modules: user.modules,
        modulesSettings: user.modulesSettings ?? {},
        profile: user.profile,
    };
}