import React, { useState } from 'react'
import Header from './Components/Header'
import ResultPage from './Components/ResultPage';
import QuestionCard from './Components/QuestionCard';
import CategorySelect from './Components/CategorySelect';

function App() {
  const [score, setScore]=useState();
  const [category,setCategory] = useState('21');
  const [difficulty,setDifficulty]=useState('easy');
  const [showResults,setShowResults] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [currentQuetions,setCurrentQuetions]=useState(0);
  const fetchQuestion = async (params) => {
    const res=await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
    const data=await res.json();
    setQuestions(
      data.result.map((q)=>({
        questions:q.questions,
        option : [...q.incorrect_answers,q.correct_answer].sort(()=>Math.random()),
        correct : q.correct_answer
      })
    
    )
      
    )
  }
  const startQuiz=()=>{
    fetchQuestion();
    setScore(0);
    setCurrentQuetions(0);
    setShowResults(false);
  }
  const handleAnswer=(selected)=>{
    if(selected===questions[currentQuetions].correct){
      setScore((prev)=>prev+1)
    }
    const nextQuestion =currentQuetions+1;
    if(nextQuestion<questions.length){
      setCurrentQuetions(nextQuestion);
    }else{
      setShowResults(true);
    }
  }
  




  return (
    <div className='App'>
      <Header score={score}/>
      {
        showResults ?(
          <ResultPage score ={score} total = {questions.length} restart={startQuiz}></ResultPage>
        ):questions.length>0?(
          <QuestionCard question={questions[currentQuetions].question} option={questions[currentQuetions].option} onAnswer={handleAnswer}/>        
        ):(
          <CategorySelect setCetegory={setCategory} setDifficulty={setDifficulty} startQuiz={startQuiz}></CategorySelect>
        )
      }
    </div>
  )
}

export default App