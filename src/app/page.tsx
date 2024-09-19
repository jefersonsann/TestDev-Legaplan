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
          Bem-vindo de volta, {"Diego" /* Data atual */}
        </div>
        <div className={styles.date}>
          {"Segunda, 01 de dezembro de 2025" /* Data atual */}
        </div>
      </header>
      <main className={styles.main}>
        <section id="tasksList" className={styles.tasks}>
          <h2>Suas tarefas de hoje</h2>
          <ul>
            <li>
              <input type="checkbox" name="task" id="task_1" />
              <p>Lavar as mãos</p>
              <Image src={trash} alt="Icon Botão de deletar task" />
            </li>
            <li>
              <input type="checkbox" name="task" id="task_1" />
              <p>Fazer um bolo</p>
              <Image src={trash} alt="Icon Botão de deletar task" />
            </li>
            <li>
              <input type="checkbox" name="task" id="task_1" />
              <p>Lavar a louça</p>
              <Image src={trash} alt="Icon Botão de deletar task" />
            </li>
          </ul>
          <h2>Tarefas finalizadas</h2>
          <ul>
            <li>
              <input type="checkbox" name="task" id="task_1" />
              <p>Lavar a louça</p>
              <Image src={trash} alt="Icon Botão de deletar task" />
            </li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
