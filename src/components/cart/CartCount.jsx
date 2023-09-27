import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
const CartCount = ({onCartToggle, totalCart}) => {
  return (
    <div className='bg-white shadow h-[8vh] flex items-center justify-between sticky top-0 left-0 right-0 w-full px-3'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]'/>
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium text-slate-900'>
                    Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs ml-2'>({totalCart})</span>
                </h1>
            </div>
        </div>
        <div className='flex items-center'>
            <button type='button' className='rounded bg-theme-cart active:scale-90 p-0.5' onClick={onCartToggle}>
                <XMarkIcon className='w-5 h-5 text-white stroke-[2]'/>
            </button>
        </div>
    </div>
  )
}

export default CartCount