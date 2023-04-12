import { useState, useId } from 'react'
import './Filters.css'
import { ProductFilters } from '../types'

interface Props {
  onChange: (filters: ProductFilters) => void
}

export const Filters: React.FC<Props> = ({ onChange }) => {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')
  const filterRangeId = useId()
  const filterCategoryId = useId()

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value))
    onChange({
      minPrice: Number(event.target.value),
      category
    })
  }

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value)
    onChange({
      minPrice: minPrice,
      category: event.target.value
    })
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={filterRangeId}>Min Price</label>
        <input
          value={minPrice}
          onChange={handleRangeChange}
          type="range"
          id={filterRangeId}
          min="0"
          max="1000"
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={filterCategoryId}>Category</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          name="category"
          id={filterCategoryId}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
