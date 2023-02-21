import React, { useState } from 'react'

import styles from './quiz.module.scss';

import DATA from '../../data/questions.json'

const QuizPage = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);

    
    const nextQuestion = ()=>{
        setActiveQuestion(activeQuestion +1)
      }


  return (
    <section className={styles.container}>

    <h1>{DATA[activeQuestion].question}</h1>


    {
      activeQuestion !== DATA.length-1 ? <button onClick={nextQuestion} >Next Question</button> : <button>Submit</button>
    }

    </section>
  )
}

export default QuizPage