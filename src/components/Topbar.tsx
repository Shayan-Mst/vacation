
import {  useShow } from '@/context/context'
import React, { useRef } from 'react'

const Topbar = () => {

const {show,setShow} = useShow();
const sideRef = useRef(null);


const toggleShow = () => {
  setShow((prevShow: any) => !prevShow); // Correctly toggles the state based on previous value

  

};

  return (
    <div className='relative top-bar'>
    {/* <Image src={desert} alt='desert' className='w-full h-full object-cover absolute z-0'></Image> */}
    

<div className=' relative flex justify-between'>
    <svg ref={sideRef}  onClick={toggleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     className="relative cursor-pointer  z-30">
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>



<svg  width="30" height="30"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>

</div>

<div className='font-bold mx-2 my-8 text-center'>
    {/* <span className='block mb-2 md:hidden'>Welcome , Traveler !</span>
    <span className='text-2xl md:hidden'>Explore tour packages</span> */}
    <span className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl'>Dream Vacation</span>
  
</div>
<div className='w-full my-8 grid'>
<div className="search-container w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
    <input type="text" className="search-input" placeholder="Search for destination or tour"/>
    <button className="search-button">
    <svg className="search-icon" fill="#ffffff" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M10.035,18.069a7.981,7.981,0,0,0,3.938-1.035l3.332,3.332a2.164,2.164,0,0,0,3.061-3.061l-3.332-3.332A8.032,8.032,0,0,0,4.354,4.354a8.034,8.034,0,0,0,5.681,13.715ZM5.768,5.768A6.033,6.033,0,1,1,4,10.035,5.989,5.989,0,0,1,5.768,5.768Z"/>

</g>

</svg>
    </button>
</div>
</div>

</div>
  )
}

export default Topbar