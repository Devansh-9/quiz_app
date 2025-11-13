import React, { useState } from 'react'

const QuestionCard = ({question,options,onAnswer}) => {
    
    const [selected,setSelected]=useState([]);
    const handleSubmit=()=>{
      if(selected){
        onAnswer(selected);
        setSelected('');
      }
    }
  return (
    <div>
      <h3>{question}</h3>
      {options.map((options,index)=>(
        <button key={index} className={`option ${selected===options?"selected":""}`} onClick={()=>setSelected(options)}>{options}</button>
      ))}
      <button onClick={handleSubmit}>Submite Answer</button>
    </div>
  )
}

export default QuestionCard