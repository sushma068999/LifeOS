import { widgetRegistry } from "./widgetRegistry";

export default function WidgetRenderer({ widgetId }) {

    const widget = widgetRegistry[widgetId];

    if (!widget) {
        return null;
    }

    const Component = widget.component;

    return <Component />;
}