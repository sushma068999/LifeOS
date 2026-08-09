import { habitsModule } from "./habit";
import { journalModule } from "./journal";
import { financeModule } from "./finance";
import { familyModule } from "./family";

export const modulesRegistry = {
    habits: habitsModule,
    journal: journalModule,
    finance: financeModule,
    family: familyModule,
};

export const modulesList = Object.values(modulesRegistry).map((module) => ({
    id: module.id,
    title: module.title,
    icon: module.icon,
    description: module.description,
}));