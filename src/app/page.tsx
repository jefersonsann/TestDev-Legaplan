import Header from "@/components/header";
import { TaskList } from "@/components/taskList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <TaskList />
      </main>
    </div>
  );
}
