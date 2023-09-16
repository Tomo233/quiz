import { useRef, useState } from "react";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctQuestions = useRef(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  function handleAnswer(isCorrect) {
    setIsClicked(true);

    if (isCorrect) correctQuestions.current = correctQuestions.current + 1;

    setTimeout(() => {
      setCurrentQuestion((question) => question + 1);
      setIsClicked(false);
    }, 1000);

    // if (questions.length === currentQuestion) setIsFinished(true);

    if (questions.length === currentQuestion + 1) setIsFinished(true);
  }

  return (
    <div className="app">
      {isFinished ? (
        <div className="score-section">
          You scored {correctQuestions.current} out of {questions?.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion]?.answerOptions?.map((answer) => (
              <button
                key={answer.answerText}
                onClick={() => handleAnswer(answer?.isCorrect)}
                className={
                  isClicked ? (answer?.isCorrect ? "correct" : "incorrect") : ""
                }
              >
                {answer?.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
