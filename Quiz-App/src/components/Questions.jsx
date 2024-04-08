import { useState } from "react"
import "./Questions.css"

export default function Questions() {

  const [question,setQuestion] = useState({
    question: [
      {
      questionText: "What is the capital of France?",
      // answer boxes:
      answer: [
        {answerText: "New York", isCorrect: false},
        {answerText: "Paris", isCorrect: true},
        {answerText: "Tehran", isCorrect: false},
        {answerText: "Essen", isCorrect: false},
      ]
    },
      {
      questionText: "Who is CEO of Tesla?",
      // answer boxes:
      answer: [
        {answerText: "Jeff Bezos", isCorrect: false},
        {answerText: "Bill Gates", isCorrect: false},
        {answerText: "Elon Musk", isCorrect: true},
        {answerText: "Tony Stark", isCorrect: false},
      ]
    },
      {
      questionText: "The IPhone was created by which company?",
      // answer boxes:
      answer: [
        {answerText: "Apple", isCorrect: true},
        {answerText: "Intel", isCorrect: false},
        {answerText: "Amazon", isCorrect: false},
        {answerText: "Microsoft", isCorrect: false},
      ]
    },
      {
      questionText: "How many Harry Potter books are there?",
      // answer boxes:
      answer: [
        {answerText: "1", isCorrect: false},
        {answerText: "4", isCorrect: false},
        {answerText: "6", isCorrect: false},
        {answerText: "7", isCorrect: true},
      ]
    },
    ]
  })
  const [currentQuestion,setCurrentQuestion] = useState({
    currentQuestion: 0 //index of current question. 
  })


  // methodes:
  const showQuestionTitle = (e) => {
    console.log(e);
  }

  return (
    <div>
        <div className='container'>
        <div className="question-title" onClick={(e) => showQuestionTitle(e)}></div>
        <div className="question-box">
            <button className='question-point'></button>
        </div>
      </div>
    </div>
  )
}
