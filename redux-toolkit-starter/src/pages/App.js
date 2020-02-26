import React from 'react'
import './App.css'
import Counter from 'src/features/counter/Counter'
import Todos from 'src/features/todos/Todos'
import Heading from 'src/components/Heading'

function App() {
  return (
    <div className="App">
      <Heading>redux toolkit starter</Heading>
      <Counter></Counter>
      <Todos></Todos>
    </div>
  )
}

export default App
