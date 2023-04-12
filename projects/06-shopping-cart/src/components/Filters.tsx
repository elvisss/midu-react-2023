import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()

  /* const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all') */

  const filterRangeId = useId()
  const filterCategoryId = useId()

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      minPrice: Number(event.target.value),
      category: filters.category
    })
  }

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters({
      minPrice: filters.minPrice,
      category: event.target.value
    })
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={filterRangeId}>Min Price</label>
        <input
          value={filters.minPrice}
          onChange={handleRangeChange}
          type="range"
          id={filterRangeId}
          min="0"
          max="1000"
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={filterCategoryId}>Category</label>
        <select
          value={filters.category}
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
