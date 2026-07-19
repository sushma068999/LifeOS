import { useState } from "react";
import Button from "../Commons/Button";
import Input from "../Commons/Input";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    dueDate: "",
    startTime: "",
    endTime: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.title.trim()) return;

    onAdd({
      ...task,
      id: Date.now(),
    });

    setTask({
      title: "",
      description: "",
      category: "",
      priority: "medium",
      dueDate: "",
      startTime: "",
      endTime: "",
      completed: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "12px",
        marginBottom: "24px",
      }}
    >
      <Input
        placeholder="Add a task..."
        value={task.title}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value,
          })
        }
      />

      <Button type="submit">
        Add
      </Button>
    </form>
  );
}