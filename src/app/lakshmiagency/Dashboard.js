'use client'
import { useState } from "react";

export function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <>
      <div className="lg:mx-8 mx-3 lg:mt-7 mt-4">
        <div className="flex justify-between">
          <h1 className="text-black text-2xl font-bold">Statics</h1>
         
          <div className="mr-0">
          <div className="relative">
            <button
                    onClick={toggleDropdown}
                    className="px-4 py-2  text-[#004b71] bg-[#e5eef1]   rounded-md focus:outline-none flex font-semibold">
                    Last 30 days <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Option 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Option 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              Option 3
            </a>
          </li>
        </ul>
      )}
    </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
