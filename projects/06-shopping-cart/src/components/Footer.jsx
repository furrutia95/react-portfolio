import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filter } = useFilters()
  const { cart } = useCart()
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
     <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> 
    </footer>
  )
}