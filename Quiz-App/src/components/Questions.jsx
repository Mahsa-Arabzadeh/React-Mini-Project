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

  const [currentQuestion,setCurrentQuestion] = useState(0)

  const [score,setScore] = useState(0)

  const [showScore,setShowScore] = useState(false)


  const clickHandler = (isCorrect) => {
    if(isCorrect){
      console.log("d");
      setScore(score + 1)
    }
    
    if(currentQuestion === 3){
      setShowScore(true)
    }else {
      setCurrentQuestion(currentQuestion + 1)
    }

  }

  return (
    <>
      <div className='container'>
        {/* showing score */}
        {showScore ? 
        <div className="score-section">You scored <mark>{score}</mark> out of {question.question.length}</div> : (
          <div className="question-con">
              <div className="question-count"><span>Quesiton: {currentQuestion + 1}</span></div>
              <div className="question-title">{question.question[currentQuestion].questionText}</div>
              <div className="question-box">
              {question.question[currentQuestion].answer.map(answer => (
              <button key={toString()} onClick={clickHandler.bind(this, answer.isCorrect)} className="btn-option">{answer.answerText}</button>
              ))}
              </div>
        </div>
        )
        }
      </div>
    </>
  )
}
