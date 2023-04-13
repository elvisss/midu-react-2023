import { useEffect, useState } from 'react'
import { getCatImage } from '../services/facts'

export const useCatImage = ({ fact }) => {
  const [catImage, setCatImage] = useState('')

  useEffect(() => {
    if (!fact) return

    const firstThreeLetters = fact.split(' ', 3).join(' ')

    getCatImage(firstThreeLetters)
      .then(setCatImage)
      .catch(console.log)
  }, [fact])

  return {
    imageUrl: catImage
  }
}
