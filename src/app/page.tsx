import { Button } from "@/components/button";
import Image from "next/image";
import logo from "../assets/logo.svg";
import trash from "../assets/trash.svg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src={logo} alt="logo image" />
        <div className={styles.welcome}>
          Bem-vindo de volta, {"Diego" /* nome do usuário logado */}
        </div>
        <div className={styles.date}>
          {"Segunda, 01 de dezembro de 2025" /* Data atual */}
        </div>
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
                  <div className={styles.delete}>
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
                  <input id={`check-b-${7}`} type="checkbox" checked />
                  <label htmlFor={`check-b-${7}`}>
                    <span className={styles.checkboxCustom} />
                    Task, completed #{7}
                  </label>
                </div>
                <div className={styles.delete}>
                  <Image src={trash} alt="Icon Botão de deletar task" />
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Button>Adicionar nova tarefa</Button>
      </main>
    </div>
  );
}
