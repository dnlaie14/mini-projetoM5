# Portfólio Pessoal - Daniel de Jesus Moura

## Contextualização do Projeto

Este projeto é um **portfólio pessoal** desenvolvido em **React**, com o objetivo de apresentar a trajetória profissional e acadêmica de **Daniel de Jesus Moura**, incluindo experiência como servente de obras e atual formação em desenvolvimento de sites.  

O portfólio inclui:  

- **Hero**: apresentação, foto, descrição e botões para contato e currículo.  
- **Sobre mim**: histórico pessoal e profissional.  
- **Projetos**: apresentação de projetos desenvolvidos.  
- **Contato**: informações de contato e QR Code.  
- **Menu fixo** com links de navegação para cada seção.  

O design é **responsivo**, moderno e acessível, com destaque visual para títulos e botões, e rolagem suave entre seções.

---

## Tecnologias Utilizadas

| Tecnologia         | Versão / Observação                    |
|-------------------|--------------------------------------|
| React             | 18.x                                  |
| JavaScript (ES6+) | Nativo                                |
| CSS Modules       | Para estilização modular e isolada    |
| Vite              | 4.x (para build e desenvolvimento)    |
| react-qr-code      | 2.x (opcional, se gerar QR dinamico) |
| Node.js           | 18.x (para rodar o projeto localmente)|  
| NPM               | 9.x                                   |

> Todas as imagens e arquivos como QR Code e foto estão na pasta `public`.

---

## Estrutura do Projeto

src/
├─ components/
│ ├─ Hero/
│ │ ├─ Hero.jsx
│ │ └─ Hero.module.css
│ ├─ Menu/
│ │ ├─ Menu.jsx
│ │ └─ Menu.module.css
│ ├─ Projetos/
│ │ ├─ Projetos.jsx
│ │ └─ Projetos.module.css
│ └─ Footer/
│ ├─ Footer.jsx
│ └─ Footer.module.css
├─ App.jsx
└─ main.jsx
public/
├─ foto.png
├─ qrcode.png
└─ Currículo A4 simples preto.png


---

## Passo a Passo de Execução do Projeto

### Pré-requisitos

- Node.js instalado (v18+ recomendado)  
- NPM ou Yarn

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seuusuario/seu-portifolio.git
cd seu-portifolio

Funcionalidades do Portfólio

Menu fixo com navegação suave para cada seção (Sobre mim, Projetos, Contato).

Botão Entre em Contato abre um modal com QR Code e email.

Botão Meu currículo permite baixar o currículo em PDF.

Layout responsivo, moderno e acessível.

QR Code

O QR Code no footer/modal aponta para o link do instagram ,facilitando o acesso rápido pelo celular.

Autor

Daniel de Jesus Moura

GitHub: dnlaie14