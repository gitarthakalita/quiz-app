import React, { useEffect, useState } from 'react'

import styles from './quiz.module.scss';

import DATA from '../../data/questions.json'
import { Link } from 'react-router-dom';
import QuestionBox from '../../components/question-box/QuestionBox';

const QuizPage = () => {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();

  const [result, setResult] = useState(0);

  const [score, setScore] = useState(false);


  const handleAnswer = (data) => {

    console.log("Running handleAnswer");

    console.log("Before setSelectAnswer", selectedAnswer);

    console.log("data from child", data);
    // if (data == null) {
    if (data == "optionA" || data == "optionB" ||data == "optionC" ||data == "optionD" ) {

    console.log("data from child inside If statement", data);


      setSelectedAnswer(data);
      console.log("After setSelectAnswer", data, selectedAnswer);

    }

    
  }


  const nextQuestion = () => {

    console.log("Running Next Question");
    setActiveQuestion(activeQuestion + 1)

    if (selectedAnswer == correctAnswer) {
      setResult(result + 1)
      // setSelectedAnswer(null)
    }

    clearState();

  }

  const clearState = () => {
    setSelectedAnswer()
    console.log("Running clearState");
  }



  const submitResult = () => {
    if (selectedAnswer == correctAnswer) {
      setResult(result + 1)
    }

    setScore(true)

  }

  useEffect(() => {
    // setSelectedAnswer(null)
    console.log("Parent useEffect running");
  },[])


  const { correctAnswer } = DATA[activeQuestion]


  return (

    <>
      {
        score == false ? <section className={styles.container}>

          <div className={styles.wrapper}>

            <QuestionBox

              data={DATA[activeQuestion]}
              handleFunc={handleAnswer}
              nextFunc={nextQuestion}
              clearFunc={clearState}
            />


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

export default QuizPage