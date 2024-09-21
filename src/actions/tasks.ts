/* eslint-disable prefer-const */
import { ITask } from "@/@types/task";

let TASKS: ITask[] = [];

if (typeof window !== "undefined") {
  const tasksString = localStorage.getItem("TASKS");
  TASKS = tasksString ? JSON.parse(tasksString) : [];
}

async function createTask(task: string) {
  try {
    const id = Math.floor(Math.random() * 999999).toString();
    const newTask: ITask = {
      id,
      task,
      completed: false,
      created_at: new Date(),
    };

    TASKS.push(newTask);
    localStorage.setItem("TASKS", JSON.stringify(TASKS));

    return new Response(
      JSON.stringify({ message: "Successfully created task", task: newTask }),
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error creating task:", error);
    return new Response(
      JSON.stringify({ message: "Error creating task", error }),
      { status: 500 }
    );
  }
}

async function getTasks() {
  return TASKS;
}

async function updateTask({ id }: { id: string }) {
  try {
    const index = TASKS.findIndex((task) => task.id === id);

    TASKS[index].completed = !TASKS[index].completed;

    return new Response(
      JSON.stringify({ message: "Successfully update task", task: TASKS }),
      { status: 202 }
    );
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({ message: "Error creating task", error }),
      { status: 500 }
    );
  }
}

async function deleteTask(id: string) {
  const index = TASKS.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error("Task not found");
  }
  TASKS.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(TASKS));
  return new Response(
    JSON.stringify({ message: "Successfully delete task", task: TASKS }),
    { status: 200 }
  );
}

export { createTask, deleteTask, getTasks, updateTask };
