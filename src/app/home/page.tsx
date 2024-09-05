
"use client"
import React from 'react'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import ocean from './../../../public/ocean.jpg'
import mountain from './../../../public/mountain.jpg'
import trail from "./../../../public/trail.jpg"
import leopard from './../../../public/leopard.jpg'
import village from './../../../public/village.jpg'
import neon from './../../../public/neon.jpg'
import welcome from './../../../public/welcome.jpg'
import boat from './../../../public/boat.jpg'
import bg from './../../../public/bg-login.jpg'
import { useRouter } from "next/navigation"
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const page = () => {

   const navigation  = useRouter();

   function Navigate(){

    navigation.push("/popular-destination")

   }

  return (
    <div className='bg-gray-200'>

<Topbar/>

<div>
  {/* <div className='w-full my-8 md:hidden'>
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
</div> */}
<div className="w-full">
  <div className='bg-gray-300 p-4'>
  <div className='my-4'>
  <span className='font-bold lg:px-6 text-2xl'><span className='text-purple-700'>Featured </span> Tours</span>
  </div>
  <div className=" flex flex-col sm:flex-col md:flex-row gap-4 mb-8 ">
    
    
    <div className="p-0 lg:p-6 flex-1">
    <div className='w-full'><Image className='feat-tour-img' src={mountain} alt='first tour'></Image></div>
    <div className='flex items-center my-5 w-full justify-between'>
      <div className='inline'>
      <h2 className="text-xl font-bold mb-4">Majestic Peaks (SW)</h2>
      <p className="text-gray-600 font-semibold text-sm">Summit Sanctuary 17/08/2024</p>
      </div>
      <Link href='/tour'><button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg'>Book</button></Link>
    </div>
    
    </div>
    
    <div className="p-0 lg:p-6 flex-1">
    <div className='w-full'><Image className='feat-tour-img' src={ocean} alt='first tour'></Image></div>
    <div className='flex items-center my-5 w-full justify-between'>
      <div className='inline'>
      <h2 className="text-xl font-bold mb-4">Coastal Bliss (ITA)</h2>
      <p className="text-gray-600 font-semibold text-sm">Sunset Resort  11/08/2024</p>
      </div>
      <Link href='/tour'><button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg'>Book</button></Link>
    </div>
    </div>
  </div>
  </div>

  <div className='p-4 mb-6'>
  <div className='my-6'>
  <span className='font-bold lg:px-6 text-2xl'><span className='text-purple-700'>Popular </span> Destinations</span>
  </div>

  <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
    
    <figure onClick={Navigate} className="figure-container">
      <Image  src={leopard} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Natures's Call</h2>
        <p className='text-sm'>Wildness Lodge 19/07/2024</p>
      </figcaption>
    </figure>
    
 
    <figure onClick={Navigate} className="figure-container">
    <Image src={neon} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Neon Nightscape</h2>
        <p className='text-sm'>Metropolis Plaza 22/09/2024</p>
      </figcaption>
    </figure>
    
    
    <figure onClick={Navigate} className="figure-container">
    <Image src={village} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Persian Culture</h2>
        <p className='text-sm'>Ancient Village 23/09/2024</p>
      </figcaption>
    </figure>
    
   
    <figure onClick={Navigate} className="figure-container">
    <Image src={trail} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Azure Paradise</h2>
        <p className='text-sm'>Tropical Haven 19/01/2024</p>
      </figcaption>
    </figure>

    <figure onClick={Navigate}  className="figure-container">
    <Image src={welcome} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Walking Journey</h2>
        <p className='text-sm'>No Room For Lazy 5/04/2025</p>
      </figcaption>
    </figure>

    <figure onClick={Navigate} className="figure-container">
    <Image src={boat} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Ocean Island</h2>
        <p className='text-sm'>Boats Cars 17/02/2025</p>
      </figcaption>
    </figure>

    <figure onClick={Navigate} className="figure-container lg:col-span-2 md:col-span-2">
    <Image src={bg} alt='leopard'></Image>
      <figcaption className="figure-caption">
        <h2 className="text-md font-bold">Cliffy Forest</h2>
        <p className='text-sm'>Canada Unseen 1/01/2024</p>
      </figcaption>
    </figure>
   
  </div>
  </div>

  <div className='p-4 bg-gray-300 pb-16'>
  <div className='my-6'>
  <span className='font-bold lg:px-6  text-2xl'>Categories</span>
  </div>

  <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
    
  <span className="tag">Adventure</span>
  <span className="tag">Beach</span>
  <span className="tag">Culture</span>
  <span className="tag">Luxury</span>
  <span className="tag">Experience</span>
  <span className="tag">Tours</span>
  <span className="tag">Activities</span>
  <span className="tag">Escapes</span>
  <span className="tag">Journeyes</span>
  <span className="tag">Countries</span>
  <span className="tag">City</span>
  <span className="tag">Forest</span>
  <span className="tag">Mountain</span>
  <span className="tag">Ski</span>
  <span className="tag">Chill</span>
  <span className="tag">Festivals</span>
  <span className="tag">Parks</span>
  <span className="tag">Desert</span>
  <span className="tag">Waterfall</span>
  <span className="tag">Island</span>
  <span className="tag">Paradise</span>
  <span className="tag">Unseen</span>
  <span className="tag">Nature</span>
  <span className="tag">Cleaning</span>
  <span className="tag">Earth</span>
  <span className="tag">Animals</span>
  <span className="tag">Concerts</span>
   
  </div>
  </div>
</div>

</div>

<Footer/>
<Navigation/>
    </div>
  )
}

export default page