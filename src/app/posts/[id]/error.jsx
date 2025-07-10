"use client";

import styles from "@/styles/pages/ErrorPage.module.css";

const Error = ({ error }) => {
  return (
    <div className={`container ${styles.errorContainer}`}>
      <h1>Something went wrong 😕</h1>
      <p>{error.message}</p>
      <p>Try again later</p>
    </div>
  );
};

export default Error;
