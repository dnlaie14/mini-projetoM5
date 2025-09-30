import { useState } from "react";
import styles from "./Projetos.module.css";

export default function Projetos() {
  // Lista de projetos diretamente no componente
  const [projetos] = useState([
    {
      id: 1,
      nome: "Jogo de Quiz",
      descricao: "O site se trata de um quiz (jogo de perguntas) .",
      link: "https://github.com/dnlaie14/PROJETO-F-M2.git",
    },
    {
      id: 2,
      nome: "Mini Projeto Academia",
      descricao: "Site realiza cadastro de alunos .",
      link: "https://github.com/dnlaie14/MINI-PROJETO-2.git",
    },
  ]);

  return (
    <section id="projetos">
    <div className={styles.container}>
      <h2>Meus Projetos</h2>
      <div className={styles.projetosGrid}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className={styles.projeto}>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
 </section> );
}
