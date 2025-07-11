import styles from "@/styles/components/Footer.module.css";

const Footer = ({ dictionary}) => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} {dictionary.footer}</p>
      </div>
    </footer>
  );
}

export default Footer
