import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const Header = () => {
  return (
    <div className='bg-slate-900'>
        <div>
            <div>
                {/* <img src={logo} alt="logo/img" /> */}
            </div>
            <ul>
                <li>
                    <MagnifyingGlassIcon/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header