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
    <Topbar/>
    <div className="bg-gray-100 min-h-screen py-10">
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-700">
        Welcome to our vacation website. We are committed to protecting your
        privacy and ensuring that your personal information is handled in a
        safe and responsible manner. This policy outlines how we collect,
        use, and safeguard your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-gray-700">
        We collect personal information that you voluntarily provide to us
        when you register on the website, express an interest in obtaining
        information about us or our products and services, or otherwise
        contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-700">
        We use personal information collected via our website for a variety of
        business purposes described below. We process your personal
        information for these purposes in reliance on our legitimate business
        interests.
      </p>

      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>To provide services to you.</li>
        <li>To respond to your inquiries and offer customer support.</li>
        <li>To send administrative information to you.</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
        3. Sharing Your Information
      </h2>
      <p className="mb-4 text-gray-700">
        We do not share, sell, rent, or trade your information with third
        parties for their promotional purposes. However, we may process your
        data if we need to do so to comply with applicable laws and
        regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
        4. Data Security
      </h2>
      <p className="mb-4 text-gray-700">
        We have implemented appropriate technical and organizational security
        measures designed to protect the security of any personal information
        we process. However, please also remember that we cannot guarantee
        that the internet itself is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
        5. Contact Us
      </h2>
      <p className="mb-4 text-gray-700">
        If you have any questions or comments about this policy, you may
        contact us at:
      </p>
      <p className="font-semibold text-gray-800">
        Email: support@vacationwebsite.com
      </p>
    </div>
  </div>
  <Footer/>
  <Navigation/>
  </>
  )
}

export default page