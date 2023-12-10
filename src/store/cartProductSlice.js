import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    addedToCart: false
}
export const cartProduct = createSlice({
    name : 'cart product',
    initialState,
    reducers : {
        cartProducts : (state, action) => {
            state.cartProducts.unshift(action.payload)
        },
        removeProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter((prod) => prod.id != action.payload)
        }
    }

})
export const { cartProducts, removeProduct, AddedToCart } = cartProduct.actions;
export default cartProduct.reducer