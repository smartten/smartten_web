import React from 'react'
import './style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import ic1Img from '../../../img/ic1.png';
import ic2Img from '../../../img/ic2.png';
import ic3Img from '../../../img/ic3.png';
import ic4Img from '../../../img/ic4.png';
import ic5Img from '../../../img/ic5.png';

import ic6Img from '../../../img/ic6.png';
import ic7Img from '../../../img/ic7.png';
import ic8Img from '../../../img/ic8.png';
import ic9Img from '../../../img/ic9.png';
import ic10Img from '../../../img/ic10.png';

import ic11Img from '../../../img/ic11.png';
import ic12Img from '../../../img/ic12.png';
import ic13Img from '../../../img/ic13.png';
import ic14Img from '../../../img/ic14.png';
import ic15Img from '../../../img/ic15.png';

import ic16Img from '../../../img/ic16.png';
import ic17Img from '../../../img/ic17.png';
import ic18Img from '../../../img/ic18.png';
import ic19Img from '../../../img/ic19.png';
import ic20Img from '../../../img/ic19.png';



export default function Client() {
  return (
    <div>

      <div className="client">
        <div className="client-titl">
          <h1>Our Client</h1>
          <p>We love our clients and the feeling is mutual.</p>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          loopFillGroupWithBlank={true}
      
          
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className="client-swiper">
              <a href="https://github.com/">
                <img className="img-icon" src={ic1Img}></img>

              </a>

            </div>

            <div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-swiper">
              <a href="https://github.com/">
                <img className="img-icon" src={ic2Img}></img>

              </a>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic3Img}></img>

              </a>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic4Img}></img>

              </a>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic5Img}></img>

              </a>

            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic6Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic7Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic8Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic9Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic10Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic11Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic12Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic13Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic14Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic15Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic16Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic17Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic18Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic19Img}></img>

              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="client-swiper">
              <a>
                <img className="img-icon" src={ic20Img}></img>

              </a>
            </div>
          </SwiperSlide>


        </Swiper>
        </div>
  




    </div>
  )
}
