import React from 'react'

const ResultPage = ({score,total,restart}) => {
  return (
    <div className='results-page'>
        <h2>QUIZ COMPLETED!!</h2>
        <p>Score : {score}/{total}</p>
        <button onClick={restart}>Play Again</button>
    </div>
  )
}

export default ResultPage