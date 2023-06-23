import { useReducer } from "react";
import { Task } from "../models/Task";
import { tasksReducer } from "../reducers/TaskReducer";
import { TaskItem } from "./TaskItem";
import { NewTaskForm } from "./NewTaskForm";

const initialTasks: Task[] = [
  { id: 1, title: "タスク1", completed: false },
  { id: 2, title: "タスク2", completed: true },
  { id: 3, title: "タスク3", completed: false },
];

export function TaskList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleTaskToggle(id: number) {
    dispatch({ type: "TOGGLE_TASK", id });
  }

  function handleTaskNameChange(id: number, title: string) {
    dispatch({ type: "EDIT_TASK_NAME", id, title });
  }

  function handleDeleteTask(id: number) {
    dispatch({ type: "DELETE_TASK", id });
  }

  function handleAddTask(title: string) {
    dispatch({ type: "ADD_TASK", title });
  }

  return (
    <>
      <NewTaskForm handleAddTask={handleAddTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleToggle={handleTaskToggle}
          handleNameChange={handleTaskNameChange}
          handleDelete={handleDeleteTask}
        />
      ))}
    </>
  );
}
