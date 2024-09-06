"use client"
import React from 'react'
import {  useShow } from '@/context/context'

const Sidebar = () => {
    
    
    const {show} = useShow();

    

  return (
    <div className={` bg-black text-white h-screen p-4  ${show?"block":'hidden'}`}>
    <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
    <ul>
      <li className="mb-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-700">Element 1</a>
        <ul className="ml-4 mt-2">
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-600">Sub-element 1.1</a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-600">Sub-element 1.2</a>
          </li>
        </ul>
      </li>
      <li className="mb-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-700">Element 2</a>
        <ul className="ml-4 mt-2">
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-600">Sub-element 2.1</a>
          </li>
          <li>
            <a href="#" className="block p-2 rounded hover:bg-gray-600">Sub-element 2.2</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" className="block p-2 rounded hover:bg-gray-700">Element 3</a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar