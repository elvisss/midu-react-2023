import { useState } from 'react'
import { Product, ProductFilters } from '../types'

export const useFilters = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'all',
    minPrice: 0,
  })

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
