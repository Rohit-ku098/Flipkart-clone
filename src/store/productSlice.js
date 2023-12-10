import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    id: 0,
    title: "",
    description: "",
    price: 0,
    originalPrice: 0,
    images: [""],
    rating: 0,
    flipkartAssured: true,
  },
};

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