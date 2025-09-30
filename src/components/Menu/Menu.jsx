import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header className={styles.containerMenu}>
      <p className={styles.logo}>Daniel Moura</p>
      <nav>
        <ul className={styles.menuList}>
          <li><a href="#sobre">Sobre mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
