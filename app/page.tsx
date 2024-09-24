import cardStyles from "./card.module.css";
import homeStyles from "./home.module.css";
import logo from "./../public/images/logo.png";
import jm from "./../public/images/jm.png";
import "./global.css";

export default function Page() {
    return (
      <main className={homeStyles.homeScreen} style={{flex: 1}}>

      <img src={logo.src} alt="Logo" className={homeStyles.logo} />

       <div className={cardStyles.card}>
        <header className={cardStyles.cardHeader}>
        <h1 className={cardStyles.cardHeaderTitle}>Teste suas habilidades</h1>
        </header>
        <section className={cardStyles.cardBody}>
        <p>

        </p>
        <p>
          Formulário / Botão
        </p>
        </section>
        <footer>
        <img src={jm.src} alt="Logo" className={homeStyles.logo} />
          <p>Criado por @juliomonteiiro</p>
        </footer>
        </div>
      </main>
    )
  }