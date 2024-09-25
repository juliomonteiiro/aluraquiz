"use client";
import React from "react";
import { useRouter } from "next/router";

import Link from "next/link"
import { Card } from "../components/card"
import logo from  "../../public/images/logo.png"
import pageStyles from "../page.module.css"
import { Footer } from "../components/footer"
import  "../../app/global.css"
import config from "../../config.json"
import { Alternative } from "../components/alternative"


const questions = config.questions;

const answerStates = {
    DEFAULT: "DEFAULT",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
} as const;

export default function GameScreen (){
    const router = useRouter;
    const [answerState, setAnswerState] = React.useState<keyof typeof answerStates>(answerStates.DEFAULT);
    const [currentQuestion,  setCurrentQuestion] = React.useState(0);
    const [userAnswers, setUsetAnswers] = React.useState([])
    const questionNumber = currentQuestion + 1;
    const question = questions[currentQuestion];
    const isLastQuestion = questionNumber === questions.length; 

    return(
        <main className={pageStyles.screen} style={{
            flex: 1,
            backgroundImage: `url${question.image}`
            }}>
        <section className={pageStyles.container}>
      <Link href="/"><img src={logo.src}   alt="Logo" className={pageStyles.logo} /></Link>
        <Card
        headerTitle={`Pergunta ${questionNumber} de ${questions.length}`}>
        <h1>
            {question.title}
        </h1>
        <p>
            {question.description}
        </p>
        
        <form
            onSubmit={(event) => {
              event.preventDefault(); 
              const $questionInfo = event.target as HTMLFormElement;
              const formData = new FormData($questionInfo)
              const {alternative} = Object.fromEntries(formData.entries()) 
              const IsCorectAnswer = alternative === question.answer    
              if (IsCorectAnswer){
                setUsetAnswers([
                    ...userAnswers,
                    true
                ])
              setAnswerState(answerStates.SUCCESS)
              }
              if (!IsCorectAnswer){
                setUsetAnswers([
                    ...userAnswers,
                    false
                ])
                setAnswerState(answerStates.ERROR)
              }

              setTimeout(() => {
                if(isLastQuestion){
                    const totalPoints = userAnswers.reduce((_totalPoints, currentAnswer) => {
                        if(currentAnswer ===true)return _totalPoints + 1;
                        return _totalPoints;
                    }, 0 );
                    alert(`Você concluiu o desafio! E acertou ${totalPoints}`);
                    return;
                }
                setCurrentQuestion(currentQuestion + 1)
                setAnswerState(answerStates.DEFAULT)
              }, 2 * 1000)
            }}
        >
            {question.alternatives.map((alternative, index)=>(
            <Alternative  
            key={alternative + index}
            label={alternative} 
            order={index}

            />
            ))}
            {answerState === answerStates.DEFAULT && (
                <button>
                Confirmar
                </button>
            )}
            <p style={{textAlign: "center"}}>
            {answerState === answerStates.ERROR && (
                ""
            )}
            {answerState === answerStates.SUCCESS && (
                ""
            )}
            </p>
        </form>
       </Card>
        <Footer />   
        </section>          
      </main>
    )
}