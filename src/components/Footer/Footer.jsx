import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section id="contato">
      <p>Desenvolvido por Daniel Moura 💻</p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/dnlaie14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-moura-654099375/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} | Meu Portfólio</p>
      </section>
    </footer>
  );
}
