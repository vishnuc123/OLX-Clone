import React from 'react'
import ProductCard from './ProductCard'


const ProductGrid = () => {
    const dummy = [
  {
    "id": 1,
    "title": "Hero Splendor Plus 2022",
    "price": "₹55,000",
    "image": "https://images.unsplash.com/photo-1602331973413-10f04992f3ff?auto=format&fit=crop&w=600&q=60",
    "location": "Mumbai",
    "date": "1 day ago"
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S21 Ultra",
    "price": "₹48,000",
    "image": "https://images.unsplash.com/photo-1611250339670-07a636ae0b9c?auto=format&fit=crop&w=600&q=60",
    "location": "Delhi",
    "date": "Today"
  },
  {
    "id": 3,
    "title": "Maruti Suzuki Swift 2019",
    "price": "₹4,80,000",
    "image": "https://images.unsplash.com/photo-1621774703419-0f9c9c3fae0f?auto=format&fit=crop&w=600&q=60",
    "location": "Chennai",
    "date": "3 days ago"
  },
  {
    "id": 4,
    "title": "Apple MacBook Air M2",
    "price": "₹85,000",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=60",
    "location": "Bangalore",
    "date": "2 days ago"
  },
  {
    "id": 5,
    "title": "Canon EOS 1500D DSLR",
    "price": "₹27,000",
    "image": "https://images.unsplash.com/photo-1519183071298-a2962d0488d4?auto=format&fit=crop&w=600&q=60",
    "location": "Hyderabad",
    "date": "4 hours ago"
  },
  {
    "id": 6,
    "title": "iPhone 13 Mini - Red",
    "price": "₹56,000",
    "image": "https://images.unsplash.com/photo-1631019927031-f64c9e53f29c?auto=format&fit=crop&w=600&q=60",
    "location": "Pune",
    "date": "5 hours ago"
  },
  {
    "id": 7,
    "title": "Tata Nexon EV",
    "price": "₹13,50,000",
    "image": "https://images.unsplash.com/photo-1670925299413-6d7a1a6e9d67?auto=format&fit=crop&w=600&q=60",
    "location": "Kochi",
    "date": "1 week ago"
  },
  {
    "id": 8,
    "title": "Sony WH-1000XM4 Headphones",
    "price": "₹18,000",
    "image": "https://images.unsplash.com/photo-1617450365226-b3f3c00ef49b?auto=format&fit=crop&w=600&q=60",
    "location": "Ahmedabad",
    "date": "Yesterday"
  }
]

    return (
        <div className="w-full grid grid-cols-4 gap-4">
            {dummy.map((item,index) => (
                <div><ProductCard item={item}/></div>
            ))}
            {/* <div><ProductCard /></div> */}
        </div>
    )
}

export default ProductGrid
