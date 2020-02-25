import React from 'react'
import './App.css'
import Counter from 'src/features/counter/Counter'
import Todos from 'src/features/todos/Todos'

function App() {
  return (
    <div className="App">
      <h1>redux toolkit starter</h1>
      <Counter></Counter>
      <hr />
      <Todos></Todos>
    </div>
  )
}

export default App
