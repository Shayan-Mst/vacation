"use client"
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Navigation from '@/components/navigation';
import React, { useState } from 'react'

const page = () => {

    const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const toggleDetails = () => setShowDetails(!showDetails);
  const toggleDeparture = () => setShowDeparture(!showDeparture);

 
  return (
    <>

    <Sidebar/>
    <Topbar/>
    
    <div className="bg-gray-100 flex sm:m-2 flex-col items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-purple-600">Find Your Next Vacation</h1>
          
          {/* Destination Section */}
          <div className="relative">
            <div
              onClick={toggleExpand}
              className={`cursor-pointer transition-all duration-300 ease-in-out bg-purple-500 text-white p-4 rounded-lg ${expanded ? 'h-24' : 'h-14'}`}
            >
              <h2 className="text-xl font-semibold">Destination</h2>
              {expanded && (
                <>
                  <p className="mt-2">Choose your dream destination from our curated list of amazing places to visit!</p>
                 
                </>
              )}
              
            </div>
            <input
                    
                    type="text"
                    placeholder="Search for a destination..."
                    className="w-full  p-3 border border-gray-300 rounded-lg shadow-sm mt-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
          </div>

          {/* Departure Section */}
          <div className="mt-6">
            <button
              onClick={toggleDeparture}
              className="w-full text-left  p-4 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Departure
            </button>
            {showDeparture && (
              <input
                type="date"
                placeholder='mm/dd/yy'
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mt-2"
              />
            )}
          </div>

          {/* Travellers Section */}
          <div className="mt-6">
            <button
              onClick={toggleDetails}
              className="w-full text-left p-4 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Travellers
            </button>
            {showDetails && (
              <input
                type="number"
                min="1"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mt-2"
                placeholder="Number of travellers"
              />
            )}
          </div>

          {/* Find Packages Button */}
          <div className="mt-6">
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Find Packages
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <Footer/>
    <Navigation/>
    </>
  )
}

export default page