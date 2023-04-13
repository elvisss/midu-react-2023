const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CATIMAGE_URL = 'https://cataas.com'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getCatImage = (firstThreeLetters) => {
  return fetch(`${CATIMAGE_URL}/cat/says/${firstThreeLetters}?json=true`)
    .then((res) => res.json())
    .then((data) => {
      const { url } = data
      return `${CATIMAGE_URL}${url}`
    })
}
