import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projetos from './components/Projetos/Projetos.jsx';
import Footer from "./components/Footer/Footer.jsx"; // Importando o Footer

export default function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <Projetos />
      <Footer /> {/* Footer adicionado no final */}
    </div>
  );
}