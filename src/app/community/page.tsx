"use client"
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Navigation from '@/components/navigation'

import React, { useEffect, useRef } from 'react'

const page = () => {


    const elementsRef = useRef<(HTMLElement | null)[]>([]);

//  // Intersection Observer for fade-in effect
//  useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100', 'translate-y-0');
//             observer.unobserve(entry.target); // Unobserve after first intersection
//           }
//         });
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is visible
//     );

//     elementsRef.current.forEach((el) => {
//       if (el) {
//         observer.observe(el);
//       }
//     });

//     return () => {
//       elementsRef.current.forEach((el) => el && observer.unobserve(el));
//     };
//   }, []);
  return (
    <>
    <Sidebar/>
    <div className="bg-gray-50">
        <Topbar/>
   {/* Header Section */}
   <header className="bg-cover bg-center bg-purple-600 text-white py-16" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?vacation,travel')" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to TravelEase</h1>
          <p className="text-xl md:text-2xl">Where every journey begins with the perfect experience.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Us Section */}
        <section
          className="mb-16  transform translate-y-10 transition-opacity duration-1000 ease-out transition-transform"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 underline-gradient">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto mt-8 text-gray-600 text-lg md:text-xl text-center">
            <p>
              At <strong>TravelEase</strong>, we are dedicated to crafting unforgettable journeys for travelers worldwide. Whether you're seeking adventure, relaxation, or cultural immersion, our team is committed to making your travel dreams a reality.
            </p>
          </div>
        </section>

        {/* Our Community Section */}
        <section
          className="mb-16  transform translate-y-10 transition-opacity duration-1000 ease-out transition-transform"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 underline-gradient">
            Our Community
          </h2>
          <div className="max-w-4xl mx-auto mt-8 text-gray-600 text-lg md:text-xl text-center">
            <p>
            Our community is built on a love for exploring the world, bringing together travelers to inspire and share experiences.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section
          className="mb-16  transform translate-y-10 transition-opacity duration-1000 ease-out transition-transform"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 underline-gradient">
            What We Offer
          </h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 text-white text-lg md:text-xl">
            <div className="bg-purple-800 shadow-lg rounded-lg p-8 text-center">
             
              <h3 className="text-2xl font-semibold mb-2">Luxury Retreats</h3>
              <p>Indulge in world-class accommodations and exclusive experiences with our luxury travel packages.</p>
            </div>
            <div className="bg-purple-800 shadow-lg rounded-lg p-8 text-center">
             
              <h3 className="text-2xl font-semibold mb-2">Adventure Tours</h3>
              <p>For thrill-seekers, our adventure tours offer everything from hiking expeditions to water sports.</p>
            </div>
            <div className="bg-purple-800 shadow-lg rounded-lg p-8 text-center">
        
              <h3 className="text-2xl font-semibold mb-2">Cultural Immersions</h3>
              <p>Experience the richness of different cultures through our curated cultural immersion trips.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="text-center mb-16  transform translate-y-10 transition-opacity duration-1000 ease-out transition-transform"
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
        >
          <h3 className="text-3xl font-bold text-gray-800 underline-gradient">Join the Journey</h3>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Explore the world with us and create memories that last a lifetime.
          </p>
          <a
            href="/explore"
            className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300"
          >
            Start Your Adventure
          </a>
        </section>
      </main>

  <Footer/>
  <Navigation/>
    </div>
    </>
  )
}

export default page