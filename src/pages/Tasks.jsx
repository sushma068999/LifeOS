import { useEffect, useState } from "react";

import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";
import Button from "../components/Commons/Button";

export default function Tasks() {
    const [tasks, setTasks] = useState(() => {
        const saved =
            localStorage.getItem(
                "lifeos-tasks"
            );

        return saved
            ? JSON.parse(saved)
            : [];
    });

    const [editingTask, setEditingTask] =
        useState(null);

    const [isAdding, setIsAdding] =
        useState(false);

    useEffect(() => {
        localStorage.setItem(
            "lifeos-tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    function addTask(task) {
        const newTask = {
            ...task,
            id: Date.now(),
            createdAt:
                new Date().toISOString(),
        };

        setTasks((previous) => [
            ...previous,
            newTask,
        ]);

        setIsAdding(false);
    }

    function toggleTask(id) {
        setTasks((previous) =>
            previous.map((task) =>
                task.id === id
                    ? {
                          ...task,
                          completed:
                              !task.completed,
                          completedAt:
                              !task.completed
                                  ? new Date().toISOString()
                                  : null,
                      }
                    : task
            )
        );
    }

    function deleteTask(id) {
        setTasks((previous) =>
            previous.filter(
                (task) => task.id !== id
            )
        );

        if (
            editingTask &&
            editingTask.id === id
        ) {
            setEditingTask(null);
        }
    }

    function updateTask(updatedTask) {
        setTasks((previous) =>
            previous.map((task) =>
                task.id === updatedTask.id
                    ? {
                          ...task,
                          ...updatedTask,
                      }
                    : task
            )
        );

        setEditingTask(null);
    }

    function openEdit(task) {
        setEditingTask(task);
    }

    function closeForm() {
        setIsAdding(false);
        setEditingTask(null);
    }

    return (
        <div
            style={{
                padding: "32px",
                maxWidth: "1100px",
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                        "space-between",
                    marginBottom: "24px",
                }}
            >
                <h1
                    style={{
                        margin: 0,
                    }}
                >
                    Tasks
                </h1>

                <Button
                    type="button"
                    onClick={() =>
                        setIsAdding(true)
                    }
                >
                    + Add Task
                </Button>
            </div>

            <TaskList
                tasks={tasks}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={openEdit}
            />

            {(isAdding || editingTask) && (
                <div
                    onClick={closeForm}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        background:
                            "rgba(31, 41, 51, 0.35)",
                    }}
                >
                    <div
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            maxHeight:
                                "90vh",
                            overflowY: "auto",
                        }}
                    >
                        <TaskForm
                            onAdd={addTask}
                            editingTask={
                                editingTask
                            }
                            onUpdate={
                                updateTask
                            }
                            onClose={
                                closeForm
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
}