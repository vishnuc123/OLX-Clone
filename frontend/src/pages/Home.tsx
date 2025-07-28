import React from 'react'
import Navbar from '../components/Home/Navbar'
import CategoryNav from '../components/Home/CategoryNav'
import Banner from '../components/Home/Banner'
import AdCenter from '../components/Home/AdCenter'
import LatestProducts from '../components/Home/LatestProducts'
import DownloadPromotion from '../components/Home/DownloadPromotion'
import PromotedContent from '../components/Home/PromotedContent'
import Footer from '../components/Home/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CategoryNav />
            <Banner />
            <AdCenter w={'w-full'} h={'h-70'} />
            <LatestProducts />
            <AdCenter w={'w-full'} h={'h-25'} m={'p-5'} />
            <DownloadPromotion />
            <PromotedContent />
            <Footer />
        </div>
    )
}

export default Home
