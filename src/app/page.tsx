"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { Input } from "@/components/input";
import logo from "../assets/logo.svg";
import trash from "../assets/trash.svg";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const onOk = () => {
    router.back();
  };

  const openDeleteDialog = (taskId: number) => {
    router.push(`?showDialog=deleteTask&taskId=${taskId}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src={logo} alt="logo image" />
        <div className={styles.welcome}>Bem-vindo de volta, {"Diego"}</div>
        <div className={styles.date}>{"Segunda, 01 de dezembro de 2025"}</div>
      </header>
      <main className={styles.main}>
        <section id="tasks-list" className={styles.tasks}>
          <div id="tasks_in_progress">
            <h2>Suas tarefas de hoje</h2>
            <ul>
              {Array.from({ length: 5 }).map((_, index) => (
                <li className={styles.taskItem} key={index}>
                  <div className={styles.checkbox}>
                    <input id={`check-b-${index}`} type="checkbox" />
                    <label htmlFor={`check-b-${index}`}>
                      <span className={styles.checkboxCustom} />
                      Task, todo list #{index}
                    </label>
                  </div>
                  <div
                    className={styles.delete}
                    onClick={() => openDeleteDialog(index)}
                  >
                    <Image src={trash} alt="Icon Botão de deletar task" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="tasks_finished">
            <h2>Tarefas finalizadas</h2>
            <ul>
              <li className={styles.taskItem} key={7}>
                <div className={styles.checkbox}>
                  <input
                    id={`check-b-${7}`}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <label htmlFor={`check-b-${7}`}>
                    <span className={styles.checkboxCustom} />
                    Task, completed #{7}
                  </label>
                </div>
                <div
                  className={styles.delete}
                  onClick={() => openDeleteDialog(7)}
                >
                  <Image src={trash} alt="Icon Botão de deletar task" />
                </div>
              </li>
            </ul>
          </div>
        </section>

        <Button
          type="button"
          variant="primary"
          onClick={() => router.push("?showDialog=newTask")}
        >
          Adicionar nova tarefa
        </Button>

        <Dialog onClose={onClose} onOk={onOk} type="newTask">
          <form method="dialog" className={styles.form}>
            <h3 className={styles.title}>Nova tarefa</h3>
            <Input
              label="Titulo"
              type="text"
              id="new-task"
              name="new-task"
              placeholder="Digite"
            />
            <div className={styles.buttons}>
              <Button onClick={onOk}>Adicionar</Button>
              <Button variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </Dialog>

        <Dialog onClose={onClose} onOk={onOk} type="deleteTask">
          <div className={styles.form}>
            <h3 className={styles.title}>Confirmar exclusão</h3>
            <p>Tem certeza que deseja excluir esta tarefa?</p>
            <div className={styles.buttons}>
              <Button variant="danger" onClick={onOk}>
                Confirmar
              </Button>
              <Button variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </div>
        </Dialog>
      </main>
    </div>
  );
}
