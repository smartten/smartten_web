import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faLocationDot, faEnvelopeOpenText, faSquarePhoneFlip, faLayerGroup, faGem, faCalendar, faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitterSquare, faTelegram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'


import background from '../../../img/bg1.jpg'
import bl1Img from '../../../img/bl1.jpg';
import bl2Img from '../../../img/bl2.png';
import bl3Img from '../../../img/bl3.png';
import bl4Img from '../../../img/bl4.jpg';
import bl5Img from '../../../img/bl5.jpg';

// import background from '../../../img/bl1.jpg'
// import background from '../../../img/bl2.png'
// import background from '../../../img/bl3.png'
// import background from '../../../img/bl4.jpg'
// import background from '../../../img/bl5.jpg'

import './style.css'

export default function Blog() {
  return (
    

      <div className="blog-container" style={{ backgroundImage: `url(${background})` }} >
        <div className="blog-titl">
          <h1 className="blog-titl-b">Latest Blogs, News And Insights</h1>
        </div>

        <div className="blog-desc">
          <div className="blog-desc-one">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >

              <SwiperSlide>
                <div className="blog-swiper">
                  <a href="https://github.com/">
                    <img className="img1" src={bl1Img}></img>
                    <ul className="blog-ic">
                      <li> <i><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></i>  17 Feb 2020</li>
                      <li> <i><FontAwesomeIcon icon={faPersonCircleCheck}></FontAwesomeIcon></i>  Admin</li>
                    </ul>
                      
                  </a>
                  <div>
                      <span>Reason to Outsource Web Development Projects</span>
                      <p>In today’s online marketing world, owning a website is very crucial for success of any business. a website meets with multiple...  </p>
                      <button className="blog-bt"><a>Read more</a></button>
                  </div>
									
                </div>

                <div>

                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-swiper">
                  <a href="https://github.com/">
                    <img className="img1" src={bl2Img}></img>
                    <ul className="blog-ic">
                      <li> <i><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></i> 17 Feb 2020</li>
                      <li> <i><FontAwesomeIcon icon={faPersonCircleCheck}></FontAwesomeIcon></i> Admin</li>
                    </ul>
                    <span>The BI Trends in 2020</span>
                  </a>
                  <p>The 20-10s have been a decade of extraordinary digital evolution. At the beginning of the decade, the internet was still not penetrated...  </p>
                  <button><a>Read more</a></button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-swiper">
                  <a>
                    <img className="img1" src={bl3Img}></img>
                    <ul className="blog-ic">
                      <li> <i><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></i>  17 Feb 2020</li>
                      <li> <i><FontAwesomeIcon icon={faPersonCircleCheck}></FontAwesomeIcon></i>  Admin</li>
                    </ul>
                    <span>Top Reasons to Choose Offshore App Developers</span>
                  </a>
                  <p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development...  </p>
                  <button><a>Read more</a></button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-swiper">
                  <a>
                    <img className="img1" src={bl4Img}></img>
                    <ul className="blog-ic">
                      <li> <i><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></i>  17 Feb 2020</li>
                      <li> <i><FontAwesomeIcon icon={faPersonCircleCheck}></FontAwesomeIcon></i>  Admin</li>
                    </ul>
                    <span>Various Challenges Faced by the Developers while Making of Wearable Apps</span>
                  </a>
                  <p>In the present scenario, the app development market is growing at fast pace and developers are continuously looking for...  </p>
                  <button><a>Read more</a></button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-swiper">
                  <a>
                    <img className="img1" src={bl5Img}></img>
                    <ul className="blog-ic">
                      <li> <i><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></i>  17 Feb 2020</li>
                      <li> <i><FontAwesomeIcon icon={faPersonCircleCheck}></FontAwesomeIcon></i>  Admin</li>
                    </ul>
                    <span>Various Challenges Faced by the Developers while Making of Wearable Apps</span>
                  </a>
                  <p>In the present scenario, the app development market is growing at fast pace and developers are continuously looking for...   </p>
                  <button><a>Read more</a></button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-swiper">
                    <h1>STAY UPDATED</h1>
                    <p>Subscribe now to get the latest tech updates and modification all wrapped up in our Newsletter.</p>
                    <div>
                      <form className="form-blog" >   
                          <input className="blog-input" placeholder="Your Name" type="text" id="fname" name="fname"/><br></br>
                          <input className="blog-input" placeholder="Your Email" type="text" id="lname" name="lname"/><br></br>
                          <input type="submit" value="Subscribe"/>
                      </form>
                    </div>

                    <p><a>View All Blogs</a></p>
                  
                </div>
              </SwiperSlide>

            </Swiper>


          </div>
        </div>
      </div>

    
  )
}
