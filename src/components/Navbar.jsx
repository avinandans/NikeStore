import React, {useState, useEffect} from 'react';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { openCart, selectCartTotalQty } from '../store/slice/CartSlice';


const NavBar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQty = useSelector(selectCartTotalQty)
    const onCartToggle = () => {
        dispatch(openCart({
            cartState : true
        }))
    }
    const onNavScroll = () => {
        var headerHeight = document.getElementsByClassName('header')[0].clientHeight;
        if(window.scrollY > headerHeight) {
            setNavState(true)
        } else {
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    return (
        <nav className={ !navState ? 'header flex items-center justify-center fixed top-0 left-0 right-0 opacity-100 z-50 h-[9vh] transition-all duration-100 ease-in-out' : 'header fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-{100} blur-effect-theme transition-all duration-300 ease-in-out'}>
            <div className='flex items-center justify-between nike-container'>
                <div className='flex item-center'>
                    <img src={logo} alt="logo/img" className={`w-16 h-auto ${navState && "filter brightness-0"}`}/>
                </div>
                <ul className='flex items-center justify-center gap-3'>
                    <li className='grid items-center '>
                        <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className='grid items-center '>
                        <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className='grid items-center '>
                        <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                            <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                            <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQty}</div>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar