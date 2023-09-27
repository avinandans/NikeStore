import React from 'react'

const Footer = ({footerAPI: {titles, links} }) => {
  return (
    <footer className='bg-theme pt-7 pb-3'>
        <div className='nike-container text-slate-200'>
            <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none gap-3 md:gap-5'>
                {titles.map((footerTitles, i) => {
                    return(
                        <div key={i} className="grid items-center">
                            <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{footerTitles.title}</h1>
                        </div>
                    )
                })}
                {links.map((footerLinks, i)=>(
                    <ul key={i} className="grid items-center gap-1">
                        {
                            footerLinks.map((link, i)=>(<li key={i} className="text-sm sm:text-xs"><a href=''>{link.link}</a></li>))
                        }
                    </ul>
                ))}
            </div>
        </div>
        <div className='text-center mt-5'>
            <div className="nike-container">
                <p className='text-slate-200 text-sm'>&copy; All right reserved. Design & Developed by <span className='font-semibold'>Avi</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer