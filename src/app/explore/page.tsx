"use client"
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Navigation from '@/components/navigation';
import React from 'react'

const page = () => {
    const tourPackages = [
        {
          title: "Bali Adventure",
          image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80",
          price: "$999",
          description: "Explore the beauty of Bali with this 7-day tour package.",
        },
        {
          title: "Paris Getaway",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=80",
          price: "$1299",
          description: "Experience the romantic charm of Paris in this 5-day trip.",
        },
        {
          title: "Hawaii Paradise",
          image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1080&q=80",
          price: "$1499",
          description: "A 10-day journey to the scenic beaches of Hawaii.",
        },
        {
          title: "Santorini Escape",
          image: "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=1080&q=80",
          price: "$1399",
          description: "Discover the magical sunsets of Santorini with this 6-day package.",
        },
        {
          title: "Tokyo Exploration",
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&q=80",
          price: "$1599",
          description: "Explore the vibrant cityscape of Tokyo in a 7-day adventure.",
        },
      ];
      
      
      return (
        <>
        <Sidebar/>
        <Topbar/>
        <div>
        <div className="min-h-screen  py-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Search Bar Section */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-purple-600 mb-4">
                Explore Our Vacation Packages
              </h1>
              <p className="text-lg text-purple-800">
                Find your perfect getaway with our curated selection of tour packages.
              </p>
    
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Search Destination..."
                  className="w-full max-w-md px-4 py-2 rounded-lg border-2 border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
              </div>
            </div>
    
            {/* Tour Packages Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tourPackages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      {pkg.title}
                    </h2>
                    <p className="text-purple-600 font-bold text-lg mb-4">
                      {pkg.price}
                    </p>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
         
        </div>
        <Footer/>
        <Navigation/>
        </div>
     
       
        </>
      );
}

export default page