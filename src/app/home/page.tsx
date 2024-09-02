import Image from 'next/image'
import React from 'react'
import desert from './../../../public/boat.jpg'

const page = () => {
  return (
    <div className='h-full'>

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

<div className='font-bold mx-2 my-8'>
    <span className='block'>Welcome , Traveler !</span>
    <span className='text-2xl'>Explore tour packages</span>
</div>
</div>

    </div>
  )
}

export default page