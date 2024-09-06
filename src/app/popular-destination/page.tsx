"use client"
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import React from 'react'
import rock from './../../../public/rock.jpg'
import chris from './../../../public/chris.jpg'
import john from './../../../public/john.jpg'
import jane from './../../../public/jane.jpg'
import michael from './../../../public/michael.jpg'
import emily from './../../../public/emily.jpg'
import sophi from './../../../public/sophi.jpg'


const page = () => {
  return (
    <div className='h-full relative'>

<Topbar/>

<div className=' xl:px-16 xl:mx-8 lg:mx-8 p-8 grid grid-cols-1 gap-8 lg:grid-cols-2' >
<div>
     <Image className='destination-img' src={rock} alt="rock"></Image> 

    
</div>
<div>
<h1 className='font-bold text-4xl'>Iran: From Ancient Persia to Modern Marvels</h1>
<p className='text-semibold py-6'>
Iran is a land of history, culture, and natural beauty. From the ancient ruins of Persepolis to the vibrant bazaars of Tehran,
 from the vast deserts of Lut to the lush forests of Mazandaran, Iran’s landscapes are as diverse as its people. The country is home to 26 UNESCO World Heritage Sites,
  showcasing its rich heritage. Explore the stunning architecture of Isfahan, the poetic gardens of Shiraz, and the Caspian Sea’s serene shores. Whether you seek history, 
adventure, or relaxation, Iran offers a unique and unforgettable experience.
</p>

<button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-lg'>Start Planning</button>
</div>
</div>

<div className='bg-gray-200'>

    <div className='grid grid-cols-1 gap-4  lg:grid-cols-2'>

        <div className='p-16'>
            <h2 className='sm:text-4xl text-3xl font-bold my-2'>Iran at a Glance</h2>
            <div className='w-14 h-1 bg-purple-500 mb-4'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
<div className='flex-column'>

<p className='text-md py-2'><span className='font-bold text-lg'>Currency :</span> Iranian Rial (IRR)</p>
<p  className='text-md py-2'><span className='font-bold text-lg'>Tipping Customs : </span>Tipping is appreciated but not mandatory. In restaurants, a 10% tip is customary if service is good.</p>
<p className='text-md py-2'><span className='font-bold text-lg'>Language : </span> Persian (Farsi)</p>
</div>
<div>
<p className='text-md py-2'><span className='font-bold text-lg'>Popular Drink:</span>  Chai (tea) is a national staple, often served with sugar cubes. Also, try traditional Doogh, a refreshing yogurt-based drink.</p>
<p className='text-md py-2'> <span className='font-bold text-lg'>Power Up:</span>  C or F (two-prong) 220 V</p>

</div>
            </div>
            <p className='text-md py-2'><span className='font-bold text-lg'>Must Eat : </span>
            Kebab (a variety of grilled meats served with saffron rice, a staple across Iran. Don’t miss the famous Chelo Kebab or the flavorful Joojeh Kebab).
            </p>
            <p className='text-md py-2'><span className='font-bold text-lg'>Weather : </span>
            Varies greatly. Iran ranges from the lush, temperate Caspian coast to the arid central deserts, with hot summers and cold winters.
            </p>
            <p className='text-md py-2'><span className='font-bold text-lg'>Best Time to Visit : </span>
            Spring (March to May) and autumn (September to November) offer mild weather and are ideal for exploring Iran’s diverse landscapes and cultural sites.
            </p>
        </div>
        <div className='hidden iran-bigger sm:block'></div>
        <div className='block iran-smaller sm:hidden'></div>
    </div>
</div>

<div className='p-4 lg:p-8  text-center'>
<article className='text-2xl font-semibold m-8'>Meet Our Experts</article>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-lg shadow-lg card">
        <div className='card-content'>
        <Image className="w-24 h-24 rounded-full  mx-auto object-cover" src={john} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">New York, USA</p>
        </div>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-lg card">
        <div className='card-content'>
        <Image className="w-24 h-24 rounded-full mx-auto object-cover" src={jane} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Jane Smith</h2>
          <p className="text-gray-600">Los Angeles, USA</p>
        </div>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-lg card">
      <div className='card-content'>
        <Image className="w-24 h-24 rounded-full mx-auto object-cover" src={michael} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Michael Johnson</h2>
          <p className="text-gray-600">London, UK</p>
        </div>
        </div>
      </div>

   
      <div className="bg-white p-6 rounded-lg shadow-lg card">
      <div className='card-content'>
        <Image className="w-24 h-24 rounded-full mx-auto object-cover" src={emily} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Emily Davis</h2>
          <p className="text-gray-600">Paris, France</p>
        </div>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-lg card">
      <div className='card-content'>
        <Image className="w-24 h-24 rounded-full mx-auto object-cover" src={chris} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Chris Brown</h2>
          <p className="text-gray-600">Sydney, Australia</p>
        </div>
        </div>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-lg card">
      <div className='card-content'>
        <Image className="w-24 h-24 rounded-full mx-auto object-cover" src={sophi} alt="Profile Picture"></Image>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">Sophia Wilson</h2>
          <p className="text-gray-600">Tokyo, Japan</p>
        </div>
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