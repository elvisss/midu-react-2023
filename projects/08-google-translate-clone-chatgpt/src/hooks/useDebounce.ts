import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return debouncedValue
}
