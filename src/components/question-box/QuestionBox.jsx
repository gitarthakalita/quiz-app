import React, { useEffect, useState } from 'react'

const QuestionBox = ({data,handleFunc,nextFunc, clearFunc}) => {

  const { optionA, optionB, optionC, optionD, question, id } = data;

  let [temp, setTemp] = useState('blank')


  const handleChange = (e) => {    
    console.log("Sending Data from QuestionBox to Parent", e.target.value);
    handleFunc(e.target.value)
    setTemp(e.target.value)

    // clearFunc();

  }

  useEffect(()=>{
    setTemp('blank')
    // clearFunc();
    console.log("Question Box useEffect running");
  },[nextFunc])

  return (
    <>
      <h1><span>Question No {id} | </span> {question} {temp} </h1>
      <form >        
        <div><input type="radio" name="question_option" value="optionA" checked={temp === "optionA" } onChange={handleChange} /><label>{optionA}</label> </div>
        <div><input type="radio" name="question_option" value="optionB" checked={temp === "optionB" } onChange={handleChange} /><label>{optionB}</label> </div>
        <div><input type="radio" name="question_option" value="optionC" checked={temp === "optionC" } onChange={handleChange} /><label>{optionC}</label> </div>
        <div><input type="radio" name="question_option" value="optionD" checked={temp === "optionD" } onChange={handleChange} /><label>{optionD}</label> </div>              
      </form>
    </>
  )
}

export default QuestionBox