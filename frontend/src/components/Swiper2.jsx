import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Donate_card from "./Donate_card.jsx"
import Card from "./Card.jsx"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay,Grid} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay,Grid]}
        className="mySwiper"
      >
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
        <SwiperSlide><Donate_card/></SwiperSlide>
      </Swiper>
    </>
  );
}
