"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "@/styles/components/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const otherLocale = currentLocale === "en" ? "uk" : "en";

  const switchLanguage = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <button className={styles.langBtn} onClick={switchLanguage}>
      {otherLocale.toUpperCase()}
    </button>
  );
}

export default LanguageSwitcher