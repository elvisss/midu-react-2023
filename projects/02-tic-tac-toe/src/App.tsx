import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEndGame, checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {
  /* const board =  */
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  // const [turn, setTurn] = useState(() => {
  //   const turnFromStorage = window.localStorage.getItem('turn')
  //   return turnFromStorage ?? TURNS.X
  // })

  const [winner, setWinner] = useState<string | boolean | null>(null) // false means tie

  const updateBoard = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    // const newBoard = structuredClone(board)
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // save game
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // check winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    const board = window.localStorage.getItem('board')
    if (board) {
      setBoard(JSON.parse(board))
    }
    const turn = window.localStorage.getItem('turn')
    if (turn) {
      setTurn(turn)
    }
  }, [])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic Tac toe</h1>

      <button onClick={resetGame}>Reset Game</button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square index={0} isSelected={turn === TURNS.X} updateBoard={() => {}}>{TURNS.X}</Square>
        <Square index={1} isSelected={turn === TURNS.O} updateBoard={() => {}}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
