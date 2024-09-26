"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card } from "../components/card";
import logo from "../../public/images/logo.png";
import pageStyles from "../page.module.css";
import { Footer } from "../components/footer";
import "../../app/global.css";
import config from "../../config.json";
import { Alternative } from "../components/alternative";

const questions = config.questions;

const answerStates = {
  DEFAULT: "DEFAULT",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

export default function GameScreen() {
  const router = useRouter();
  const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<boolean[]>([]);
  const [selectedAlternative, setSelectedAlternative] = React.useState<string | null>(null); // Novo estado para a alternativa selecionada
  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];
  const isLastQuestion = questionNumber === questions.length;

  React.useEffect(() => {
    if (isLastQuestion) {
      const totalPoints = userAnswers.reduce((_totalPoints, currentAnswer) => {
        return currentAnswer ? _totalPoints + 1 : _totalPoints;
      }, 0);

      alert(`Você concluiu o desafio! e acertou ${totalPoints}`);
      router.push("/");
      return;
    }
  }, [userAnswers]);

  return (
    <main
      className={pageStyles.screen}
      style={{
        flex: 1,
        backgroundImage: `url("${question.image}")`,
      }}
    >
      <section className={pageStyles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px"
          }}
        >
          <Link href="/"><img src={logo.src} alt="Logo" className={pageStyles.logo} /></Link>
        </div>
        <Card
          headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}
        >
          <h1>{question.title}</h1>
          <p>{question.description}</p>
          <form
            style={{ marginTop: "24px" }}
            onSubmit={(event) => {
              event.preventDefault();
              const isCorrectAnswer = selectedAlternative === question.answer;
              
              setUserAnswers([...userAnswers, isCorrectAnswer]);
              setAnswerState(isCorrectAnswer ? answerStates.SUCCESS : answerStates.ERROR);

              setTimeout(() => {
                if (isLastQuestion) return;
                
                setCurrentQuestion(currentQuestion + 1);
                setAnswerState(answerStates.DEFAULT);
                setSelectedAlternative(null); // Resetar a seleção aqui
              }, 2000);
            }}
          >
            {question.alternatives.map((alternative, index) => (
              <div key={alternative + index} style={{ marginBottom: "8px" }}>
                <Alternative
                  label={alternative}
                  order={index}
                  selectedValue={selectedAlternative}
                  onChange={setSelectedAlternative} // Passa a função para atualizar a alternativa selecionada
                />
              </div>
            ))}
            {answerState === answerStates.DEFAULT && (
              <button type="submit">Confirmar</button>
            )}
            <p style={{ textAlign: "center" }}>
              {answerState === answerStates.ERROR && "❌"}
              {answerState === answerStates.SUCCESS && "✅"}
            </p>
          </form>
        </Card>
        <Footer />
      </section>
    </main>
  );
}
