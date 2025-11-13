import React from 'react'

function Header({score}) {
  return (
    <div>
        <h1>Quiz Game !!!</h1>
        <p>Score : {score}</p>
    </div>
  )
}

export default Header