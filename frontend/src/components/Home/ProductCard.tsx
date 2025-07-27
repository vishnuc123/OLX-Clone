import React from 'react'

type Product = {
  id: number;
  title: string;
  price: string;
  location: string;
  date: string;
  image: string;
};

const ProductCard = ({item}:{item:Product}) => {
    return (
        <div className='w-full'>
            <div className="w-full border rounded overflow-hidden hover:shadow-md transition p-2">
                <img src={item.image} alt="product" className="w-full h-40 object-cover" />
                <p className="text-lg font-bold text-green-600">₹{item.price}</p>
                <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
                <div className="text-xs text-gray-500 mt-1">{item.location}</div>
            </div>
        </div>
    )
}

export default ProductCard
