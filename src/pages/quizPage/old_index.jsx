import React, { useEffect, useState } from 'react'

import styles from './quiz.module.scss';

import DATA from '../../data/questions.json'
import { Link } from 'react-router-dom';

const OldQuizPage = () => {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [result, setResult] = useState(0);

  const [score, setScore] = useState(false);

  const handleAnswer = (e) => {
    // e.preventDefault();

    setSelectedAnswer(e.target.value);

  }

  const nextQuestion = () => {
    setActiveQuestion(activeQuestion + 1)

    if (selectedAnswer == correctAnswer) {
      setResult(result + 1)
    }

    console.log(selectedAnswer, result);

  }


  const submitResult = () => {
    if (selectedAnswer == correctAnswer) {
      setResult(result + 1)
    }

    console.log(selectedAnswer, result);


    setScore(true)


  }



  const { optionA, optionB, optionC, optionD, correctAnswer, question, id } = DATA[activeQuestion]




  return (

    <>
      {
        score == false ? <section className={styles.container}>

          <div className={styles.wrapper}>
            <h1><span>Question No {id} | </span> {question}</h1>

            <form >

              <div><input type="radio" name="question_option" value="optionA" defaultChecked={false} onChange={handleAnswer} /><label>{optionA}</label> </div>
              <div><input type="radio" name="question_option" value="optionB" defaultChecked={false} onChange={handleAnswer} /><label>{optionB}</label> </div>
              <div><input type="radio" name="question_option" value="optionC" defaultChecked={false} onChange={handleAnswer} /><label>{optionC}</label> </div>
              <div><input type="radio" name="question_option" value="optionD" defaultChecked={false} onChange={handleAnswer} /><label>{optionD}</label> </div>

            </form>

            {/* <h2>Result: {result}</h2> */}

            {
              activeQuestion !== DATA.length - 1 ? <button onClick={nextQuestion} >Next Question</button> : <button onClick={submitResult}>Submit</button>
            }
          </div>

        </section> : <section className={styles.container}>
        
          <div className={styles.wrapper}>
          <h1>Score is {result} out of {DATA.length}</h1>

<Link to="/">
  <button>Back to Home</button>
</Link>
          </div>
        </section>
      }


    </>
  )
}

export default OldQuizPage