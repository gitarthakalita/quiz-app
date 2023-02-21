import React, { useEffect, useState } from 'react'

import styles from './quiz.module.scss';

import DATA from '../../data/questions.json'

const OldQuizPage = () => {

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [result, setResult] = useState(0)

  const nextQuestion = ()=>{
    setActiveQuestion(activeQuestion +1)
  }
  
  const handleAnswer = (e) => {
    e.preventDefault();

    // let answer = e.target.value
    
    // console.log(answer);
    
    setSelectedAnswer(e.target.value);

  }





  useEffect(() =>{

    
      if(selectedAnswer == correctAnswer){
        setResult(result +1 )       
      }
    
      console.log(selectedAnswer, result);

  },[selectedAnswer])



  const {optionA, optionB, optionC, optionD, correctAnswer} = DATA[activeQuestion]


  

  return (
    <section className={styles.container}>

    <h1>{DATA[activeQuestion].question}</h1>

    <form >
      
        <div><input type="radio" name="question_option" value="optionA" onChange={handleAnswer} /><label>{optionA}</label> </div>
        <div><input type="radio" name="question_option" value="optionB" onChange={handleAnswer} /><label>{optionB}</label> </div>
        <div><input type="radio" name="question_option" value="optionC" onChange={handleAnswer} /><label>{optionC}</label> </div>
        <div><input type="radio" name="question_option" value="optionD" onChange={handleAnswer} /><label>{optionD}</label> </div>
      
    </form>

<p>{result}</p>

    {
      activeQuestion !== DATA.length-1 ? <button onClick={nextQuestion} >Next Question</button> : <button>Submit</button>
    }

    </section>
  )
}

export default OldQuizPage