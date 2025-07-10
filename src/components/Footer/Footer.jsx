import styles from "@/styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p>&copy; {new Date().getFullYear()} The developer of this website is Stanislav Sova</p>
      </div>
    </footer>
  );
}

export default Footer
