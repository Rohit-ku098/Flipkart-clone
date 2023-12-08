import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : {}
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers : {
        setProduct : (state, action) => {
            const prod = action.payload
            state.product = prod
        }
    }
})

export const {setProduct} = product.actions
export default product.reducer