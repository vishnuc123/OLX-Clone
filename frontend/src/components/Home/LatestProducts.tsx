import React from 'react'
import ProductGrid from './ProductGrid'

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

        </div>
    )
}

export default LatestProducts
