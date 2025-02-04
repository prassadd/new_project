import React,{ useEffect, useState } from 'react'
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './carousal.css'
const Carousal = () => {
    const images = ['/images/hero-image.png','/images/bg-image-1.png','/images/bg-image-2.webp']
    const [activeSlide,setActiveSlide] = useState(0)
    const [previewSlide,setPreviewSlide] = useState(activeSlide+1)

    useEffect(()=>{
        if(activeSlide >= images.length-1){
            setPreviewSlide(0)
        }else{
            setPreviewSlide(activeSlide+1)
        }
    },[activeSlide])

  return (
    <section className="hero-section">
        <Swiper className='carousal' slidesPerView={1} autoplay={{delay:3000}} allowTouchMove={false} modules={[Autoplay]}>
            {images.map((element,index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className='image-div'  style={{backgroundImage:`url(${images[activeSlide]}`}}></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        <div className='image-container flex'>
            <Swiper className='image-preview' slidesPerView={1} autoplay={{delay:3000}} onSlideChange={(event)=>setActiveSlide(event.realIndex)}
                allowTouchMove={false} modules={[Autoplay]}>
                {images.map((element,index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className='image-prev'  style={{backgroundImage:`url(${images[previewSlide]}`}}  
                            onClick={() => setActiveSlide(previewSlide)}></div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className='flex gap-2 items-center text-white z-[10]'> 
                <span>{`0${activeSlide+1}`}</span><hr className='w-16' style={{border: "1px solid #fff"}}/><span>{`0${images.length}`}</span>
            </div>
        </div>
        <div className='hero-text'>
            <p style={{lineHeight:'24px'}}>Welcome To TenTwenty Farms</p>
            <h1 style={{lineHeight:'64px'}}>From our Farms<br/> to your hands</h1>
        </div>
  </section>
  )
}

export default Carousal
