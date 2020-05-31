import React from 'react'
import {useRecoilState} from "recoil";
import {cart} from "../atoms";

const useCartStatus = () => {
    const [cartState, setCart] = useRecoilState(cart)

    const onAddToCart = (product, quantity) => {
        const predicate = ({id}) => id === product.id
        let doesSelectProductExistInCart = cartState.find(predicate)
        if(doesSelectProductExistInCart){
            let existingProduct = {...doesSelectProductExistInCart}
            const newQuantity = existingProduct.quantity + quantity
            existingProduct.quantity = newQuantity < 0 ? 0 : newQuantity
            const existingIndex = cartState.findIndex(predicate)
            let newCartState = [...cartState]
            newCartState[existingIndex] = existingProduct
            setCart(newCartState)
        }
        else {
            setCart([
                ...cartState,
                {
                    ...product,
                    quantity
                }
            ])
        }
    }

    return [cartState, onAddToCart]
}

export default useCartStatus