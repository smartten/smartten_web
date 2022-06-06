import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper";


function TestimonialRow() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-info-list">
          <Swiper
            loop={true}
						loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="col-md-10 col-sm-12 col-12 mx-auto "  >
							<div className="testimonial-info">
								<span>
									<span>
										<span>
											<p>VolanSoft is a truly professional company. They have helped our company get to a new level of service excellence!</p>
											<div className="test-info">
												<h6>Mr. Ashish Somani</h6>
												<h5>CEO, Somani Threads</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div className="client-info">
								<div className="test-img">
									<img src={require('../../../assets/images/2838300179404018920.jpeg')} alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-10 col-sm-12 col-12 mx-auto "  >
							<div className="testimonial-info">
								<span>
									<span>
										<span>
											<p>Flexibility and on-time delivery. VolanSoft team has strong technical experience and execution capabilities.</p>
											<div className="test-info">
												<h6>Mr. Pankaj Marothiya</h6>
												<h5>Founder, Centreum</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div className="client-info">
								<div className="test-img">
									<img src={require('../../../assets/images/744424326671857993.jpeg')} alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-10 col-sm-12 col-12 mx-auto "  >
							<div className="testimonial-info">
								<span>
									<span>
										<span>
											<p>VolanSoft came in and saved the day! They are very easy to work with, and very understanding of changes as the project moved along.</p>
											<div className="test-info">
												<h6>Mr. Olaoluwa Izuchi</h6>
												<h5>Founder, Diadal Nigeria LTD</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div className="client-info">
								<div className="test-img">
									<img src={require('../../../assets/images/2962449642090560181.jpeg')} alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TestimonialRow