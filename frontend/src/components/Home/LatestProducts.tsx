import React from 'react'
import ProductGrid from './ProductGrid'
import Banner from './Banner'

const LatestProducts = () => {
    return (
        <div className='w-full'>

            <div className='w-full flex justify-center'>
                <div className='bg-white w-[80vw] flex justify-start px-5'>
                    <h1 className='text-2xl font-semibold'>Fresh recommendations</h1>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='bg-white w-[75vw] flex justify-start m-5'>
                    <ProductGrid />
                </div>
            </div>
            <div className='flex w-full h-25 justify-center items-center'><button className='border-2 rounded-md border-blue-900 p-3 font-bold text-blue-900'>Load more</button></div>
            <div className='w-full flex justify-center'>
                <div className='bg-white w-[80vw] flex justify-start px-5'>
                    <Banner />
                </div>
            </div>
        </div>
    )
}

export default LatestProducts
