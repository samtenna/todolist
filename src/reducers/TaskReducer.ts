import { Task } from "../models/Task";

type Action =
  | { type: "ADD_TASK"; title: string }
  | { type: "TOGGLE_TASK"; id: number }
  | { type: "EDIT_TASK_NAME"; id: number; title: string }
  | { type: "DELETE_TASK"; id: number };

type State = Task[];

export function tasksReducer(tasks: State, action: Action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, { id: Math.floor(Math.random() * 1000000), title: action.title, completed: false }];
    case "TOGGLE_TASK":
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }); 
    case "EDIT_TASK_NAME":
      return tasks.map((task) => {
        if (task.id === action.id) {
          return { ...task, title: action.title };
        }
        return task;
      });
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.id);
    default:
      throw new Error("Invalid action");
  }
}
