import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    cartState       : false,
    cartItems       : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :  [],
    cartTotalAmount : 0,
    cartTotalQty    : 0
}
const CartSlice = createSlice({
    name: "cart",
    initialState,    
    reducers: {
        openCart:(state, action)=>{
            state.cartState = action.payload.cartState
        },
        closeCart:(state, action)=>{
            state.cartState = action.payload.cartState
        },
        addItem:(state, action)=>{ 
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
            if(itemIndex >= 0 ) {
                state.cartItems[itemIndex].qty += 1;
                toast.success(`${action.payload.title} Item QTY Increased`)
            } else {
                const temp = {...action.payload, qty:1}
                state.cartItems.push(temp)     
                toast.success(`${action.payload.title} added to cart`)          
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeItem:(state, action) => {
            const removeItem = state.cartItems.filter((item)=>item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
            toast.success(`${action.payload.title} Removed from cart`)
        },
        increaseQty:(state, action) => {
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
            if(itemIndex >= 0 ) {
                state.cartItems[itemIndex].qty += 1;
                toast.success(`${action.payload.title} Item QTY Increased`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        decreaseQty:(state, action) => {
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
            if(state.cartItems[itemIndex].qty > 1 ) {
                state.cartItems[itemIndex].qty -= 1;
                toast.success(`${action.payload.title} Item QTY Decreased`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setTotal:(state, action)=>{
            const {totalAmount,totalQty} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, qty} = cartItem;
                const totalAmount = price*qty;
                cartTotal.totalAmount +=totalAmount;
                cartTotal.totalQty +=qty;
                return cartTotal;
            },{
                totalAmount: 0,
                totalQty   : 0
            })
            state.cartTotalAmount = totalAmount;
            state.cartTotalQty = totalQty;
        },
        setTotalAmount:(state, action)=>{

        },
        clearCart: (state, action) => {
            state.cartItems = [];
            toast.success(`Cart Cleared Succesfully`)
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        } 
    }
})

export const {openCart,closeCart, addItem, removeItem, increaseQty, decreaseQty,clearCart,setTotal} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItem  = (state) =>  state.cart.cartItems;
export const selectCartTotalAmount  = (state) =>  state.cart.cartTotalAmount;
export const selectCartTotalQty  = (state) =>  state.cart.cartTotalQty;
export default CartSlice.reducer;