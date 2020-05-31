const {atom, selector} = require("recoil");
import {ATOM_KEYS} from "./constants";

export const cart = atom({
    key: ATOM_KEYS.CART,
    default: []
})

export const numberOfProductsInCart = selector({
    key: ATOM_KEYS.NUMBER_OF_PRODUCTS_IN_CART,
    get: ({get}) => {
        const cartState = get(cart)
        return cartState.length
    }
})