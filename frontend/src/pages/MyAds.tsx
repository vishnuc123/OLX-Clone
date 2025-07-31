import React from 'react'
import Navbar from '../components/Home/Navbar'
import CategoryNav from '../components/Home/CategoryNav'
import Footer from '../components/Home/Footer'
import Selling from '../components/myAds/Selling'

const MyAds = () => {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Selling />
      <Footer />
    </div>
  )
}

export default MyAds
