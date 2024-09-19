import { Button } from "@/components/button";
import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "./page.module.css";

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
        <Button variant="primary">Adicionar</Button>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="danger">Danger</Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
