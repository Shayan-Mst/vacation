import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import React from 'react'
import rock from './../../../public/rock.jpg'
import iran from './../../../public/iran.png'


const page = () => {
  return (
    <div className='h-full relative'>

<Topbar/>

<div className=' lg:px-16 lg:mx-8 p-8 grid grid-cols-1 gap-8 lg:grid-cols-2' >
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

    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>

        <div></div>
        <div>
            <Image className='object-fill' src={iran} alt='iran'></Image>
        </div>
    </div>
</div>

<Footer/>
<Navigation/>
    </div>
  )
}

export default page