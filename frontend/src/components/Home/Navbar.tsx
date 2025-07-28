import React from 'react'
import logo from '/navbar/logo-final.png'
import heart from '/navbar/heart.png'

const Navbar = () => {
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

          <input type="text" className='w-[800px] h-10 ml-5 border-2 rounded-md border-black bg-white font-serif' placeholder='  Search "cars"' />
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
        <div className='flex items-center w-12 ml-5'>
          <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"><path d="M84.828 33.794a24.55 24.55 0 0 0-4.813-.474A29.792 29.792 0 0 0 64 38.369a29.789 29.789 0 0 0-16.015-5.049 24.55 24.55 0 0 0-4.813.474 15.966 15.966 0 0 0-11.648 10.213c-3.241 8.2-1.281 18.544 5.241 27.674C48.311 87.844 62.55 94.237 63.15 94.5a2.1 2.1 0 0 0 1.7 0c.6-.264 14.839-6.657 26.385-22.819 6.522-9.131 8.481-19.478 5.24-27.674a15.966 15.966 0 0 0-11.647-10.213zM87.8 69.228A69.657 69.657 0 0 1 64 90.223a69.387 69.387 0 0 1-23.8-20.995c-5.687-7.962-7.462-16.81-4.751-23.669A11.821 11.821 0 0 1 44 37.934a20.409 20.409 0 0 1 3.984-.392 25.983 25.983 0 0 1 14.684 5.065 2.108 2.108 0 0 0 2.662 0 25.745 25.745 0 0 1 14.684-5.065 20.409 20.409 0 0 1 3.986.392 11.821 11.821 0 0 1 8.55 7.626c2.71 6.858.935 15.706-4.75 23.668z" /></svg>
        </div>

        {/* login and sell */}
        <div className=' w-25 h-18 ml-6 pl-5 flex justify-center items-center'>
          <h1 className='text-lg font-semibold underline pl-5 ml-5'>Login</h1>
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
