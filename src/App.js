import React,{useState} from "react";
import "./style.css";


export default function App() {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many color in flag?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    {
			questionText: 'How many States in India?',
			answerOptions: [
				{ answerText: '28', isCorrect: false },
				{ answerText: '24', isCorrect: false },
				{ answerText: '26', isCorrect: false },
				{ answerText: '29', isCorrect: true },
			],
		},
	];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect){
      setScore(score+10);
      
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true)
    }
 
  };

  return (
    
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
          
					You scored {score} out of {questions.length}0
         
				</div>
        
			) :(
        <>
    <div className='quiz-container'>
      <div className="quiz-header">
     Q. {questions[currentQuestion].questionText}</div>

</div>
    <div className="questions">
       
          <span>Question {currentQuestion+ 1} of {questions.length}</span></div>
    <div className='answer-section'>
	           {questions[currentQuestion].answerOptions.map((answerOption) => (
		<button className="button"
         onClick={() =>
         handleAnswerButtonClick(answerOption.isCorrect)}>
         {answerOption.answerText}
         </button>
	))}
      </div>
        

    </>
      )}
    </div>
  );
}
