import Topbar from '@/components/Topbar'
import Navigation from '@/components/navigation'
import Footer from '@/components/Footer'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mountain from './../../../public/mountain.jpg'

const page = () => {
  return (
    <div className='h-full relative'>

<Topbar/>
<div className='m-4  lg:p-8'>
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

  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

<div>
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
    <h2>Our prices start from</h2>
    <div className="price">$4,749 <span className="small-text">LAND ONLY</span></div>
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
<Footer/>
<Navigation/>
    </div>
  )
}

export default page