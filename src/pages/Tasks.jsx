import { useState } from "react";

import TaskForm from "../components/Tasks/TaskForm";
import TaskList from "../components/Tasks/TaskList";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div style={{ padding: "32px" }}>
      <h1>Tasks</h1>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
      />
    </div>
  );
}