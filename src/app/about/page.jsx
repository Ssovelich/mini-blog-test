"use client";

import styles from "@/styles/pages/AboutPage.module.css";

const About = () => {
  return (
    <div className={`container ${styles.aboutContainer}`}>
      <h1>About Us</h1>
      <div className={styles.wrapText}>
        <p>
          Welcome to our mini-blog — a cozy space where we share ideas,
          thoughts, and stories that inspire us every day.
        </p>
        <p>
          Our team consists of passionate writers, developers, and curious minds
          who believe in the power of words and creativity.
        </p>
        <p>
          This blog is not just about content — it's about connection. Whether
          you're here for tech tips, life reflections, or random discoveries,
          we're glad to have you.
        </p>
        <p>Thanks for being with us!</p>
      </div>
    </div>
  );
};

export default About;
