import styles from "@/styles/components/Loading.module.css";

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader}>
      <div className={styles.circle} />
      <div className={styles.circle} />
      <div className={styles.circle} />
    </div>
  </div>
);

export default Loader;
