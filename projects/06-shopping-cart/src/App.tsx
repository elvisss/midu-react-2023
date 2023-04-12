import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { ProductFilters } from './types'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const handleFilters = (filters: ProductFilters) => {
    setFilters(filters)
  }

  const filteredProducts = filterProducts(products)

  return (
    <div className="App">
      <Header changeFilters={handleFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </div>
  )
}

export default App
