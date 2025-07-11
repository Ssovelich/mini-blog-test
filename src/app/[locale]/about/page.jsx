import styles from "@/styles/pages/AboutPage.module.css";
import { getDictionary } from "@/lib/i18n";

export const metadata = {
  title: "Mini Blog | About us",
  description:
    "Learn more about the Mini Blog team and our mission to share interesting stories.",
};

const About = async ({ params: { locale } }) => {
  const dictionary = await getDictionary(locale);
  const d = dictionary;

  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1>{d.about_title}</h1>
      <div className={styles.wrapText}>
        <p>{d.paragraph1}</p>
        <p>{d.paragraph2}</p>
        <p>{d.paragraph3}</p>
        <p>{d.paragraph4}</p>
      </div>
    </div>
  );
};

export default About;
