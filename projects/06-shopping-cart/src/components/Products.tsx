import { Product } from '../types'
import './Products.css'
import { AddToCartIcon } from './Icons'

interface Props {
  products: Product[]
}

export const Products: React.FC<Props> = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map((p) => {
            return (
              <li key={p.id}>
                <img src={p.thumbnail} alt={p.title} />
                <div>
                  <strong>{p.title}</strong> - ${p.price}
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
