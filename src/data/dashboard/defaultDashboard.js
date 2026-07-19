const coreWidgets = [
    {
        id: "greeting",
        type: "greeting",
        source: "default",
        hidden: false,
        removable: true,
        size: "large",
        position: 1,
    },

    {
        id: "focus",
        type: "focus",
        source: "default",
        hidden: false,
        removable: true,
        size: "large",
        position: 2,
    },

    {
        id: "analysis",
        type: "analysis",
        source: "default",
        hidden: false,
        removable: true,
        size: "large",
        position: 3,
    },

];

const profileWidgets = {
    student: [
        {
            id: "curriculum",
            type: "curriculum",
            source: "default",
            hidden: false,
            removable: true,
            size: "medium",
            position: 4,
        },
    ],
    professional: [],
    creator: [],
    hobbyist: [],
    other: [],
};

export function getDefaultDashboard(profile){
    return [
        ...coreWidgets,
        ...(profileWidgets[profile] || []),
    ];
}