interface SquareProps {
  children: React.ReactNode
  updateBoard: (index: number) => void
  index: number
  isSelected?: boolean
}

export const Square = ({ children, updateBoard, index, isSelected }: SquareProps) => {
  const className = 'square' + `${isSelected ? ' is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
