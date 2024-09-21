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

export { createTask };
