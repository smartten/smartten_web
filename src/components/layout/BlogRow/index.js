import React from 'react'
import  Fade  from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";

function BlogRow({postsData, languages}) {
  return (
    <div>
        <div className="home-blog">
			<div className="container">
				<div className="home-blog-content">
					<Fade bottom>
						<h3 className="">Latest Blogs, News And Insights</h3>
					</Fade>
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							slidesPerGroup={1}
							loop={true}		
							modules={[ Navigation]}				
							navigation= {{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
								}}
							className="mySwiper"
							breakpoints={{
								786: {
									slidesPerView:2,
									slidesPerGroup:2,
								},
								1200:{
									slidesPerView:3,
									slidesPerGroup:3,
								}
							}}
						>
							{postsData.map((post,index) =>(
								<SwiperSlide key={index}>
									<div className="vs_blog_single">
										<div className="awesome-img ">
											<Link to={`/blog/post/${index}`}>
												<img src={post.image} alt="Blog" />
											</Link>
											<ul className=" post-detail-ul">
												<li><i className="fa fa-calendar"></i>{post.createdAt.slice(0,10)}</li>
												<li><i className="fa fa-user"></i> Admin</li>
											</ul>
										</div>
										<div className="project-dec ">
											<Link to={`/blog/post/${index}`}><h4>{post.lang[languages.lang].title}</h4></Link>
											<p>{post.lang[languages.lang].description} </p>
												<Link className=" read-btn btn-white" to={`/blog/post/${index}`}> Read more</Link>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="swiper-button-prev d-md-block d-none" style={{left:"80px", zIndex:"3", color:"#fff"}}></div>
						<div className="swiper-button-next d-md-block d-none" style={{right:"80px", zIndex:"3", color:"#fff"}}></div>

				</div> 
			</div>
		</div>
    </div>
  )
}

export default BlogRow