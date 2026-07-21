import { createContext, useContext, useState, useEffect } from "react";

const TabContext = createContext();

export function TabProvider({ children }) {
    const [tabs, setTabs] = useState(() => {
    const savedTabs = localStorage.getItem("lifeos-tabs");

    if (savedTabs) {
        return JSON.parse(savedTabs);
    }

    return [
        {
        title: "Dashboard",
        id: "dashboard",
        path: "/dashboard",
        },
    ];
    });

    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("lifeos-active-tab") || "Dashboard";
    });


    const openTab = (tab) => {

        const exists = tabs.some(
            existingTab => existingTab.id === tab.id
        );

        if (!exists) {
            setTabs(prev => [
                ...prev,
                tab,
            ]);
        }

        setActiveTab(tab.title);
    };


    const closeTab = (title) => {
    const updatedTabs = tabs.filter(
        (tab) => tab.title !== title
    );

    let nextTab = null;

    if (updatedTabs.length === 0) {
        nextTab = {
        title: "Dashboard",
        id: "dashboard",
        path: "/dashboard",
        };

        setTabs([nextTab]);
    } else {
        setTabs(updatedTabs);

        if (activeTab === title) {
        nextTab = updatedTabs[0];
        } else {
        nextTab = updatedTabs.find(
            (tab) => tab.title === activeTab
        );
        }
    }

    setActiveTab(nextTab.title);

    return nextTab;
    };

    useEffect(() => {
    localStorage.setItem(
        "lifeos-tabs",
        JSON.stringify(tabs)
    );
    }, [tabs]);

    useEffect(() => {
    localStorage.setItem(
        "lifeos-active-tab",
        activeTab
    );
    }, [activeTab]);

    return (
        <TabContext.Provider
            value={{
                tabs,
                setTabs,
                activeTab,
                setActiveTab,
                openTab,
                closeTab,
            }}
        >
            {children}
        </TabContext.Provider>
    );
}


export function useTabs() {
    return useContext(TabContext);
}