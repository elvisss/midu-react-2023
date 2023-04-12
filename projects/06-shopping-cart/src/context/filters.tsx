import { createContext, useState } from 'react'
import { ProductFilters } from '../types'

export type FiltersContent = {
  filters: ProductFilters
  setFilters: (filters: ProductFilters) => void
}

// to consume
export const FiltersContext = createContext<FiltersContent>({
  filters: {
    minPrice: 0,
    category: 'all',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFilters: () => {},
})

// to provides access to the context
export const FiltersProvider = ({ children }: { children: JSX.Element }) => {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
