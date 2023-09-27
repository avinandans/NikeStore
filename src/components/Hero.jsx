import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
const Hero = ({heroApi:{title, subtitle, btntext, img, sociallinks, videos }}) => {
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col '>
                <div className='bg-theme clip-path h-[90vh] lg:h-[75vh] md:h-[65vh] sm:h-[85vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
                <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
                    <div className='grid items-center justify-items-center mt-28 md:mt-22 sm:mt-32'>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200 mb-4 sm:mb-0'>{title}</h1>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                        <button type="button" className='button-theme bg-slate-200 shadow-slate-200 rounded-3xl my-10 py-3 px-10 sm:px-5 sm:py-2'>{btntext}</button>
                        <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] sm:top-[35vh] left-0 xl:left-0 w-auto h-auto '>
                            {
                                videos?.map((val, index) => (
                                    <Clips 
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        clip={val.clip}    
                                    />
                                ))
                            }
                        </div>
                        <div className='grid items-center absolute top-[33vh] lg:top-[27vh] sm:top-[35vh] right-0 gap-3'>
                            {
                                sociallinks?.map((val, index) => (
                                    <SocialLink
                                        key={index}
                                        icon={val.icon}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='my-6 sm:my-14 xsm:my-24'>
                        <img src={img} alt="Hero Image" className='w-auto h-[48vh] lg:h-[38vh] md:h-[31vh] sm:h-[32vh] xsm:h-[20vh] transitions-theme -rotate-[15deg] hover:rotate-0 cursor-pointer object-fill '/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;