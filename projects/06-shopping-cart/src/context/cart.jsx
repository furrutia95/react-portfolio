import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const updateLocalStorage = cart => localStorage.setItem('cart', JSON.stringify(cart))
const reducer = (state, action) => {
    const { type : actionType, payload: actionPayload} = action
    switch (actionType) {
        case 'ADD_TO_CART':{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(cart)
                newState[productInCartIndex].quantity++
                updateLocalStorage(newState)
                return newState
           } 

           updateLocalStorage([...state, {...actionPayload, quantity: 1}])
           return [...state, {...actionPayload, quantity: 1}]

        }

        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            updateLocalStorage(state.filter(item => item.id !== id))
            return state.filter(item => item.id !== id)
        }
        case 'CLEAR_CART':{
            updateLocalStorage([])
            return []
        }
    }
}

export function CartProvider ({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = product => dispatch({type: 'ADD_TO_CART', payload: product})

    const removeFromCart = product => dispatch({type: 'REMOVE_FROM_CART', payload: product})

    const clearCart = () => dispatch({type: 'CLEAR_CART'})
    
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}