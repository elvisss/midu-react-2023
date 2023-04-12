import { Filters } from './Filters'

export const Header = ({ changeFilters }: any) => {
  return (
    <>
      <div>Header</div>
      <Filters onChange={changeFilters} />
    </>
  )
}
