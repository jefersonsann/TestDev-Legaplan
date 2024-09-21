import { ITask } from "@/@types/task";
import { randomUUID } from "crypto";

const TASKS: ITask[] = [];

export async function POST(request: Request) {
  try {
    const { task }: { task: string; completed: boolean } = await request.json();

    const id = randomUUID();
    const newTask: ITask = {
      id,
      task,
      completed: false,
      created_at: new Date(Date.now()),
    };

    TASKS.push(newTask);

    return new Response(
      JSON.stringify({ message: "Successfully created task", newTask }),
      { status: 201 }
    );
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({ message: "Error creating task", error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify(TASKS), { status: 200 });
}

export async function PATCH(request: Request) {
  try {
    const { id, completed }: { id: string; completed: boolean } =
      await request.json();

    const index = TASKS.findIndex((task) => task.id === id);

    TASKS[index].completed = completed;

    return new Response(
      JSON.stringify({ message: "Successfully update task", TASKS }),
      { status: 202 }
    );
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({ message: "Error creating task", error }),
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id }: { id: string } = await request.json();

    const index = TASKS.findIndex((task) => task.id === id);
    if (index === -1) throw new Error("Task not found");

    TASKS.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(TASKS));
    return new Response(
      JSON.stringify({ message: "Successfully delete task", task: TASKS }),
      { status: 200 }
    );
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({ message: "Error creating task", error }),
      { status: 500 }
    );
  }
}
