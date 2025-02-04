import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';

const Slides = () => {
  const images = ['/images/image-slides/image-1.png','/images/image-slides/image-2.png','/images/image-slides/image-3.png','/images/image-slides/image-4.png',
    '/images/image-slides/image-5.png','/images/image-slides/image-6.png',
  ]
  const [activeIndex,setActiveIndex] = useState(0)

  const getActiveIndex = (event) => {
    setActiveIndex(event.realIndex);
  }

  return (
    <>
    <div className="swiper-container">
      <Swiper slidesPerView={3} spaceBetween={120} grabCursor={true} centeredSlides={true} className="image-swiper"  
        onSlideChange={(event)=>getActiveIndex(event)}>
        {images.map((element, index) => (
          <SwiperSlide key={index} className={`swiper-slide ${index === activeIndex ? '' : activeIndex > index ? 'left-slide' : 'right-slide'}`}>
            <img src={element}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className='client-details text-center mb-7'>
      <h1 className='text-4xl h-13'>Client 1</h1>
      <p className='text-2xl text-[#7A7777] h-9'>Dubai, United Arab Emirates</p>
    </div>
    </>
  );
};

export default Slides;
