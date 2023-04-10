import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newCat => setFact(newCat))
  }

  // random fact
  useEffect(refreshFact, [])

  return {
    fact,
    refreshFact
  }
}
