import {
    Circle,
    CircleCheck,
    Pencil,
    Trash2,
} from "lucide-react";

import "./TaskCard.css";

export default function TaskCard({
    task,
    onToggle,
    onDelete,
    onEdit,
}) {
    return (
        <div className="task-card">
            <button
                className="task-check"
                onClick={onToggle}
                aria-label={
                    task.completed
                        ? "Mark task incomplete"
                        : "Mark task complete"
                }
            >
                {task.completed ? (
                    <CircleCheck
                        size={24}
                        color="var(--success)"
                    />
                ) : (
                    <Circle
                        size={24}
                        color="var(--text-muted)"
                    />
                )}
            </button>

            <div className="task-info">
                <h4
                    className={
                        task.completed
                            ? "task-completed"
                            : ""
                    }
                >
                    {task.title}
                </h4>

                {task.description && (
                    <p>
                        {task.description}
                    </p>
                )}

                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginTop: "8px",
                    }}
                >
                    {task.category && (
                        <span>
                            {task.category}
                        </span>
                    )}

                    <span>
                        {task.priority}
                    </span>

                    {task.dueDate && (
                        <span>
                            Due:{" "}
                            {task.dueDate}
                        </span>
                    )}

                    {task.startTime &&
                        task.endTime && (
                            <span>
                                {
                                    task.startTime
                                }{" "}
                                –{" "}
                                {
                                    task.endTime
                                }
                            </span>
                        )}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "6px",
                }}
            >
                <button
                    className="task-check"
                    onClick={onEdit}
                    aria-label="Edit task"
                >
                    <Pencil
                        size={18}
                        color="var(--text-secondary)"
                    />
                </button>

                <button
                    className="task-check"
                    onClick={onDelete}
                    aria-label="Delete task"
                >
                    <Trash2
                        size={18}
                        color="var(--danger)"
                    />
                </button>
            </div>
        </div>
    );
}