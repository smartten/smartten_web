import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";
import './style.css';

import background from '../../../img/bg2.jpg'
import cl1Img from '../../../img/cl1.jpg'
import cl2Img from '../../../img/cl2.jpg'
import cl3Img from '../../../img/cl3.jpg'
export default function FeedBack() {
  return (
    <div className="fb">
        
        <div className="fb-say" style={{ backgroundImage: `url(${background})` }}>
                <div className="fb-titl">
                    <h1>Our Clients Say</h1>
                </div>

                <div className="fb-des">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      
                      pagination={true}
                      modules={[Pagination,Navigation]}
                      className="mySwiper"
                    >


                  <SwiperSlide>
                      <div className="fb-swiper">
                            <img className="cl-img" src={cl1Img}></img>
                            <div>
                              <h1>VolanSoft is a truly professional company. They have helped our company get to a new level of service excellence!</h1>
                            </div>
                            
                            <div>
                              <p className="fname">Mr. Ashish Somani</p>
                              <p className="fdesc">CEO, Somani Threads</p>
                            </div>
                        
                            
                        
                      </div>

                      
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="fb-swiper">
                            <img className="cl-img" src={cl2Img}></img>
                            <div>
                              <h1>VolanSoft came in and saved the day! They are very easy to work with, and very understanding of changes as the project moved along.</h1>
                            </div>
                            
                            <div>
                              <p className="fname">Mr. Olaoluwa Izuchi</p>
                              <p className="fdesc">Founder, Diadal Nigeria LTD</p>
                            </div>
                        
                            
                        
                      </div>

                      
                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="fb-swiper">
                            <img className="cl-img" src={cl3Img}></img>
                            <div>
                              <h1>Flexibility and on-time delivery. VolanSoft team has strong technical experience and execution capabilities.</h1>
                            </div>
                            
                            <div>
                              <p className="fname">Mr. Pankaj Marothiya</p>
                              <p className="fdesc">Founder, Centreum</p>
                            </div>
                        
                            
                        
                      </div>

                      
                  </SwiperSlide>

                  
              </Swiper>
                    

                    
                </div>


        </div>
        
    </div>
  )
}
