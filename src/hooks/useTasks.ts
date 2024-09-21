import { ITask } from "@/@types/task";
import { createTask, deleteTask, getTasks, updateTask } from "@/actions/tasks";
import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<ITask[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks.filter((task) => !task.completed));
      setTasksCompleted(fetchedTasks.filter((task) => task.completed));
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onTaskCreate = async ({ task }: { task: string }) => {
    setLoading(true);
    try {
      await createTask(task);
      await fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setLoading(false);
    }
  };

  const onTaskUpdate = async ({ id }: { id: string }) => {
    setLoading(true);
    try {
      await updateTask({ id });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setLoading(false);
    }
  };

  const onTaskDelete = async () => {
    if (taskToDelete) {
      try {
        await deleteTask(taskToDelete);
        fetchTasks();
      } catch (error) {
        console.error("Error deleting task:", error);
      } finally {
        setTaskToDelete(null);
      }
    }
  };

  return {
    tasks,
    tasksCompleted,
    loading,
    fetchTasks,
    setTaskToDelete,
    onTaskCreate,
    onTaskUpdate,
    onTaskDelete,
  };
};

export { useTasks };
