import "./TaskCard.css";
import { Circle, CircleCheck } from "lucide-react";

export default function TaskCard({ task, onToggle }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h4 className={task.completed ? "task-completed" : ""}>
          {task.title}
        </h4>

        <p>{task.priority}</p>
      </div>

      <button
        className="task-check"
        onClick={onToggle}
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
    </div>
  );
}