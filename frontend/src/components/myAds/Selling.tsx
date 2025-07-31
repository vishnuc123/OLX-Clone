import React from 'react'

const Selling = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col items-center justify-center py-12 px-4">
  <img
    src="https://statics.olx.in/external/base/img//no-publications.webp"
    alt="no listings"
    className="w-48 h-48 mb-6"
  />
  <h2 className="text-lg font-semibold text-gray-800 mb-1">
    You haven't listed anything yet
  </h2>
  <p className="text-sm text-gray-400 font-semibold">
    Let go of what you 
  </p>
  <p className="text-sm text-gray-400 font-semibold mb-6">
    don't use anymore
  </p>

  <div className='max-w-2xl h-10'>
  <button className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded hover:border-4 transition font-bold">
    start selling
  </button>

  </div>
</div>
    )
}

export default Selling
