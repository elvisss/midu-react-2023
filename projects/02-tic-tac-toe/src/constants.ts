const TURNS = {
  X: '❌',
  O: '⚪',
}

export enum TURNS_ENUM {
  X = 'x',
  O = 'o'
}

const WINNER_COMBOS = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
]

export {
  TURNS,
  WINNER_COMBOS,
}
