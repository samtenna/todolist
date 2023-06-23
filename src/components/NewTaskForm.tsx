import { FormEvent, useState } from "react";

interface NewTaskFormProps {
  handleAddTask: (title: string) => void;
}

export function NewTaskForm({ handleAddTask }: NewTaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!title) {
      return;
    }

    handleAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
