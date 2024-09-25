import Link from "next/link";
import pageStyles from "./page.module.css";
import { Footer } from "./components/footer";
import logo from "./../public/images/logo.png";
import { Card } from "./components/card";
import "./global.css";



export default function Page() {
    return (
      <main className={pageStyles.screen} style={{
        flex: 1

      }}>
        <section className={pageStyles.container}>
      <img src={logo.src} alt="Logo" className={pageStyles.logo} />
        <Card
        headerTitle="Teste suas habilidades!">
        <p style={{marginBottom: "32px"}}>
          Teste seus conhecimentos sobre Pokemon, e divirta-se com o JM Quiz
        </p>
        <p>
          Formulário / Botão
        </p>
        <Link href="/game">
        Jogar
        </Link>
       </Card>
        <Footer />   
        </section>          
      </main>
      
    )
  }