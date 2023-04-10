import { WINNER_COMBOS } from '../constants'

const checkWinner = (boardToCheck: string[]) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

const checkEndGame = (boardToCheck: string[]): boolean => {
  return boardToCheck.every((square) => square !== null)
}

export { checkWinner, checkEndGame }
