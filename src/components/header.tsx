import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/utils/format-data";
import logo from "../assets/logo.svg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="logo image" />
      </Link>
      <div className={styles.welcome}>Bem-vindo de volta, {"name"}</div>
      <div className={styles.date}>{formatDate(new Date())}</div>
    </header>
  );
};

export default Header;
