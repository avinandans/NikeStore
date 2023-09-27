import React from 'react'

const FlexContent = ({endpoint:{btn, heading, img, text, title, url}}) => {
    return (
        <div className={` bg-slate-100 p-16 md:p-12 xsm:p-7 flex sm:flex-col items-center justify-between nike-container rounded-xl  lg:justify-center`}>
            <div className='max-w-lg w-full grid items-center lg:max-w-none lg:text-center md:text-left sm:text-left'>
                <h1 className='text-4xl font-bold text-gradient mb-4 sm:mb-1 md:text-xl'>{heading}</h1>
                <h1 className='text-5xl font-bold text-slate-900 filter drop-shadow-lg lg:text-4xl md:text-xl sm:text-xl'>{title}</h1>
                <p className='my-4 sm:mt-2 text-slate-900 xl:text-sm'>{text}</p>
                <a href={url} className="flex items-center" target={"_blank"} role="button">
                    <button type='button' className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
                </a>
            </div>
            <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full md:mt-14'>
                <img src={img} alt={`img/${heading}`} className={`w-auto object-fill transitions-theme`} />
            </div>
        </div>
    )
}

export default FlexContent