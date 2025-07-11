import styles from "@/styles/pages/NotFoundPage.module.css";
import { getDictionary } from "@/lib/i18n";
import { headers } from "next/headers";

export const metadata = {
  title: "Mini Blog | 404",
  description: "Page not found",
};

const NotFound = async () => {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "/";
  const locale = pathname.split("/")[1] || "en";
  const dictionary = await getDictionary(locale);

  return (
    <div className={`container ${styles.notFoundContainer}`}>
      <h2>{dictionary.not_found_title}</h2>
      <p>{dictionary.not_found_text}</p>
    </div>
  );
};

export default NotFound;
