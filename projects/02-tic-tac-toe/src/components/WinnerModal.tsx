import { Square } from './Square'

interface WinnerModalProps {
  winner: string | boolean | null
  resetGame: () => void
}

export const WinnerModal = ({ winner, resetGame }: WinnerModalProps) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'Tie' : 'Won:'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {winner && (
          <header className="win">
            <Square updateBoard={() => {}} index={1}>
              {winner}
            </Square>
          </header>
        )}

        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  )
}
