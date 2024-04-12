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

  // const showBtn = () => {
  //   question.question[currentQuestion.currentQuestion].answer.map(answer => {
  //     <button>{answer.answerText}</button>
  //   })
  // }

  const clickHandler = (isCorrect) => {
    console.log(isCorrect)
  }

  return (
    <div>
      <div className='container'>
        {/* showing score */}
        {/* <div className="score-section"></div> */}
        <div className="question-count"><span>quesiton 1</span></div>
        <div className="question-title">{question.question[currentQuestion.currentQuestion].questionText}</div>
        <div className="question-box">
          {question.question[currentQuestion.currentQuestion].answer.map(answer => (
            <button key={toString()} onClick={clickHandler.bind(this, answer.isCorrect)} className="btn-option">{answer.answerText}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
