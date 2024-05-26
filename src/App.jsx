import { useState } from 'react'
import Header from './components/Header'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)
  const [winner, setWinner] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  return (
    <>
    <div className='bg-gradient-to-b from-red-500  to-red-900'>
      <Header gameOver={gameOver} winner={winner} setWinner={setWinner} />
      <Game setGameOver={setGameOver} gameOver={gameOver} winner={winner} setWinner={setWinner} /> 
    </div>
    </>
  )
}

export default App
