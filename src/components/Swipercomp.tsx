"use client"

import { Pagination , Navigation } from 'swiper/modules'
import { useEffect } from 'react'
const   Swipercomp = () => {

    useEffect(() => {
       
          const Swiper = require('swiper').default;
          Swiper.use([Navigation, Pagination]);
    
          const swiperInstance = new Swiper('.multiple-slide-carousel', {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
              1920: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              990: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            },
          });
    
          return () => {
            swiperInstance.destroy(); // optional: clean up on unmount
          };
        
      }, []);
    
return(<>
</>)
}
export default Swipercomp