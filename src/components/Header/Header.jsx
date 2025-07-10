import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "@/styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/favicon.png" alt="logo" width={45} height={45} />
        </Link>
        <nav>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="/about">About</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
