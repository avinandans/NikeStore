import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import ProductSlice from "./slice/ProductSlice";
const Store = configureStore({
    reducer : {
        cart: CartSlice, 
        products: ProductSlice
    }
})
export default Store;