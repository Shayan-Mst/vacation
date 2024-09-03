
import React from 'react'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import ocean from './../../../public/ocean.jpg'
import mountain from './../../../public/mountain.jpg'

const page = () => {
  return (
    <div className='bg-gray-200'>

<div className='relative top-bar'>
    {/* <Image src={desert} alt='desert' className='w-full h-full object-cover absolute z-0'></Image> */}
    

<div className=' z-10 relative flex justify-between'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
     className="feather feather-menu">
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>

<svg width="30" height="30"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
</svg>

</div>

<div className='font-bold mx-2 my-8 md:text-center'>
    <span className='block mb-2 md:hidden'>Welcome , Traveler !</span>
    <span className='text-2xl md:hidden'>Explore tour packages</span>
    <span className='lg:text-8xl md:text-7xl hidden md:block'>Dream Vacation</span>
  
</div>
<div className='w-full my-8 hidden md:grid'>
<div className="search-container md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto">
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

<div className='h-full' style={{borderRadius:'25px'}}>
  <div className='w-full my-8 md:hidden'>
<div className="search-container sm:w-2/3 mx-auto">
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
<div className="w-full p-4">
  <div className='my-6'>
  <span className='font-bold lg:px-6 text-2xl'>Featured Tours</span>
  </div>
  <div className="flex flex-col sm:flex-col md:flex-row gap-4">
    
    
    <div className="p-0 lg:p-6 flex-1">
    <div className='w-full'><Image className='feat-tour-img' src={mountain} alt='first tour'></Image></div>
    <div className='flex items-center my-5 w-full justify-between'>
      <div className='inline'>
      <h2 className="text-xl font-bold mb-4">Majestic Peaks (SW)</h2>
      <p className="text-gray-600 font-semibold text-sm">Summit Sanctuary 17/08/2024</p>
      </div>
      <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg'>Book</button>
    </div>
    
    </div>
    
    <div className="p-0 lg:p-6 flex-1">
    <div className='w-full'><Image className='feat-tour-img' src={ocean} alt='first tour'></Image></div>
    <div className='flex items-center my-5 w-full justify-between'>
      <div className='inline'>
      <h2 className="text-xl font-bold mb-4">Coastal Bliss (ITA)</h2>
      <p className="text-gray-600 font-semibold text-sm">Sunset Resort  11/08/2024</p>
      </div>
      <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg'>Book</button>
    </div>
    </div>
  </div>
</div>

</div>
<Navigation/>
    </div>
  )
}

export default page