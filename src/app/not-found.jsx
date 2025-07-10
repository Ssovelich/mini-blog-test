import styles from "@/styles/pages/NotFoundPage.module.css"

const NotFound = () => {
  return (
    <div className={`container ${styles.notFoundContainer}`}>
      <h2>404 - Page not found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
