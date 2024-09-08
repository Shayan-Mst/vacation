"use client"
import React from 'react'
import Navigation from '@/components/navigation'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Sidebar/>
    <div>

        <Topbar/>

        <div className='p-6 sm:p-12'>

<div className='p-6 rounded-md'>


  <span className='text-4xl font-bold '>Vacation Discounts</span>
  <br/>
  <br/>
  <p className='text-xl font-semibold'>Members save hundreds of dollars
at thousands of locations.</p>
<br/>
<p className='text-lg  '>Unlock exclusive savings and discounts by using your AAA Membership! With your membership, you can save on a wide range of services, including travel, dining, shopping, entertainment, and automotive needs. From hotel bookings to rental cars and theme park tickets, your AAA card opens up a world of deals. Don’t miss out—make the most of your membership to enjoy great value and benefits, whether you’re at home or on the road.</p>
<br/>
  <br/>
<Link href='/tour' className='self-end'><button className='bg-purple-500 hover:bg-white hover:text-purple-500 hover:border-purple-500 border text-white font-bold py-2 px-8 '>Explore Sailings & Offers</button></Link>
  
 
</div>
<br/>
<br/>

<div className='bg-purple-950 p-4 md:p-8 lg:p-16' >

<p className='text-white font-semibold text-xl md:text-2xl'>Member savings easily surpass the cost of membership.</p>
<br/>
<br/>
<div className='grid grid-cols-2 md:grid-cols-3 sm:gap-8 lg:gap-16 gap-4'>

<div className='bg-white rounded-md p-4 py-8 cursor-pointer'>

    <div className='text-center'>
    <svg  className={`mx-auto`} width="40" height="40" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="31.Home"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z"/><path d="M17 18H7v-8h2v6h6v-6h2v8z"/></g></svg>

<p  className='mt-4 font-bold text-lg hover:underline'>Smart Home</p>
<p className='text-sm'>Alarm and smart home monitoring fees</p>
<br/>
<p>SAVE $60 per year</p>
</div>

</div>

<div className='bg-white rounded-md p-4 py-8  cursor-pointer'>

<div className='text-center'>
<svg className='mx-auto' width="40" height="40" strokeWidth="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.331 9.509h-2.012l-1.307-4.972a4.778 4.778 0 0 0-4.642-3.531H7.579a4.741 4.741 0 0 0-4.74 4l-1.8 11.672a3.059 3.059 0 0 0 .706 2.462A3.148 3.148 0 0 0 3.8 20.207a3.25 3.25 0 0 0 6.428.039H13.9a3.251 3.251 0 0 0 6.424 0 2.644 2.644 0 0 0 2.663-2.62v-5.5a2.644 2.644 0 0 0-2.656-2.617zm-9.843-7.473h1.882A3.747 3.747 0 0 1 16.015 4.8l1.238 4.71h-6.282a1.723 1.723 0 0 1-1.682-2.1zm-3.47 19.928a2.234 2.234 0 1 1 2.233-2.234 2.236 2.236 0 0 1-2.233 2.234zm10.1 0a2.234 2.234 0 1 1 2.233-2.234 2.236 2.236 0 0 1-2.237 2.234zm4.849-4.338a1.613 1.613 0 0 1-1.626 1.589 3.264 3.264 0 0 0-6.447 0h-3.653a3.324 3.324 0 0 0-3.223-2.749A3.324 3.324 0 0 0 3.8 19.185a2.12 2.12 0 0 1-1.269-.712 2.031 2.031 0 0 1-.471-1.634l1.8-11.672a3.715 3.715 0 0 1 3.719-3.131h1.853l-1.149 5.15a2.755 2.755 0 0 0 2.688 3.354h9.36a1.612 1.612 0 0 1 1.632 1.589z"/></svg>

<p  className='mt-4 font-bold text-lg hover:underline'>Rental Car</p>
<p className='text-sm'>Hertz Car Rental
3-day rental</p>
<br/>
<p>SAVE $83</p>
</div>

</div>

<div className='bg-white rounded-md p-4 py-8  cursor-pointer col-span-2 md:col-span-1'>
    <div className='text-center'>
    <svg className='mx-auto' fill="#000000" height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_26_"> <path id="XMLID_27_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300 c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"></path> <path id="XMLID_30_" d="M215.911,200.912H114.088c-6.067,0-11.537,3.654-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347 C119.914,242.95,141.762,252,165,252c23.238,0,45.086-9.05,61.518-25.481c4.29-4.29,5.573-10.741,3.252-16.347 C227.448,204.566,221.978,200.912,215.911,200.912z"></path> <path id="XMLID_31_" d="M115.14,147.14c3.72-3.72,5.86-8.88,5.86-14.14c0-5.26-2.14-10.42-5.86-14.141 C111.42,115.14,106.26,113,101,113c-5.27,0-10.42,2.14-14.14,5.859C83.13,122.58,81,127.74,81,133c0,5.26,2.13,10.42,5.86,14.14 c3.72,3.72,8.88,5.86,14.14,5.86C106.26,153,111.42,150.859,115.14,147.14z"></path> <path id="XMLID_71_" d="M229,113c-5.26,0-10.42,2.14-14.14,5.859c-3.72,3.721-5.86,8.87-5.86,14.141c0,5.26,2.14,10.42,5.86,14.14 c3.72,3.72,8.88,5.86,14.14,5.86c5.26,0,10.42-2.141,14.14-5.86c3.73-3.72,5.86-8.88,5.86-14.14c0-5.26-2.13-10.42-5.86-14.141 C239.42,115.14,234.27,113,229,113z"></path> </g> </g></svg>
 
    <p  className='mt-4 font-bold text-lg hover:underline'>Prescription Glasses</p>
<p className='text-sm'>LensCrafters
Frames plus prescription lenses</p>
<br/>
<p>SAVE $124</p>
    </div>
</div>

</div>
</div>
        </div>
        <Footer/>
        <Navigation/>

    </div>
    </>
  )
}

export default page