import { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <section id="sobre" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>OLÁ, MEU NOME É 👋</p>
        <h1 className={styles.title}>
          Daniel de <br /> Jesus Moura
        </h1>
        <h2 className={styles.role}>
          Curso de Desenvolvedor de Sites – Em andamento <span>|</span> Servente de Obras
        </h2>

        {/* Título para a seção Sobre mim */}
        <h2 className={styles.sectionTitle}>Sobre mim</h2>

        <p className={styles.description}>
          Desde cedo tive contato com a construção civil, graças ao meu avô, meus tios e meu pai, que me ensinaram os fundamentos do trabalho como servente de pedreiro. Essa experiência me ensinou dedicação, disciplina e atenção aos detalhes.
        </p>
        <p className={styles.description}>
          Mais recentemente, decidi entrar no mundo da tecnologia e desenvolvimento web, através do curso de Desenvolvedor de Sites oferecido pela PDA em parceria com a ASSOPOC. Hoje, aplico a mesma determinação da construção civil na criação de soluções digitais modernas, funcionais e acessíveis.
        </p>

        <div className={styles.buttons}>
          <button onClick={toggleModal} className={styles.primaryBtn}>
            Entre em Contato
          </button>
          <a href="/Currículo A4 simples preto.png" className={styles.secondaryBtn}>
            Meu currículo
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/foto.png"
          alt="Daniel olhando serio pra foto"
          className={styles.image}
        />
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Entre em contato</h3>
            <p>Email: <strong>danielmoura14689@gmail.com</strong></p>
            <button onClick={toggleModal} className={styles.closeBtn}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
