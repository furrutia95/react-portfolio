import { useContext, useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import { CartContext } from "../context/cart";

export function CartItem({ thumbnail, price, title, quantity, addToCart, removeCart}){
    return(
        <li>
        <img
            src={thumbnail}
            alt= {title}
        />
        <div>
            <strong>{title}</strong> - ${price}
        </div>
        <button onClick={removeCart}>
            <RemoveFromCartIcon/>
        </button>

        <footer>
            <small>
                Qty: {quantity}</small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}


export function Cart (){

    const cartCheckboxId = useId()
    const { cart, clearCart, removeFromCart, addToCart} = useContext(CartContext)

    return (
        <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                {
                    cart.map(
                        product =>
                        <CartItem 
                        key={product.id} 
                        addToCart = {() => addToCart(product)}
                        removeCart={() => removeFromCart(product)}
                        {...product}/>
                    )
                }

            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}