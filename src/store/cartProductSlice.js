import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    productCounter: {}
}
export const cartProduct = createSlice({
    name : 'cart product',
    initialState,
    reducers : {
        cartProducts : (state, action) => {
            state.cartProducts.unshift(action.payload)
            state.productCounter[action.payload.id] = 1;
        },
        removeProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter((prod) => prod.id != action.payload)
            delete state.productCounter[action.payload];
        },
        increaseQuantity : (state, action) => {
            const id = action.payload
            console.log(id)
            let quantity = state.productCounter[id];
            state.productCounter[id] = ++quantity;
        },
        decreaseQuantity : (state, action) => {
            const id = action.payload
            // console.log(id)
            let quantity = state.productCounter[id];
            if(quantity > 1)
                state.productCounter[id] = --quantity;
        }
    }

})
export const { cartProducts, removeProduct, increaseQuantity,decreaseQuantity } = cartProduct.actions;
export default cartProduct.reducer