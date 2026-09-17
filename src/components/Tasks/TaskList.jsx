import TaskCard from "./TaskCard";

export default function TaskList({
    tasks,
    onToggle,
    onDelete,
    onEdit,
}) {
    if (tasks.length === 0) {
        return (
            <p
                style={{
                    marginTop: "24px",
                    color:
                        "var(--text-muted)",
                }}
            >
                No tasks yet.
            </p>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "24px",
            }}
        >
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={() =>
                        onToggle(task.id)
                    }
                    onDelete={() =>
                        onDelete(task.id)
                    }
                    onEdit={() =>
                        onEdit(task)
                    }
                />
            ))}
        </div>
    );
}