import React from 'react'
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

import './style.css'

function Home() {
  return (
    <div className="home">
      	<section className="main_banner">
			<div className="container">
			<div className="row">
				<div className="col-md-12">
				<div className="main_banner_top_part d-table">
					<div className="d-table-cell">
					<h1 className="mbt_title">encode Innovation<br/>into your business</h1>
					<p className="mbt_subtitle">We love helping start-up become brand names<br/>and corporation launch new products</p>
					<a href="#getQuoteModal" data-toggle="modal" className="btn mbt_btn btn-black">Get a free quote</a>
					</div>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
				<div className="main_banner_bottom_part hidden-xs">
					<ul className="mbbp_ul nav-justified ">
					<li>
						<h4><span className="counter"><CountUp start={0} end={100} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Happy Clients</h6>
					</li>
					<li>
						<h4><span className="counter"><CountUp start={0} end={82} duration={4}></CountUp></span>%</h4>
						<div className="mbbp_divider"></div>
						<h6>Repeat Clients</h6>
					</li>
					<li>
						<h4><span className="counter"><CountUp start={0} end={300} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Finished Project</h6>
					</li>
					<li>
						<h4><span className="counter"><CountUp start={0} end={20} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Countries</h6>
					</li>
					<li>
						<h4><span className="counter"><CountUp start={0} end={15} duration={4}></CountUp></span>+</h4>
						<div className="mbbp_divider"></div>
						<h6>Resource Strength</h6>
					</li>
					</ul>
				</div>
				</div>
			</div>
			
			</div>
		</section>
		<div className="who-we-are">   
			<div className=" port-section-wrapper">
				<Fade left>
					<div className=" services-image">
						<div className="img-gray-layer">
							<img src="https://www.volansoft.com/assets/images/explore.jpg" alt="explore"  data-aos="fade-right" className=""  />
						</div>
					</div>
				</Fade>
				<Fade bottom>
					<div className="col-md-6 col-xs-12 col-xs-offset-0 col-md-pull-1 port_sec_right">
						<div className="title-headline">
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
				</Fade>
			</div>
		</div>
		<div className="services-area p50" id="our-services">
			<div className="container">
				<Fade bottom>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
							<div className="center-headline">
								<h3   className="">Our Services</h3>
							</div>
						</div>
					</div>
				</Fade>
				<div className="services-list">
					<Fade bottom>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/web-development" className="single-service "  >
								<div className="single-service-inner single-service-inner-3">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-display1"></i></span>
										</div>
										<div className="service-text">
											<h4>Web Development</h4>
											<p>The web development experts at VolanSoft help our clients with numerous aspects of the development process. We specialize in PHP, JS, and Java along with several other complex technologies.</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/mobile-app-development" className="single-service "  >
								<div className="single-service-inner single-service-inner-2">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-phone"></i></span>
										</div>
										<div className="service-text">
											<h4>Mobile App Development</h4>
											<p>With the technology team proficient in mobile architecture, testing and coding, VolanSoft builds and maintains Android, and iOS applications for its clients. We help our clients no matter what.</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/digital-marketing" className="single-service "  >
								<div className="single-service-inner single-service-inner-1">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-rocket"></i></span>
										</div>
										<div className="service-text">
											<h4>Digital Marketing</h4>
											<p>Regardless of your market reach, internet marketing plays a crucial role in your business. Our Web Marketing team helps businesses from different industries, while customizing the services provided to them.</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/ui-ux-design" className="single-service "  >
								<div className="single-service-inner single-service-inner-5">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-monitor"></i></span>
										</div>
										<div className="service-text">
											<h4>User Experience Design</h4>
											<p>VolanSoft is one among the best UX design firms out there, with a proven track record of handcrafting stunning User Experience designs to meet its clients’ goals and vision.We believe that UX design is more about content-centric than user-centric. Our professional team crafts innovative experiences.</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/blockchain-development" className="single-service "  >
								<div className="single-service-inner single-service-inner-6">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-note2"></i></span>
										</div>
										<div className="service-text">
											<h4>Blockchain Development</h4>
											<p>We have extensive experience and comprehensive knowledge in Blockchain development, we have gained a detailed understanding of Blockchain technology, cloud services, AI and IoT. This makes our team deliver excellent Blockchain development services.</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="service-item">
							<a href="https://www.volansoft.com/services/it-consultancy" className="single-service "  >
								<div className="single-service-inner single-service-inner-4">
									<div className="service-content">
										<div className="service-icon">
											<span><i className="pe-7s-users"></i></span>
										</div>
										<div className="service-text">
											<h4>IT Consultancy</h4>
											<p>We are a committed with best IT company consulting services company dedicated to empowering enterprises to thrive in the current complicated business atmosphere. We help our clients in defining the quantifiable business profits which can be achieved together. </p>
										</div>
									</div>
								</div>
							</a>
						</div>
					</Fade>
				</div>
			</div>
		</div>
		<div className="home-blog-container">
			<div class="home-blog">
				<Fade bottom>
					<h3 className="">Latest Blogs, News And Insights</h3>
				</Fade>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					slidesPerGroup={3}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[ Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="vs_blog_single">
							<div class="awesome-img ">
								<Link to="/blog/top-reasons-to-choose-offshore-app-developers">
									<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
								</Link>
								<ul class="inline-ul post-detail-ul w100p clearfix">
									<li><i class="fa fa-calendar"></i>17 Feb 2020</li>
									<li><i class="fa fa-user"></i> Admin</li>
								</ul>
							</div>
							<div class="project-dec ">
								<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
								<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
								<Link className="read-btn btn-white" to="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</Link>

								
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		<div className="p90 process-sec">
			<div className="container scontainer">
				<Fade bottom>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12">
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
				<div className="row row_4 timeline-row align-items-center fordesktop">
					<div className="col-md-2 timeline-col upper">
						<div className="timeline-circel-outer"><span className="timeline-circel-line"><span className="timeline-circel-line-inr lineAn anClass"></span> </span> <span className="timeline-circel borderAn">01<span className="timeline-circel-inr fillAn anClass">01</span> </span>
						</div>
						<div className="timeline-content timeline-upper-content">
							<h4>Discovery</h4>
							<p>First, we’ll take a deep dive into your documentation, requirements, business objectives and goals.</p>
						</div>
						<div className="middleline">
							<div className="middleline-inr middlelineAn " data-aos="middlelineAn"></div>
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
							<div className="middleline-inr middlelineAn " data-aos="middlelineAn"></div>
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
							<div className="middleline-inr middlelineAn " data-aos="middlelineAn"></div>
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
							<div className="middleline-inr middlelineAn " data-aos="middlelineAn"></div>
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
							<div className="middleline-inr middlelineAn " data-aos="middlelineAn"></div>
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
						<div className="col-xs-12">
							<Fade bottom>
								<div className="center-headline white-headline">
									<h3 className="">How We Stand Out</h3>
								</div>
							</Fade>
						</div>
					</div>
					<div className="row row_col">
						<div className="col-md-4 col-sm-4 mb-30">
						<div className="service2-item-box text-center">
							<div className="svg-icon">
								<i className="fa-solid fa-layer-group"></i>
							</div>
							<div className="service2-text">
							<h3 className="white">Full-Stack Development</h3>
							<p className="white">We do it all. Top to Bottom. Front to Back.</p>
							</div>
						</div>
						</div>

						<div className="col-md-4 col-sm-4 mb-30">
						<div className="service2-item-box text-center">

							<div className="svg-icon">
							 <i className="fa-solid fa-screwdriver-wrench"></i>
							</div>
							<div className="service2-text">
							<h3 className="white">Easily Updatable</h3>
							<p className="white">We build with the future in mind by ensuring future updates are easy and quick</p>
							</div>
						</div>
						</div> 

						<div className="col-md-4 col-sm-4 mb-30">
						<div className="service2-item-box text-center">

							<div className="svg-icon">
								<i className="fa-solid fa-pen-nib"></i>
							</div>
							<div className="service2-text">
							<h3 className="white">Fabulous Design</h3>
							<p className="white">We focus a lot of effort on design. What looks good, feels good.</p>
							</div>
						</div>
						</div> 

					

							<div className="col-md-4 col-sm-4 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-icon">
									<i className="fa-regular fa-clock"></i>
								</div>
								<div className="service2-text">
								<h3 className="white">Performance</h3>
								<p className="white">We create light-weight, high-speed software</p>
								</div>
							</div>
							</div> 

							<div className="col-md-4 col-sm-4 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-icon">
								<i className="fa-solid fa-mobile-screen"></i>
								</div>
								<div className="service2-text">
								<h3 className="white">Fully Responsive</h3>
								<p className="white">Mobile is the future... We design for it</p>
								</div>
							</div>
							</div> 

							<div className="col-md-4 col-sm-4 mb-30">
							<div className="service2-item-box text-center">

								<div className="svg-icon">
									<i className="fa-solid fa-headset"></i>
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
			<div class="center-headline">
				<h3>Our Clients</h3>
				<p>We love our clients and the feeling is mutual.</p>
			</div>
			<div className="home-our-clients">
				<Swiper 
				slidesPerView={5}
				slidesPerGroup={5}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={true}
				modules={[ Pagination]}
				className="mySwiper"
				>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="owl-item" >
							<div class="single-client">
								<Link to="https://coloringa.com/blog/" rel="noreferrer"  target="_blank" >
									<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" class="image_on" />
								</Link>
							</div>
						</div>
					</SwiperSlide>

				</Swiper>
			</div>
		</div>
		<div className="home-feedback-container">
			<Fade bottom>
				<h3 >Our Clients Say</h3>
			</Fade>
			<div className="home-feedback">
			<Swiper 
				pagination={true} 		
				loop={true}
				loopFillGroupWithBlank={true}
				modules={[Pagination]} 
				className="mySwiper">
				<SwiperSlide>
					<div class="owl-item" >
						<div class="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate" style={{margin:"auto"}}>
							<div class="testimonial-info">
								<span>
									<span>
										<span>
											<p>VolanSoft is a truly professional company. They have helped our company get to a new level of service excellence!</p>
											<div class="test-info">
												<h6>Mr. Ashish Somani</h6>
												<h5>CEO, Somani Threads</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div class="client-info">
								<div class="test-img">
									<img src="https://www.volansoft.com/upload/testimonial/2838300179404018920.jpg" alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
				<div class="owl-item" >
						<div class="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate" style={{margin:"auto"}}>
							<div class="testimonial-info">
								<span>
									<span>
										<span>
											<p>VolanSoft is a truly professional company. They have helped our company get to a new level of service excellence!</p>
											<div class="test-info">
												<h6>Mr. Ashish Somani</h6>
												<h5>CEO, Somani Threads</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div class="client-info">
								<div class="test-img">
									<img src="https://www.volansoft.com/upload/testimonial/2838300179404018920.jpg" alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
				<div class="owl-item" >
						<div class="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate" style={{margin:"auto"}}>
							<div class="testimonial-info">
								<span>
									<span>
										<span>
											<p>VolanSoft is a truly professional company. They have helped our company get to a new level of service excellence!</p>
											<div class="test-info">
												<h6>Mr. Ashish Somani</h6>
												<h5>CEO, Somani Threads</h5>
											</div>
										</span>
									</span>
								</span>	
											
							</div>
							<div class="client-info">
								<div class="test-img">
									<img src="https://www.volansoft.com/upload/testimonial/2838300179404018920.jpg" alt="Mr. Ashish Somani" />
								</div>
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

export default Home