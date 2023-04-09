import { useState } from 'react'

const TURNS = {
  X: 'x',
  O: 'o',
}

interface SquareProps {
  children: React.ReactNode
  updateBoard?: () => void
  index?: number
  isSelected?: boolean
}

const Square = ({ children, updateBoard, index, isSelected }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {
  /* const board =  */
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className="board">
      <h1>Tic Tac toe</h1>

      <section className="game">
        {board.map((val, index) => {
          return (
            <Square key={index} index={index} updateBoard={() => {}}>
              {val}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
