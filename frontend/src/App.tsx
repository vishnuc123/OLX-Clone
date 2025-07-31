import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyAds from './pages/MyAds'
import SelectCategory from './pages/selectCategory'
import PostAd from './pages/PostAd'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/myads' element={<MyAds />} /> 
        <Route path='/selectCategory' element={<SelectCategory />} /> 
        <Route path='/addAds/:category' element={<PostAd />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
