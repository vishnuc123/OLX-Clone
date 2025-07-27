import React from 'react'

const CategoryNav = () => {
    return (
        <div className='w-full mx-auto bg-white mt-1 shadow-md'>
            <nav className='mx-auto '>
                <ul className='flex justify-center p-2 space-x-5 '>
                    <li className='font-bold'>ALL CATEGORIES</li>
                    <div className='flex relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-0' width="20" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
                    </div>
                    <li className='text-[15px]'>Cars</li>
                    <li className='text-[15px]'>Motorcycles</li>
                    <li className='text-[15px]'>Mobile Phones</li>
                    <li className='text-[15px]'>For Sale: Houses & Apartments</li>
                    <li className='text-[15px]'>Scooters</li>
                    <li className='text-[15px]'>Commercial & Other Vehicles</li>
                    <li className='text-[15px]'>For Rent: Houses & Apartments</li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryNav
