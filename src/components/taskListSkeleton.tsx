import styles from "./taskList.module.scss";

const TaskListSkeleton = () => {
  return (
    <section id="tasks-list" className={styles.tasks}>
      <div id="tasks_in_progress">
        <h2>Suas tarefas de hoje</h2>
        <ul>
          <li className={styles.taskItemSkeleton}></li>
          <li className={styles.taskItemSkeleton}></li>
          <li className={styles.taskItemSkeleton}></li>
        </ul>
      </div>
    </section>
  );
};

export default TaskListSkeleton;
