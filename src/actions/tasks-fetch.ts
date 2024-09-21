export const revalidate = 30;

async function createTaskFetch(task: string) {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });

  const data = await response.json();
  return data;
}

async function getTasksFetch() {
  const response = await fetch("/api/tasks", {
    method: "GET",
  });

  const tasks = await response.json();
  console.log(tasks);
  return tasks;
}

async function updateTaskFetch({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) {
  const response = await fetch("/api/tasks", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, completed }),
  });

  const data = await response.json();
  return data;
}

async function deleteTaskFetch(id: string) {
  const response = await fetch("/api/tasks", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await response.json();
  return data;
}

export { createTaskFetch, deleteTaskFetch, getTasksFetch, updateTaskFetch };
