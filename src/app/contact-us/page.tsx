"use client"
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Navigation from '@/components/navigation'
import React from 'react'

const page = () => {
  return (
    <>
    <Sidebar/>
    <div >
        <Topbar/>
        <div >
        <section data-trk="Dynoblock > Section" data-trk-block="Section" data-testid="block-section"  className='py-12 px-6 sm:px-12 md:px-16'>
            <div data-testid="block-text" data-trk="Text" data-trk-block="Text"  className="section__content"><div className="text__container"><div><h2 className='text-3xl font-bold' style={{letterSpacing:"-1px"}}>Need road service right now? Call 800-BBB-HELP (800-222-4357)<br/></h2>
            <p className='mt-8 text-lg'>we are here to help you. If you need assistance with your Membership or if you're looking for advice, answers, or tips on using one of our products, contact us by phone or&nbsp;email,&nbsp;or search our&nbsp;<a href="/search-frequently-asked-questions">frequently asked questions</a>.</p>
            </div></div></div></section>

            <section className='bg-gray-200 py-12 px-6 sm:px-12 md:px-16 my-6'>
                <div className='my-6'>

<span className='text-3xl font-semibold'>Member Services</span>
<hr className="border-t-1 border-gray-500 rounded-full my-6"/>
<p className='text-xl font-semibold'> Customer Service Phone Number</p>
<br/>
<aside style={{letterSpacing:"1px"}}>Mon.-Fri. 8am-10pm MST</aside>
<aside style={{letterSpacing:"1px"}}>Sat. & Sun. 8am-8pm MST</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>
                
  <div className='my-6'>
<p className='text-xl font-semibold'> Online Support</p>
<br/>
<aside style={{letterSpacing:"1px"}}>Mon.-Fri. 8am-10pm MST</aside>
<aside style={{letterSpacing:"1px"}}>Sat. & Sun. 8am-8pm MST</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>

                <div className='my-6'>
<p className='text-xl font-semibold'>Membership Payments Address</p>
<br/>
<aside style={{letterSpacing:"1px"}}>Member Operations </aside>
<aside style={{letterSpacing:"1px"}}>PO Box 24502 </aside>
<aside>Montreal, CA 94623-2450</aside>
              
                </div>
                
            </section>

            <section className='py-12 px-6 sm:px-12 md:px-16 my-6'>
                <div className='my-6'>

<span className='text-3xl font-semibold'>Travel Services</span>
<hr className="border-t-1 border-gray-500 rounded-full my-6"/>
<p className='text-xl font-semibold'> Reservations and Travel Insurance</p>
<br/>
<aside style={{letterSpacing:"1px"}}>Mon.-Fri. 8am-10pm MST</aside>
<aside style={{letterSpacing:"1px"}}>Sat. & Sun. 8am-8pm MST</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>
                
  <div className='my-6'>
<p className='text-xl font-semibold'>Get help with an online air, car, or hotel reservation</p>

<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>

                
                
                
            </section>

            <section className='bg-gray-200 py-12 px-6 sm:px-12 md:px-16 my-6'>
                <div className='my-6'>

<span className='text-3xl font-semibold'>Insurance Services</span>
<hr className="border-t-1 border-gray-500 rounded-full my-6"/>
<p className='text-xl font-semibold'>Auto & Home Insurance</p>
<br/>
<aside>New Policy Quotes & Sales</aside>
<br/>
<aside style={{letterSpacing:"1px"}}>Mon.-Fri. 8am-10pm MST</aside>
<aside style={{letterSpacing:"1px"}}>Sat. & Sun. 8am-8pm MST</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>
                
  <div className='my-6'>
<p className='text-xl font-semibold'>Claim Phone Number</p>
<br/>

<aside>Available 24/7</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
                </div>

                <div className='my-6'>
<p className='text-xl font-semibold'>Automated Billing Information Only</p>
<br/>
<aside>Available 24/7</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>

                </div>

                <div className='my-6'>
<p className='text-xl font-semibold'>Life Insurance Claims</p>
<br/>
<aside style={{letterSpacing:"1px"}}>Mon.-Fri. 5am-8pm </aside>
<br/>
<aside style={{letterSpacing:"1px"}}>Sat. 6am-1pm</aside>
<br/>
<aside className='underline text-lg'>Call 800-922-8198</aside>
              
                </div>
                
            </section>
</div>

        <Footer/>
        <Navigation/>
    </div>
    </>
  )
}

export default page