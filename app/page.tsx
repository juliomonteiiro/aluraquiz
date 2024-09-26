"use client";
import { useRouter } from "next/navigation";
import pageStyles from "./page.module.css";
import { Footer } from "./components/footer";
import logo from "./../public/images/logo.png";
import { Card } from "./components/card";
import "./global.css";



export default function Page() {
  const router = useRouter();

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
        <form
            onSubmit={(event) => {
              event.preventDefault();

              const name = "";
              router.push(`/game?player=${name}`)
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <input
                type="text"
                placeholder="Diz aí seu nome pra jogar :)"
                name="playerName"
              />
            </div>
            <button>
              Jogar
            </button>
          </form>
        </Card>
        <Footer />
      </section>   
      </main>
      
    )
  }