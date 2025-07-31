import React, { useEffect, useState } from 'react'
import logo from '/navbar/logo-final.png'
import LoginModal from '../Modals/LoginModal'
import { useAuth } from '../../contexts/UserAuth'
import { PiChatCircle } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const [inputPlaceHolder, setInputPlaceHolder] = useState("")
  const Values = ["Jobs", "Cars", "Properties", "Mobiles", "Bikes"]
  const [index, setindex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { userDetails } = useAuth()

  console.log("photoURL", userDetails?.photoURL);

  const handleClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setInputPlaceHolder(Values[index])
      setindex((prev) => (prev + 1) % Values.length)
    }, 2000);

    return () => clearInterval(interval)
  },)


  return (
    <div className='w-full mx-auto sticky'>
      <div className='w-max-7xl bg-slate-100 mx-auto flex'>
        {/* logo */}
        <img src={logo} alt="" className='w-25 h-18 object-fit' />

        {/* Location */}
        <div className='flex justify-center items-center relative'>
          <input type="text" className='w-50 h-10 border-2 rounded-md border-black bg-white' />
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-2' width="16" height="16" viewBox="0 0 32 32"><path d="M21.15 19.74a12 12 0 1 0-1.41 1.41l10.55 10.56 1.41-1.41zM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" data-name="49-Search" /></svg>
          <h2 className='left-10 absolute'>India</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-2' width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
        </div>

        {/* search */}
        <div className='flex items-center relative'>

          <input type="text" className='w-[800px] h-10 ml-5 border-2 rounded-md border-black bg-white font-serif' placeholder={`  Search  "${inputPlaceHolder}"`} />
          <div className="absolute right-0 w-10 h-10 bg-black rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-5 h-5"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M21.15 19.74a12 12 0 1 0-1.41 1.41l10.55 10.56 1.41-1.41zM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
            </svg>
          </div>

        </div>

        {/* language */}
        <div className='flex items-center ml-5 w-24 relative'>
          <h1 className='font-bold'>ENGLISH</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-0' width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>

        </div>

        {/* heart */}
        <div className='flex items-center w-10 ml-2'>
          <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"><path d="M84.828 33.794a24.55 24.55 0 0 0-4.813-.474A29.792 29.792 0 0 0 64 38.369a29.789 29.789 0 0 0-16.015-5.049 24.55 24.55 0 0 0-4.813.474 15.966 15.966 0 0 0-11.648 10.213c-3.241 8.2-1.281 18.544 5.241 27.674C48.311 87.844 62.55 94.237 63.15 94.5a2.1 2.1 0 0 0 1.7 0c.6-.264 14.839-6.657 26.385-22.819 6.522-9.131 8.481-19.478 5.24-27.674a15.966 15.966 0 0 0-11.647-10.213zM87.8 69.228A69.657 69.657 0 0 1 64 90.223a69.387 69.387 0 0 1-23.8-20.995c-5.687-7.962-7.462-16.81-4.751-23.669A11.821 11.821 0 0 1 44 37.934a20.409 20.409 0 0 1 3.984-.392 25.983 25.983 0 0 1 14.684 5.065 2.108 2.108 0 0 0 2.662 0 25.745 25.745 0 0 1 14.684-5.065 20.409 20.409 0 0 1 3.986.392 11.821 11.821 0 0 1 8.55 7.626c2.71 6.858.935 15.706-4.75 23.668z" /></svg>
        </div>



        {/* login and sell */}
        <div className=' w-40 h-18 ml-6 pl-5 flex justify-center items-center'>
          {userDetails ? (
            <>
              <div className='flex items-center m-2 text-2xl'>
                <PiChatCircle />
              </div>
              <div className='flex items-center m-2 text-2xl'>
                <MdOutlineNotificationsNone />
              </div>

              {/* Avatar click toggles dropdown */}
         
                <img
                  src={userDetails.photoURL || "/default-avatar.png"}
                  // alt={userDetails.displayName || "User Avatar"}
                  className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 top-12 w-80 bg-white shadow-2xl rounded-lg z-50 border overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4">
                      
                        {userDetails.photoURL ? (
                          <img
                            src={userDetails.photoURL || "/default-avatar.png"}
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <FaRegUserCircle />
                        )}
                
                      <div>
                        <p className="font-semibold text-gray-800">
                          {userDetails.displayName || "Wtf Iconic"}
                        </p>
                      </div>
                    </div>
                    <div className='w-full h-15 justify-center flex'>
                        <button className="w-full mt-1 m-4 text-sm text-white bg-blue-900 px-3 py-1 rounded hover:bg-blue-900">
                          View and edit profile
                        </button>

                    </div>

                    {/* Progress Bar */}
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold mb-1 text-gray-700">2 steps left</p>
                      <div className="flex gap-1 mb-1">
                        <div className="w-1/6 h-2 bg-yellow-400 rounded"></div>
                        <div className="w-1/6 h-2 bg-yellow-400 rounded"></div>
                        <div className="w-1/6 h-2 bg-yellow-400 rounded"></div>
                        <div className="w-1/6 h-2 bg-gray-200 rounded"></div>
                        <div className="w-1/6 h-2 bg-gray-200 rounded"></div>
                        <div className="w-1/6 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <p className="text-xs text-gray-500">
                        We are built on trust. Help one another to get to know each other better.
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="px-4 py-2 text-sm text-gray-800 space-y-3">
                      {[
                        ["My ADS", "📄"],
                        ["Buy Business Packages", "📦"],
                        ["View Cart", "🛒"],
                        ["Bought Packages & Billing", "🧾"],
                        ["Elite Packages for Buyers", "💳", "NEW"],
                        ["Help", "❓"],
                        ["Settings", "⚙️"],
                        ["Install OLX Lite app", "⬇️"],
                        ["Logout", "🚪"],
                      ].map(([label, icon, badge]) => (
                        <div
                          key={label}
                          className={`flex justify-between items-center px-2 py-2 rounded hover:bg-gray-100 cursor-pointer ${label === "Elite Packages for Buyers" ? "bg-blue-50" : ""
                            }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{icon}</span>
                            <span>{label}</span>
                          </div>
                          {badge && (
                            <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                              {badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              
            </>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="text-lg font-semibold underline cursor-pointer"
            >
              Login
            </button>
          )}


          {showModal && <LoginModal onClose={handleClose} />}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full font-bold transition group">
            {/* Outer colorful ring */}
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500">
              {/* Inner white circle with + icon */}
              <div className="bg-white w-7 h-7 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>

            {/* SELL text */}
            <span className="text-black group-hover:underline">SELL</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
