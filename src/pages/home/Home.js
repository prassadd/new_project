import React from 'react'
import './home.css'
import Products from './product-section/Products.js'
import Slides from './image-slides/Slides.js'
import Carousal from './carousal/Carousal.js'
const Home = () => {
  return (
    <>
    <Carousal/>
    <Products/>
    <Slides/>
  </>
  )
}

export default Home
