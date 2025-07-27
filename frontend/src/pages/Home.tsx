import React from 'react'
import Navbar from '../components/Home/Navbar'
import CategoryNav from '../components/Home/CategoryNav'
import Banner from '../components/Home/Banner'
import AdCenter from '../components/Home/AdCenter'
import LatestProducts from '../components/Home/LatestProducts'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CategoryNav />
            <Banner />
            <AdCenter />
            <LatestProducts />
        </div>
    )
}

export default Home
