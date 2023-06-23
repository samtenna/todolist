import { createRef, useState } from "react";
import { Task } from "../models/Task";

interface TaskItemProps {
  task: Task;
  handleToggle: (id: number) => void;
  handleNameChange: (id: number, title: string) => void;
  handleDelete: (id: number) => void;
}

export function TaskItem({
  task,
  handleToggle,
  handleNameChange,
  handleDelete,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  function handleLoseFocus() {
    setIsEditing(false);
  }

  function handleClickEdit() {
    setIsEditing(true);
    inputRef.current?.focus();
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggle(task.id)}
      />
      <input
        ref={inputRef}
        type="text"
        value={task.title}
        onChange={(e) => handleNameChange(task.id, e.target.value)}
        onBlur={handleLoseFocus}
      />
      <span>{task.title}</span>
      <div>
        <button onClick={handleClickEdit}>Edit</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
