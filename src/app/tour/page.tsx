"use client"
import Topbar from '@/components/Topbar'
import Naavigation from '@/components/navigation'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mountain from './../../../public/mountain.jpg'
import Swiper from 'swiper';
import { Pagination , Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import ocean from './../../../public/ocean.jpg'
import trail from "./../../../public/trail.jpg"
import leopard from './../../../public/leopard.jpg'
import village from './../../../public/village.jpg'
import neon from './../../../public/neon.jpg'
import boat from './../../../public/boat.jpg'


const page = () => {


  // swap collection

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Dynamically import Swiper and its modules
      Swiper.use([Navigation, Pagination]);

      new Swiper('.multiple-slide-carousel', {
       
        slidesPerView: 4,
        spaceBetween: 20,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1920: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          640:{
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0:{
            slidesPerView: 1,
            spaceBetween: 0,
          }
        },
      });
    }
  }, []);

  
  return (
    <>
   <Sidebar/>
    <div className='h-full relative'>

<Topbar/>
<div className='m-4 xl:mx-12  xl:px-12'>
<nav aria-label="breadcrumb" className="breadcrumb">
    <ul>
         <li>
        <svg fill="#000000" width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/></svg>
        </li>

      <li><Link href="/home">Home</Link></li>
      <li><span>/</span></li>
      <li ><Link href="/tour">Tour Packages</Link></li>
    </ul>
  </nav>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 gap-4'>

<div className='lg:col-span-2'>
    <Image className='rounded-lg' src={mountain} alt='mountain'></Image>

    <p className='py-8 text-gray-600'>Embark on an unforgettable eight-night journey through Japan, where ancient tradition meets modern innovation.
         Begin with a two-night stay in vibrant Tokyo, where you can explore the bustling streets of Shibuya and marvel at the historic Senso-ji Temple. 
         Then, board the iconic Shinkansen (bullet train) to Hakone for a night of relaxation in hot springs and breathtaking views of Mount Fuji. 
         Continue your adventure to Kyoto for two nights, where you’ll stroll through serene bamboo forests and visit magnificent temples such as Fushimi Inari Shrine. 
         Travel onward to the historic city of Hiroshima, where you’ll spend a night reflecting on its past and exploring the tranquil island of Miyajima. 
         Conclude your trip with two nights in the cultural heart of Osaka, where you’ll experience the lively Dotonbori district and the stunning Osaka Castle. 
        This rail odyssey through Japan is a perfect blend of natural beauty, history, and culture.</p>
</div>

<div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} className='bg-white rounded-md'>
<div className="package">
  
    <h2 className='md:text-sm'>Our prices start from</h2>
    <div className="price md:text-4xl">$4,749 <span className="small-text">LAND ONLY</span></div>
    <p className="duration">9 Days • INDEPENDENT • 8 Meals</p>
    <div className="logo">
      <span className='bg-gray-700 text-white py-1 px-2'><span className='text-yellow-400'>rail</span>bookers</span>
      <p className='mx-4 text-sm text-gray-600'>Operated Tour</p>
    </div>
    
    <button className='contact-btn my-6'>
    <span>Contact A Travel Agent</span>
</button>



    <h3>The Details</h3>
    <ul className="details-list">
      <li>8 nights accommodation</li>
      <li>8 breakfasts</li>
      <li>High-speed rail tickets</li>
      <li>Guided city tours</li>
      <li>Admission to top landmarks</li>
      <li>24/7 customer support</li>
      <li>Flexible booking options</li>
    </ul>
  </div>
</div>
    
  </div>

  </div>

<div className='text-center m-12'>
  <svg className='inline mx-4' fill="#000000" width="30px" height="30px" viewBox="0 0 100 100" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M60.61,84.17a1.5,1.5,0,0,1-.45-2.93l5.55-1.74a1.5,1.5,0,1,1,.9,2.86L61.06,84.1A1.41,1.41,0,0,1,60.61,84.17Z"/><path d="M41,90.25a1.46,1.46,0,0,1-1.5-1.46V40a1.49,1.49,0,0,1,1.05-1.43L78.43,26.76a1.52,1.52,0,0,1,1.34.22,1.51,1.51,0,0,1,.61,1.21V56.76a1.5,1.5,0,0,1-3,0V30.23L42.54,41.13V88.71A1.53,1.53,0,0,1,41,90.25Z"/><path d="M41,90.29a1.5,1.5,0,0,1-.45-2.93l19.57-6.12a1.5,1.5,0,1,1,.89,2.86L41.49,90.22A1.41,1.41,0,0,1,41,90.29Z"/><path d="M47,81.29a1.5,1.5,0,0,1-.45-2.93L60.38,74a1.5,1.5,0,1,1,.9,2.86L47.49,81.22A1.41,1.41,0,0,1,47,81.29Z"/><path d="M47,74.29a1.5,1.5,0,0,1-.45-2.93l10.53-3.29A1.5,1.5,0,1,1,58,70.93L47.49,74.22A1.41,1.41,0,0,1,47,74.29Z"/><path d="M41,90.21a1.31,1.31,0,0,1-.44-.07L2.7,78.3a1.49,1.49,0,0,1-1.06-1.43V28.11a1.5,1.5,0,0,1,1.5-1.5,1.43,1.43,0,0,1,.46.07l10.27,3.2a1.52,1.52,0,0,1,1.05,1.44V51.94a1.55,1.55,0,0,1,.15,1.3,1.52,1.52,0,0,1-1.92.92l-.23-.08a1.51,1.51,0,0,1-1-1.42V32.42L4.64,30.14V75.77l34.9,10.9V41.05L31.37,38.5V58a1.5,1.5,0,0,1-3,0V36.46A1.5,1.5,0,0,1,30.31,35l11.18,3.5a1.48,1.48,0,0,1,1,1.43V88.71a1.48,1.48,0,0,1-.61,1.21A1.5,1.5,0,0,1,41,90.21Z"/><path d="M29.87,59.53a1.5,1.5,0,0,1-1.5-1.5V36.66a1.44,1.44,0,0,1,.05-.68,1.49,1.49,0,0,1,1.88-1,1.54,1.54,0,0,1,1.07,1.44V58A1.5,1.5,0,0,1,29.87,59.53Z"/><path d="M13.65,54.24a1.74,1.74,0,0,1-.5-.08l-.23-.08a1.51,1.51,0,0,1-1-1.42V31.32a1.5,1.5,0,0,1,3,0V51.94a1.55,1.55,0,0,1,.15,1.3A1.52,1.52,0,0,1,13.65,54.24Z"/><path d="M41,41.49A1.48,1.48,0,0,1,39.53,40V40a1.5,1.5,0,0,1,3,0A1.52,1.52,0,0,1,41,41.49Z"/><path d="M3.16,29.6a1.5,1.5,0,0,1-.58-2.88l38-15.82a1.5,1.5,0,0,1,1.16,2.77L3.73,29.49A1.44,1.44,0,0,1,3.16,29.6Z"/><path d="M14.62,32.85A1.5,1.5,0,0,1,14,30l17.17-7.14a1.5,1.5,0,0,1,1.15,2.77L15.19,32.73A1.46,1.46,0,0,1,14.62,32.85Z"/><path d="M29.83,37.94A1.48,1.48,0,0,1,28.45,37a1.5,1.5,0,0,1,.8-2l15.12-6.29a1.5,1.5,0,0,1,1.16,2.77L30.41,37.83A1.49,1.49,0,0,1,29.83,37.94Z"/><path d="M52.75,18.66a1.51,1.51,0,0,1-.58-.12L40.62,13.66a1.5,1.5,0,1,1,1.16-2.76l11.56,4.88a1.5,1.5,0,0,1,.8,2A1.52,1.52,0,0,1,52.75,18.66Z"/><path d="M78.89,29.69a1.51,1.51,0,0,1-.58-.12l-26.14-11a1.5,1.5,0,1,1,1.17-2.76l26.14,11a1.5,1.5,0,0,1-.59,2.88Z"/><path d="M29.87,59.53a1.51,1.51,0,0,1-1.27-.7l-8-12.55a1.5,1.5,0,1,1,2.53-1.61l8,12.55a1.51,1.51,0,0,1-1.26,2.31Z"/><path d="M13.65,54.24a1.47,1.47,0,0,1-1.12-.51,1.49,1.49,0,0,1,.13-2.11l8.21-7.27a1.5,1.5,0,0,1,2,2.25l-8.21,7.26A1.45,1.45,0,0,1,13.65,54.24Z"/><path d="M45,31.65a1.5,1.5,0,0,1-.62-.13L31.2,25.59a1.5,1.5,0,0,1,1.23-2.73l13.14,5.92A1.5,1.5,0,0,1,45,31.65Z"/><path d="M72.88,84.2A15.16,15.16,0,1,1,88,69,15.18,15.18,0,0,1,72.88,84.2Zm0-27.32A12.16,12.16,0,1,0,85,69,12.17,12.17,0,0,0,72.88,56.88Z"/><path d="M72.72,78.88a1.5,1.5,0,0,1-1.5-1.5V61a1.5,1.5,0,1,1,3,0V77.38A1.5,1.5,0,0,1,72.72,78.88Z"/><path d="M80.9,70.7H64.54a1.5,1.5,0,0,1,0-3H80.9a1.5,1.5,0,0,1,0,3Z"/><path d="M86.26,83.29a1.52,1.52,0,0,1-.94-.33l-3.77-3a1.5,1.5,0,1,1,1.88-2.34l3.77,3a1.5,1.5,0,0,1-.94,2.67Z"/><path d="M94.91,94A4.55,4.55,0,0,1,92,93l-6.55-5.3a4.51,4.51,0,0,1-1.68-3.1,4.55,4.55,0,0,1,1-3.38l.39-.49A4.59,4.59,0,0,1,88.28,79a4.54,4.54,0,0,1,3.38,1l6.55,5.29a4.59,4.59,0,0,1,1.68,3.1,4.53,4.53,0,0,1-1,3.38h0l-.39.49A4.6,4.6,0,0,1,95.4,94ZM88.77,82h-.18a1.63,1.63,0,0,0-1.08.59l-.39.49a1.57,1.57,0,0,0-.35,1.18,1.55,1.55,0,0,0,.59,1.08l6.54,5.3a1.63,1.63,0,0,0,2.26-.24l.4-.49a1.64,1.64,0,0,0,.35-1.18,1.59,1.59,0,0,0-.59-1.08l-6.55-5.3A1.59,1.59,0,0,0,88.77,82Zm9,8.86h0Z"/></svg>
  <span className='font-bold text-xl'>Suggested Packages</span></div>
 
      <div className="w-full relative px-8 ">
      <div className="swiper multiple-slide-carousel swiper-container relative">
       <div className="swiper-wrapper mb-16">
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
             <Image className='h-1/2 object-cover rounded-t-2xl hey' src={mountain} alt='mountain'></Image>
             <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>

           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={ocean} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px]">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={village} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={leopard} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={neon} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={boat} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
         <div className="swiper-slide">
           <div className="bg-white rounded-2xl h-[500px] ">
           <Image className='h-1/2 object-cover rounded-t-2xl hey' src={trail} alt='mountain'></Image>
           <div className='p-4'>
            <p className='text-xs  text-purple-800'>Package Guide</p>
            <span className='text-lg font-bold my-2'>A Taste Of The Balkans</span>
            <span className='text-xs my-2 block'>15 Days • 21 Meals</span>
            <p className='text-xs'>Dubrovnik, Kotor, Mostar, Sarajevo, Karanac, Osijek, Zagreb, Plitvice Lakes National Park, Novo Mesto, Ljubljana</p>
            <div className='flex justify-between mt-4 items-center card-body'>
              <div >
                <text style={{fontWeight:'600'}} className='text-gray-500 text-sm'>Starting Price</text>
                <p  className='text-2xl font-bold'>$ 3923</p>
              </div>
             

<button className='bg-gray-800 p-4 hover:bg-gray-100 shadow-lg hover:text-black rounded-xl text-white text-sm'>VIEW TRIP</button>

          
            </div>
           </div>
           </div>
         </div>
        
       </div>
       <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
         <button id="slider-button-left" className=" swiper-button-prev group  flex justify-center items-center   !w-12 !h-12 transition-all duration-500 rounded-full   hover:bg-gray-200 !-translate-x-16" data-carousel-prev>
         <svg  width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<title/>

<g id="Complete">

<g id="arrow-left">

<g>

<polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>

<line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21.5" x2="4.8" y1="12" y2="12"/>

</g>

</g>

</g>

</svg>
         </button>
         <button id="slider-button-right" className=" swiper-button-next group  flex justify-center items-center  !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-gray-200 !translate-x-16" data-carousel-next>
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill="#0F0F0F"/>
</svg>
         </button>
       </div>
      </div>
      </div>
      
<Footer/>
<Naavigation/>
    </div>
    </>
  )
}

export default page