import { useEffect, useState } from "react";

import Button from "../Commons/Button";
import Input from "../Commons/Input";

const initialTask = {
    title: "",
    description: "",
    category: "",
    priority: "medium",
    dueDate: "",
    startTime: "",
    endTime: "",
    completed: false,
};

export default function TaskForm({
    onAdd,
    onUpdate,
    onClose,
    editingTask = null,
}) {
    const [task, setTask] =
        useState(initialTask);

    const [error, setError] =
        useState("");

    const isEditing =
        Boolean(editingTask);

    useEffect(() => {
        if (editingTask) {
            setTask({
                ...initialTask,
                ...editingTask,
            });
        } else {
            setTask({
                ...initialTask,
            });
        }

        setError("");
    }, [editingTask]);

    function updateField(field, value) {
        setTask((previous) => ({
            ...previous,
            [field]: value,
        }));

        setError("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!task.title.trim()) {
            setError(
                "Task title is required."
            );
            return;
        }

        if (
            task.startTime &&
            task.endTime &&
            task.endTime <= task.startTime
        ) {
            setError(
                "End time must be later than start time."
            );
            return;
        }

        const cleanedTask = {
            ...task,
            title: task.title.trim(),
        };

        if (isEditing) {
            onUpdate(cleanedTask);
        } else {
            onAdd(cleanedTask);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "24px",
                background:
                    "var(--bg-surface)",
                border:
                    "1px solid var(--border)",
                borderRadius:
                    "var(--radius-lg)",
                boxShadow:
                    "var(--shadow-lg)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                        "space-between",
                }}
            >
                <h2
                    style={{
                        margin: 0,
                        color:
                            "var(--text-primary)",
                    }}
                >
                    {isEditing
                        ? "Edit Task"
                        : "Add Task"}
                </h2>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                        border: "none",
                        background:
                            "transparent",
                        color:
                            "var(--text-muted)",
                        fontSize: "22px",
                        cursor: "pointer",
                        padding: "4px 8px",
                    }}
                >
                    ×
                </button>
            </div>

            <Input
                placeholder="Task title..."
                value={task.title}
                onChange={(e) =>
                    updateField(
                        "title",
                        e.target.value
                    )
                }
            />

            <textarea
                placeholder="Description (optional)"
                value={task.description}
                onChange={(e) =>
                    updateField(
                        "description",
                        e.target.value
                    )
                }
                style={{
                    minHeight: "80px",
                    padding: "10px 12px",
                    border:
                        "1px solid var(--border)",
                    borderRadius:
                        "var(--radius-sm)",
                    background:
                        "var(--bg-main)",
                    color:
                        "var(--text-primary)",
                    fontFamily: "inherit",
                    resize: "vertical",
                }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                }}
            >
                <input
                    type="text"
                    placeholder="Category"
                    value={task.category}
                    onChange={(e) =>
                        updateField(
                            "category",
                            e.target.value
                        )
                    }
                />

                <select
                    value={task.priority}
                    onChange={(e) =>
                        updateField(
                            "priority",
                            e.target.value
                        )
                    }
                >
                    <option value="low">
                        Low priority
                    </option>

                    <option value="medium">
                        Medium priority
                    </option>

                    <option value="high">
                        High priority
                    </option>
                </select>

                <input
                    type="date"
                    value={task.dueDate}
                    onChange={(e) =>
                        updateField(
                            "dueDate",
                            e.target.value
                        )
                    }
                />

                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                    }}
                >
                    <input
                        type="time"
                        value={
                            task.startTime
                        }
                        onChange={(e) =>
                            updateField(
                                "startTime",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="time"
                        value={
                            task.endTime
                        }
                        onChange={(e) =>
                            updateField(
                                "endTime",
                                e.target.value
                            )
                        }
                    />
                </div>
            </div>

            {error && (
                <div
                    style={{
                        padding:
                            "10px 12px",
                        border:
                            "1px solid var(--danger)",
                        borderRadius:
                            "var(--radius-sm)",
                        background:
                            "var(--bg-main)",
                        color:
                            "var(--danger)",
                        fontSize: "14px",
                    }}
                >
                    {error}
                </div>
            )}

            <div
                style={{
                    display: "flex",
                    justifyContent:
                        "flex-end",
                    gap: "10px",
                }}
            >
                <Button
                    type="button"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button type="submit">
                    {isEditing
                        ? "Save Changes"
                        : "Add Task"}
                </Button>
            </div>
        </form>
    );
}