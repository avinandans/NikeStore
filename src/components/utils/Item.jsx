import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addItem,openCart } from '../../store/slice/CartSlice';

const Item = ({ifExists, btn, color, id, img, price, rating, shadow, text, title }) => {
    const dispatch = useDispatch(); 
    const onAddtoCart = () => {
        const item = {id, title, color, text, img, shadow, price}
        dispatch(addItem(item))
    } 
    const onCartToggle = () => {
        dispatch(openCart({
            cartState : true
        }))
    }
    return (
        <div className={`relative z-0 bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists?'justify-items-start mb-3':'justify-items-center'} rounded-xl py-7 px-7 md:px-5 md:py-5 sm:px-5 sm:py-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
            <div className={`grid items-center ${ifExists?'justify-items-start':'justify-items-center'}`}>
                <Link to={"/product/"+id} className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</Link>
                <p className='text-slate-200 filter drop-shadow text-shadow md:text-sm font-normal '>{text}</p>
                <div className='flex items-center justify-between w-28 mt-1 mb-3'>
                    <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
                        <h1 className='text-black text-sm font-medium'>${price}</h1>
                    </div>
                    <div className='flex items-center gap-1'>
                        <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4'/>
                        <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button type='button' onClick={()=>{onAddtoCart()}} className='bg-white-90 blur-effect-theme button-theme p-0.5 shadow-slate-200'>
                    <ShoppingBagIcon className='icon-style text-slate-900'/>
                </button>
                <button type='button' onClick={()=>{onAddtoCart();onCartToggle();}}  className='bg-white-90 blur-effect-theme button-theme px-2 py-1 shadow-slate-200 text-sm text-black'>
                    {btn}
                </button>
            </div>
            <div className={`'flex items-center' ${ifExists? 'absolute top-14 right-10 md:right-4 sm:right-4':'justify-items-center mt-7'}`}>
                <img src={img} alt={`img/item-img/${id}`} className={`transitions-theme ${ ifExists ? 'h-auto w-60 lg:w-56 md:w-40 sm:w-40 -rotate-[35deg] hover:-rotate-[12deg]' : 'h-36 w-64 hover:rotate-[12deg]' }`} />
            </div>            
        </div>
    )
}

export default Item;