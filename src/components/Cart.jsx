import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, closeCart, selectCartItem, setTotal, selectCartTotalAmount, selectCartTotalQty } from '../store/slice/CartSlice';
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'


const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState)
  const SelectCartItems = useSelector(selectCartItem)
  const totalAmount = useSelector(selectCartTotalAmount)
  const totalQty = useSelector(selectCartTotalQty)


  console.log(SelectCartItems)

  useEffect(()=>{
    dispatch(setTotal())
  },[SelectCartItems, dispatch])

  const onCartToggle = () => {
      dispatch(closeCart({
          cartState : false
      }))
  }
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${ifCartState? 'opacity-100 visible translate-x-0':'opacity-0 invisible translate-x-8'} `}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}>
            <CartCount onCartToggle={onCartToggle} totalCart={totalQty}/>
            {SelectCartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle}/> : <div className='py-5 flex items-start justify-start flex-col gap-y-7 lg:gap-y-6 overflow-y-auto h-[76vh] xsm:72vh scroll-smooth scroll-hidden'>{SelectCartItems?.map((item, index)=><CartItem key={item.id} item={item} />)}<div className='shadow h-[16vh] xsm:h-[20vh] fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'><div className='flex items-center justify-between'><p className='text-base xsm:text-sm font-semibold uppercase'>Subtotal</p><p className='text-sm xsm:text-xs rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</p></div><div className='grid items-center gap-2'><p className='text-sm font-medium text-center'>Taxes and Shipping Will Calculate At Shipping </p><button type="button" className='button-theme bg-theme-cart text-white'>Check Out</button></div></div></div>}
        </div>
    </div>
  )
}

export default Cart