import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImage'

export const Cat = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <button onClick={handleClick}>Get new Cat</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for '${fact}'`}
        />
      )}
    </>
  )
}
