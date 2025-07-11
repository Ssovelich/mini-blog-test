import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "@/styles/components/Header.module.css";

const Header = ({ dictionary, locale }) => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href={`/${locale}/`} className={styles.logo}>
          <img src="/favicon.png" alt="logo" width={45} height={45} />
        </Link>
        <nav>
          <Link className={styles.navLink} href={`/${locale}/`}>{dictionary.home}</Link>
          <Link className={styles.navLink} href={`/${locale}/about`}>{dictionary.about}</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header