import { useEffect, useState } from 'react'

export const CATIMAGE_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeLetters = fact.split(' ', 3).join(' ')

    fetch(`${CATIMAGE_URL}/cat/says/${firstThreeLetters}?json=true`)
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setCatImage(url)
      })
  }, [fact])

  return {
    imageUrl: catImage ? `${CATIMAGE_URL}${catImage}` : ''
  }
}
