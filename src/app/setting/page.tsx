"use client"
import React, { useState} from "react";

const page = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
      const openModal = () => {
        setIsModalVisible(true);
      };
    
      const closeModal = () => {
        setIsModalVisible(false);
      };
  return (
    <div className='p-4 bg-purple-800'>

  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">


    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Profile Management</h2>
      <div className="flex items-center space-x-6">
     
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  </div>  
        <div>
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-gray-600">Phone: (555) 555-5555</p>
          <p className="text-gray-600">Email: john.doe@example.com</p>
        </div>
      </div>
     
      <button onClick={openModal} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800">Edit Profile</button>
    </div>

   
    {/* Modal */}
    {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
            
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            {/* Phone Number Input */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input type="tel" id="phone" className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <input type="text" id="address" className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button onClick={closeModal} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    <hr className="border-gray-300 my-6"/>

 
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
        <div className="flex justify-between items-center">
          <span>Push Notifications</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
        <div className="flex justify-between items-center">
          <span>SMS Notifications</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
      </div>
    </div>

    <hr className="border-gray-300 my-6"/>

   
    <div>
      <h2 className="text-2xl font-semibold mb-4">App Settings</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
        <div className="flex justify-between items-center">
          <span>Location Access</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
        <div className="flex justify-between items-center">
          <span>Auto Update</span>
          <input type="checkbox" className="toggle-checkbox"/>
        </div>
      </div>
    </div>

  </div>

    </div>
  )
}

export default page