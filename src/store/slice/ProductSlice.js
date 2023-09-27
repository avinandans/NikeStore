import { createSlice } from "@reduxjs/toolkit";
import psale1 from "../../assets/nike-air-red.png";
import psale2 from "../../assets/nike-adapt-bb.png";
import psale3 from "../../assets/nike-adapt-bb-smart.png";

const initialState = {
    PopularSales : {
        title: "Popular Sales",
        items: [
          {
            id: "0p0x1",
            title: "Nike Addapt BB 2.0",
            text: "MEN Running Shoes",
            rating: "4.9",
            btn: "Buy Now",
            img: psale2,
            price: "200",
            color: "from-blue-600 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
          },
          {
            id: "0p0x2",
            title: "Nike Martine Rose",
            text: "MEN Running Shoes",
            rating: "4.5",
            btn: "Buy Now",
            img: psale1,
            price: "200",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
          },
          {
            id: "0p0x3",
            title: "Nike Smart Shoe 2.0",
            text: "MEN Running Shoes",
            rating: "5+",
            btn: "Buy Now",
            img: psale3,
            price: "200",
            color: "from-violet-500 to-indigo-500",
            shadow: "shadow-lg shadow-violet-500",
          },
        ],
    }
}

const ProductSlice = createSlice({
    name: "products",
    initialState : initialState,
    reducers: {
      getProduct: ()=>{
        return null
      }
    }
})

// Extract the action creators object and the reducer
const { actions, reducer } = ProductSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer