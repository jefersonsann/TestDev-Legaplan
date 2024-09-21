"use client";

import { useTasks } from "@/hooks/useTasks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import trash from "../assets/trash.svg";
import { Button } from "./button";
import { Dialog } from "./dialog";
import { Input } from "./input";
import styles from "./taskList.module.scss";
import TaskListSkeleton from "./taskListSkeleton";

const TaskList = () => {
  const {
    tasks,
    tasksCompleted,
    loading,
    setTaskToDelete,
    onTaskCreate,
    onTaskUpdate,
    onTaskDelete,
  } = useTasks();
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task = event.currentTarget["new-task"].value;

    try {
      await onTaskCreate({ task });
    } catch (error) {
      console.log({ error });
    } finally {
      onClose();
    }
  };

  const openDeleteDialog = (taskId: string) => {
    setTaskToDelete(taskId);
    router.push(`?showDialog=deleteTask&taskId=${taskId}`);
  };

  const onClose = () => {
    router.back();
    setTaskToDelete(null);
  };

  const onOk = async () => {
    onTaskDelete();
    onClose();
  };

  if (loading) return <TaskListSkeleton />;

  return (
    <>
      <section id="tasks-list" className={styles.tasks}>
        {tasks.length < 1 && tasksCompleted.length < 1 ? (
          <h2>Nenhuma task para hoje</h2>
        ) : (
          <>
            {tasks.length > 0 && (
              <div id="tasks_in_progress">
                <h2>Suas tarefas de hoje</h2>
                <ul>
                  {tasks.map(({ id, task, completed }) => {
                    return (
                      <li className={styles.taskItem} key={id}>
                        <div
                          className={styles.checkbox}
                          onChange={() => onTaskUpdate({ id })}
                        >
                          <input
                            id={id}
                            type="checkbox"
                            defaultChecked={completed}
                            disabled={loading}
                          />
                          <label htmlFor={id}>
                            <span className={styles.checkboxCustom} />
                            {task}
                          </label>
                        </div>
                        <div
                          className={styles.delete}
                          onClick={() => openDeleteDialog(id)}
                        >
                          <Image src={trash} alt="Icon Botão de deletar task" />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {tasksCompleted.length > 0 && (
              <div id="tasks_finished">
                <h2>Tarefas finalizadas</h2>
                <ul>
                  {tasksCompleted.map(({ id, task, completed }) => (
                    <li className={styles.taskItem} key={id}>
                      <div
                        className={styles.checkbox}
                        onChange={() => onTaskUpdate({ id })}
                      >
                        <input
                          id={id}
                          type="checkbox"
                          defaultChecked={completed}
                          disabled={loading}
                        />
                        <label htmlFor={id}>
                          <span className={styles.checkboxCustom} />
                          {task}
                        </label>
                      </div>
                      <div
                        className={styles.delete}
                        onClick={() => openDeleteDialog(id)}
                      >
                        <Image src={trash} alt="Icon Botão de deletar task" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        <Dialog type="deleteTask">
          <div className="dialog">
            <h3 className="dialog title">Confirmar exclusão</h3>
            <p>Tem certeza que deseja excluir esta tarefa?</p>
            <div className="dialog buttons">
              <Button variant="danger" onClick={onOk}>
                Confirmar
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </div>
        </Dialog>
      </section>

      <Button type="button" onClick={() => router.push("?showDialog=newTask")}>
        Adicionar nova tarefa
      </Button>
      <Dialog type="newTask">
        <form onSubmit={onSubmit} method="dialog" className="dialog">
          <h3 className="dialog title">Nova tarefa</h3>
          <Input
            label="Titulo"
            type="text"
            id="new-task"
            name="new-task"
            placeholder="Digite"
          />
          <div className="dialog buttons">
            <Button type="submit">Adicionar</Button>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export { TaskList };
