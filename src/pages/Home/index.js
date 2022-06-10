import React from 'react'
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import ReactVivus from 'react-vivus';
import standOutSvg1 from '../../assets/icons/how-we-stand-out/stand-out-service1.svg';
import standOutSvg2 from '../../assets/icons/how-we-stand-out/stand-out-service2.svg';
import standOutSvg3 from '../../assets/icons/how-we-stand-out/stand-out-service3.svg';
import standOutSvg4 from '../../assets/icons/how-we-stand-out/stand-out-service4.svg';
import standOutSvg5 from '../../assets/icons/how-we-stand-out/stand-out-service5.svg';
import standOutSvg6 from '../../assets/icons/how-we-stand-out/stand-out-service6.svg';


// import required modules
import { Pagination, Navigation } from "swiper";

import './style.css'
import TestimonialRow from '../../components/layout/TestimonialRow';

function Home({postsData, languages, serviceData}) {

	var romanToInt = function(s) {
		
	};
	console.log(romanToInt("LXIII"));
  return (
    <div className="home">
      	<section className="main_banner">
			<div className="container">
			<div className="row">
				<div className="col-md-12">
				<div className="main_banner_top_part d-table">
					<div className="d-table-cell">
					<h1 className="mbt_title">TRUSTED SOFTWARE DEVELOPMENT<br/> COMPANY IN SMARTTEN</h1>
					<p className="mbt_subtitle">We love helping start-up become brand names<br/>and corporation launch new products</p>
					<a href="#getQuoteModal" data-toggle="modal" className="btn mbt_btn btn-black">Get a free quote</a>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="main_banner_bottom_part ">
					<ul className="mbbp_ul nav-justified d-md-flex  d-none">
					<li className="col-sm-12">
						<h4><span className="counter"><CountUp start={0} end={100} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Happy Clients</h6>
					</li>
					<li className="col-sm-12">
						<h4><span className="counter"><CountUp start={0} end={82} duration={4}></CountUp></span>%</h4>
						<div className="mbbp_divider"></div>
						<h6>Repeat Clients</h6>
					</li>
					<li className="col-sm-12">
						<h4><span className="counter"><CountUp start={0} end={300} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Finished Project</h6>
					</li>
					<li className="col-sm-12">
						<h4><span className="counter"><CountUp start={0} end={20} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Countries</h6>
					</li>
					<li className="col-sm-12">
						<h4><span className="counter"><CountUp start={0} end={15} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Resource Strength</h6>
					</li>
					</ul>
				</div>
			</div>
			</div>
		</section>
		<div className="who-we-are">   
			<div className="d-inline port-section-wrapper">
						<Fade left className="col-md-6 col-12">
							<div className="services-image">
									<div className="img-gray-layer ">
										<img src={require('../../assets/images/explore.jpeg')} alt="explore"  />
									</div>
							</div>
						</Fade>
				<Fade bottom>
					<div className="container">
						<div className="col-md-6 col-12 port_sec_right">
							<div className="title-headline ">
								<h6>WHO WE ARE</h6>
								<p className="text-justify">
									<strong>As an 
										<span className="display-inline-block h5st">IT Company</span>
										, we offers you solutions through our services, our team experts combine the synergy of the traditional with modern to give you an innovative experience.
									</strong>
								</p>
							</div>
							<div className="service-section-description mt50 ">
								<p className="text-justify "  >We don’t just dream, we make I(o)T happen using excellent strategies: </p>
								<p><b>We believe making a DIFFERENCE can make businesses THRIVE.</b></p>
								<p className="text-justify "  >It has been working since our launch. We, at VolanSoft <b>The Software Development Company</b>, have steered new and established businesses to stun their clients with world-class digital experiences. In the course of time, VolanSoft has transformed into an industry Giant by implementing latest technology realms in our processes, while enhancing standards of quality, project management and, engineering. We develop long-lasting associations with our customers and put a great emphasis on quality and delivery.
								</p>
								<Link to="/contact-us" className="btn btn_m3 btn-black pull-right ml10">Start Discussion</Link>
								<Link to="/about-us" className="btn btn_m3 btn-black pull-right ml10">Explore Now</Link>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
		<div className="home-services">
			<div className="container">
				<Fade bottom >
					<div className="services-title">
						<h2>Our Services</h2>
						<p>At Smartten, we primarily focus on adding extra value to your business by using up-to-date Technologies, which results in higher profitability & company evaluation.</p>
					</div>
				</Fade>
				<Fade bottom>
					<div className="services-list">
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Dedicated Development Team
								</h3>
								<p>
								We quickly allocate independent software developers for your internal projects with a focus on communication processes & detailed development phases.
								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-6.jpeg')} alt=" " />
								<Link to="/services/team"><i className='ti ti-arrow-right'></i></Link>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Web App Development
								</h3>
								<p>
								We always keep up with the latest Front & Back-end Web Development technologies to create high-quality Web Applications in a constantly changing business environment.

								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-3.jpeg')} alt=" " />
								<Link to="/services/post/0"><i className='ti ti-arrow-right'></i></Link>

							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Mobile App Development
								</h3>
								<p>
								Being the top 30 Global App Developers, Savvycom has immense experience creating feature-rich & high-performing Mobile Apps for iOS and Android platforms.
								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-1.jpeg')} alt=" " />
								<Link to="/services/post/1"><i className='ti ti-arrow-right'></i></Link>

							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Quality Assurance and Testing

								</h3>
								<p>
								Rigorous testing and stringent quality assurance at every stage ensure zero defects after releaseIN.
								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-5.jpeg')} alt=" " />
								<Link to="/services/quality-assurance-and-testing"><i className='ti ti-arrow-right'></i></Link>

							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Cloud Services
								</h3>
								<p>
								Our Cloud services are wide-ranging and innovative. So no matter where you are on your Cloud journey, Rikkeisoft will help build a practical solution and fulfill your business requirements.
								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-4.jpeg')} alt=" " />
								<Link to="/services/post/3"><i className='ti ti-arrow-right'></i></Link>

							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-12">
							<div className="service-item">
								<h3>
								Custom Software Development

								</h3>
								<p>
								We design bold and unique digital products that help you achieve your business goals. Every feature included in each product is designed to boost your company’s value, customer base, and profitability.

								</p>
								<img src={require('../../assets/images/Savvycom-Services-1000-2.jpeg')} alt=" " />
								<Link to="/services/post/4"><i className='ti ti-arrow-right'></i></Link>

							</div>
						</div>
					</div>
				</Fade>
				
			</div>
		</div>


		{/* <div className="services-area p50" id="our-services">
				<Fade bottom>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-12">
							<div className="center-headline">
								<h3   className="">Our Services</h3>
							</div>
						</div>
					</div>
				</Fade>
				<div className="container">
					<Fade bottom >
						<div className="services-list ">
								{servicesData.map((service, index) => (
									<div key={index} className="service-item col-md-4 col-sm-6 col-12">
										<Link to={`/services/post/${index}`} className="single-service"  >
											<div className="single-service-inner single-service-inner-2">
												<div className="service-content">
													<div className="service-icon">
														<span><i className={service.icon}></i></span>
													</div>
													<div className="service-text">
														<h4>{service.title}</h4>
														<p>{service.description.slice(0,300) + '...'}</p>
													</div>
												</div>
											</div>
										</Link>
									</div>
								))}						
						</div>
					</Fade>
				</div>
		</div> */}
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
						<div className="swiper-button-prev" style={{left:"80px", color:"#fff"}}></div>
						<div className="swiper-button-next" style={{right:"80px", color:"#fff"}}></div>

				</div>
			</div>
		</div>
		<div className="p90 process-sec">
			<div className="container">
				<Fade bottom>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-12">
							<div className="center-headline">
								<h3   className="">Web and Mobile App Development Process</h3>
								<p   className="">We are well-known for crafting eye catchy and most innovative Web &amp; Mobile Apps. We provide our clients with a wide array of customized software services in the <a href="https://www.volansoft.com/services"><strong>mobile and web app development</strong></a> realm. Our products and skilled team are engineered for bringing growth to our clients’ businesses. Moreover, we understand that it is the most important thing to deliver services without making any compromise on quality and time.</p>
							</div>
						</div>
					</div>								
				</Fade>
				<div className="m-timeline-wrap">
					<div className="m-timeline-row">
						<div className="m-timeline-col"><span className="timeline-circel borderAn">01<span className="timeline-circel-inr fillAn ">01</span> </span>
							<div className="timeline-content">
								<h4>Discovery</h4>
								<p>Discussing mission, requirements, vision, and documentation with our clients.</p>
							</div>
						</div>
						<div className="m-timeline-col"><span className="timeline-circel borderAn">02<span className="timeline-circel-inr fillAn ">02</span> </span>
							<div className="timeline-content">
								<h4>Planning</h4>
								<p>We set up the formative designs that supports the software usability and findability of its information.</p>
							</div>
						</div>
						<div className="m-timeline-col"><span className="timeline-circel borderAn">03<span className="timeline-circel-inr fillAn ">03</span> </span>
							<div className="timeline-content">
								<h4>Design</h4>
								<p>Creating designs to sustain software usability, while finding the capacity of its statistics.</p>
							</div>
						</div>
						<div className="m-timeline-col"><span className="timeline-circel borderAn">04<span className="timeline-circel-inr fillAn ">04</span> </span>
							<div className="timeline-content">
								<h4>Development</h4>
								<p>Our software team starts the coding process; building, documenting, implementing and test web and mobile apps.</p>
							</div>
						</div>
						<div className="m-timeline-col"><span className="timeline-circel borderAn">05<span className="timeline-circel-inr fillAn ">05</span> </span>
							<div className="timeline-content">
								<h4>Testing – QA – Launch</h4>
								<p>Checking the apps for gaps and bugs to rid the same if any.</p>
							</div>
						</div>
						<div className="m-timeline-col"><span className="timeline-circel borderAn">06<span className="timeline-circel-inr fillAn">06</span> </span>
							<div className="timeline-content">
								<h4>Maintenance</h4>
								<p>Once Applications are launched, VolanSoft keeps the Apps updated through innovative programs and processes. </p>
							</div>
						</div>
					</div>
					<div className="btn-holder text-center">
						<button className="btn blue-border-btn btn-sm timeline-show-link">View More</button>
					</div>
				</div>
				<div className="timeline-row d-lg-flex d-md-none d-sm-none d-none">
					<div className="col-md-2 timeline-col upper">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"><span className="timeline-circel-line-inr lineAn anClass"></span> </span> <span className="timeline-circel borderAn">01<span className="timeline-circel-inr fillAn anClass">01</span> </span>
						</div>
						<div className="timeline-content timeline-upper-content">
							<h4>Discovery</h4>
							<p>First, we’ll take a deep dive into your documentation, requirements, business objectives and goals.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " ></div>
						</div>
					</div>
					<div className="col-md-2 timeline-col bottom">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"> <span className="timeline-circel-line-inr lineAn anClass"> </span> </span> <span className="timeline-circel borderAn">02<span className="timeline-circel-inr fillAn   anClass" data--delay="2s">02</span> </span>
						</div>
						<div className="timeline-content timeline-bottom-content">
							<h4>Planning</h4>
							<p>Next, we’ll perform a comprehensive analysis and planning that serves as the foundation for the project.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " ></div>
						</div>
					</div>
					<div className="col-md-2 timeline-col upper">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"> <span className="timeline-circel-line-inr lineAn anClass"> </span> </span> <span className="timeline-circel borderAn">03<span className="timeline-circel-inr fillAn anClass">03</span> </span>
						</div>
						<div className="timeline-content timeline-upper-content">
							<h4>Design</h4>
							<p>Now, we’ll create a structural design that supports the software usability and findability of its information.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " ></div>
						</div>
					</div>
					<div className="col-md-2 timeline-col bottom">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"> <span className="timeline-circel-line-inr lineAn anClass"> </span> </span> <span className="timeline-circel borderAn">04<span className="timeline-circel-inr fillAn anClass">04</span> </span>
						</div>
						<div className="timeline-content timeline-bottom-content">
							<h4>Development</h4>
							<p>Let the coding begin! In this phase, our software engineers build, implement, test, and document.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " ></div>
						</div>
					</div>
					<div className="col-md-2 timeline-col upper">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"> <span className="timeline-circel-line-inr lineAn anClass"></span> </span> <span className="timeline-circel">05<span className="timeline-circel-inr fillAn anClass">05</span> </span>
						</div>
						<div className="timeline-content timeline-upper-content">
							<h4>Testing – QA – Launch</h4>
							<p>To confirm there are no bugs or gaps, everything goes through an intensive testing procedure.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " ></div>
						</div>
					</div>
					<div className="col-md-2 timeline-col bottom">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"> <span className="timeline-circel-line-inr lineAn anClass"></span> </span> <span className="timeline-circel borderAn">06<span className="timeline-circel-inr fillAn anClass">06</span> </span>
						</div>
						<div className="timeline-content timeline-bottom-content">
							<h4>Maintenance</h4>
							<p>Post-launch, we offer programs to ensure your software is always up-to-date.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section className="dark_main_bg p50">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<Fade bottom>
								<div className="center-headline white-headline">
									<h3 className="">How We Stand Out</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row row_col">
						<div className="col-md-4 col-sm-6 col-12 mb-30">
						<div className="service2-item-box text-center">
							<div className="svg-image" style={{width:"100%", height:"55px"}}>

										<ReactVivus

											
											id=" svg-icon1"
											option={{
											file: standOutSvg1,
											animTimingFunction: 'EASEIN',
											type: 'oneByOne',
											}}
											style={{ height: '100%', width: '100%' }}
											
										/>
							</div>
							<div className="service2-text">
							<h3 className="white">Full-Stack Development</h3>
							<p className="white">We do it all. Top to Bottom. Front to Back.</p>
							</div>
						</div>
						</div>

						<div className="col-md-4 col-sm-6 col-12 mb-30">
						<div className="service2-item-box text-center">

								<div className="svg-image" style={{width:"100%", height:"55px"}}>

										<ReactVivus

											
												id=" svg-icon2"
												option={{
												file: standOutSvg2,
												animTimingFunction: 'EASEIN',
												type: 'oneByOne',
												}}
												style={{ height: '100%', width: '100%' }}
												
											/>
								</div>
							<div className="service2-text">
							<h3 className="white">Easily Updatable</h3>
							<p className="white">We build with the future in mind by ensuring future updates are easy and quick</p>
							</div>
						</div>
						</div> 

						<div className="col-md-4 col-sm-6 col-12 mb-30">
						<div className="service2-item-box text-center">

									<div className="svg-image" style={{width:"100%", height:"55px"}}>

									<ReactVivus

										
											id=" svg-icon3"
											option={{
											file: standOutSvg3,
											animTimingFunction: 'EASEIN',
											type: 'oneByOne',
											}}
											style={{ height: '100%', width: '100%' }}
											
										/>
									</div>
							<div className="service2-text">
							<h3 className="white">Fabulous Design</h3>
							<p className="white">We focus a lot of effort on design. What looks good, feels good.</p>
							</div>
						</div>
						</div> 
							<div className="col-md-4 col-sm-6 col-12 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-image" style={{width:"100%", height:"55px"}}>

										<ReactVivus

											
											id=" svg-icon4"
											option={{
											file: standOutSvg4,
											animTimingFunction: 'EASEIN',
											type: 'oneByOne',
											}}
											style={{ height: '100%', width: '100%' }}
											
										/>
								</div>
								<div className="service2-text">
								<h3 className="white">Performance</h3>
								<p className="white">We create light-weight, high-speed software</p>
								</div>
							</div>
							</div> 

							<div className="col-md-4 col-sm-6 col-12 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-image" style={{width:"100%", height:"55px"}}>

										<ReactVivus

											
											id=" svg-icon5"
											option={{
											file: standOutSvg5,
											animTimingFunction: 'EASEIN',
											type: 'oneByOne',
											}}
											style={{ height: '100%', width: '100%' }}
											
										/>
								</div>
								<div className="service2-text">
								<h3 className="white">Fully Responsive</h3>
								<p className="white">Mobile is the future... We design for it</p>
								</div>
							</div>
							</div> 

							<div className="col-md-4 col-sm-6 col-12 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-image" style={{width:"100%", height:"55px"}}>

										<ReactVivus

											
											id=" svg-icon6"
											option={{
											file: standOutSvg6,
											animTimingFunction: 'EASEIN',
											type: 'oneByOne',
											}}
											style={{ height: '100%', width: '100%' }}
											
										/>
								</div>
								<div className="service2-text">
								<h3 className="white">Support</h3>
								<p className="white">We are always here for you 24/7</p>
								</div>
							</div>
							</div> 

					</div>
				</div>
		</section>
		<div className="home-our-clients-container">
				<div className="center-headline">
					<h3>Our Clients</h3>
					<p>We love our clients and the feeling is mutual.</p>
				</div>
				<div className="container">
					<div className="home-our-clients" >
						<Swiper 
						loop={true}
						pagination={true}
						modules={[ Pagination]}
						className="mySwiper"
						breakpoints={{
							400: {
								width: 400,
								slidesPerView: 1,
								  slidesPerGroup:1,
	  
							  },
							  768: {
								width: 768,
								slidesPerView: 3,
								  slidesPerGroup:3
							  },
							  1200: {
								  width: 1200,
								  slidesPerView: 5,
									slidesPerGroup:5
								},
						}}
						>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
										
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="owl-item" >
									<div className="single-client">
										
											<img src={require('../../assets/images/2407732058929887856.png')} alt="Our Clients" />
									</div>
								</div>
							</SwiperSlide>

						</Swiper>
					</div>
				</div>
		</div>
		<TestimonialRow />
    </div>
  )
}
export default Home