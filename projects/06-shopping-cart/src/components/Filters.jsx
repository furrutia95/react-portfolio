import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from "react"
export function Filters () {

    const { filter, setFilter } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilter(prevState => ({  //estado global
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Min Price</label>
                <input 
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filter.minPrice}
                />
                <span>{filter.minPrice}</span>

            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                </select>
            </div>
        </section>
    )
}