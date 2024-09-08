import React from 'react'
import Navigation from '@/components/navigation'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
const page = () => {
  return (
    <>
    <Sidebar/>
    <div>

        <Topbar/>
        <Footer/>
        <Navigation/>

    </div>
    </>
  )
}

export default page