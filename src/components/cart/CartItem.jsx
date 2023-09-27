import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItem,decreaseQty,increaseQty } from "../../store/slice/CartSlice";

const CartItem = ({item: { id, title, text, img, color, shadow, price, cart, qty }}) => {
  const dispatch = useDispatch()
  
  const onDeleteItem = () => {
    dispatch(removeItem({ id, title, text, img, color, shadow, price, cart, qty }))
  }
  const onIncQty = () => {
    dispatch(increaseQty({ id, title, text, img, color, shadow, price, cart, qty }))
  }
  const onDecQty = () => {
    dispatch(decreaseQty({ id, title, text, img, color, shadow, price, cart, qty }))
  }

  return (
    <div className="flex align-middle justify-between w-full px-5">
      <div className="flex items-center gap-5 sm:gap-3">
        <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
          <img src={img} alt={`img/cart-item/${id}`} className="w-36 h-20 object-contain lg:w-28 sm:w-24 sm:h-16 xsm:h-14 xsm:w-20 "/>
          <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>        
        </div>
        <div className="grid items-center gap">
          <div className="grid items-center leading-none">
            <h1 className="font-medium text-lg lg:text-sm text-slate-900">{title}</h1>
            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
          </div>
          <div className="flex align-middle gap-2 w-full mt-2">
            <button type="button" className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90" onClick={onDecQty}>
              <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]" />
            </button>
            <div className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center text-white text-sm lg:text-xs">{qty}</div>
            <button type="button" className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90" onClick={onIncQty}>
              <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white storke-[2]" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center">
        <div className="grid items-center justify-center">
          <p className="text-lg lg:text-sm sm:font-bold text-slate-900 font-medium">${price * qty}</p>
        </div>
        <div className="grid items-center justify-center">
          <button type="button" className="text-red-600 active:scale-90 cursor-pointer" onClick={onDeleteItem}>
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
