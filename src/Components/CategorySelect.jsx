import React from 'react'

const CategorySelect = ({setCetegory,setDifficulty,startQuiz}) => {
    

    const handleStart = () =>{
        startQuiz();
    }

  return (
    <div>
        <h2>Select Quiz option</h2>
        <label>Cetegory:
            <select onChange={(e)=>setCetegory(e.target.value)}>
                <option value={'21'}>Sports</option>
                <option value={'23'}>History</option>
                <option value={'17'}>Science</option>
            </select>
        </label>
        <label>Difficulty:
            <select onChange={(e)=>setDifficulty(e.target.value)}>
                <option value={'easy'}>Easy</option>
                <option value={'medium'}>Medium</option>
                <option value={'hard'}>Hard</option>
            </select>

        </label>
        <button onClick={handleStart}>Start QUIZ</button>
    </div>
  )
}

export default CategorySelect