import React from 'react'
import { FlexContent, Footer, Hero, Sales, Stories } from '../components'
import { heroapi, toprateslaes, highlight, sneaker, story, footerAPI } from '../data/data.js';

export const Homepage = () => {
  return (
    <main className='flex flex-col gap-16 relative'>
        <Hero heroApi={heroapi} />
        {/* <Sales endpoint={popularsales} ifExists/> */}
        <FlexContent endpoint={highlight}/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI}/>
    </main>
  )
}
