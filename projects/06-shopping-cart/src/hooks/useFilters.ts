import { useContext } from 'react'
import { Product } from '../types'
import { FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: Product[]): Product[] => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return {
    filters,
    filterProducts,
    setFilters,
  }
}
