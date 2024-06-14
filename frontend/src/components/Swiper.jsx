import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Donate_card from "./Donate_card.jsx"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';


import {Autoplay, EffectCoverflow } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
        <SwiperSlide>
        <Donate_card/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
