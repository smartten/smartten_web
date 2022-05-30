import React from 'react'
import CountUp from 'react-countup';
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
      <div className="p50">   
        <div className="row port-section-wrapper">
					<div className="col-md-5 col-xs-12 services-image">
						<div className="img-gray-layer">
							<img src="https://www.volansoft.com/assets/images/explore.jpg" alt="explore"  data-aos="fade-right" className="aos-init aos-animate" />
						</div>
					</div>
					<div className="col-md-6 col-md-offset-1 col-xs-12 col-xs-offset-0 col-md-pull-1 port_sec_right">
						<div className="title-headline">
							<h6   className="aos-init aos-animate">INTERNET OF THINGS</h6>
														<p className="text-justify aos-init aos-animate"  ><strong>As an <span className="display-inline-block h5st">IT Company</span>, we offers you solutions through our services, our team experts combine the synergy of the traditional with modern to give you an innovative experience.</strong></p>
						</div>
						<div className="service-section-description mt50 ">
							<p className="text-justify aos-init aos-animate"  >We don’t just dream, we make I(o)T happen using excellent strategies: </p>
              <p><b>We believe making a DIFFERENCE can make businesses THRIVE.</b></p>
							<p className="text-justify aos-init aos-animate"  >It has been working since our launch. We, at VolanSoft <b>The Software Development Company</b>, have steered new and established businesses to stun their clients with world-class digital experiences. In the course of time, VolanSoft has transformed into an industry Giant by implementing latest technology realms in our processes, while enhancing standards of quality, project management and, engineering. We develop long-lasting associations with our customers and put a great emphasis on quality and delivery.
							</p>
							<a href="https://www.volansoft.com/contact-us" className="btn btn_m3 btn-black pull-right ml10">Start Discussion</a>
							<a href="https://www.volansoft.com/about-us" className="btn btn_m3 btn-black pull-right ml10">Explore Now</a>
						</div>
					</div>
				</div>
      </div>
      <div className="services-area p50" id="our-services">
			<div className="container">
			    <div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="center-headline">
							<h3   className="aos-init aos-animate">Our Services</h3>
						</div>
					</div>
				</div>
				<div className="row row_col">
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/web-development" className="single-service aos-init aos-animate"  >
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
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/mobile-app-development" className="single-service aos-init aos-animate"  >
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
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/digital-marketing" className="single-service aos-init aos-animate"  >
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
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/ui-ux-design" className="single-service aos-init aos-animate"  >
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
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/blockchain-development" className="single-service aos-init aos-animate"  >
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
						<div className="col-md-4 col-sm-6 col-xs-12">
							<a href="https://www.volansoft.com/services/it-consultancy" className="single-service aos-init aos-animate"  >
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
					
				</div>
			</div>
		  </div>
      <div className="project-area project-area-2 parallax-bg area-padding">
            <div className="container">
                <div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="center-headline white-headline">
							<h3   className="aos-init aos-animate">Latest Blogs, News And Insights</h3>
						</div>
					</div>
				</div>
                <div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
					
					<div className="project-carousel owl-carousel owl-theme owl-loaded">

					<div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item"d><div className="single-awesome-project aos-init aos-animate"  data-aos="fade-right">
								<div className="vs_blog_single">
									<div className="awesome-img ">
										<a href="https://www.volansoft.com/blog/reason-to-outsource-web-development-projects">
											<img src="https://www.volansoft.com/upload/blog/3225975712228202830.jpg" alt="Blog" />
										</a>
										<ul className="inline-ul post-detail-ul w100p clearfix">
											<li><i className="fa fa-calendar"></i>04 Mar 2020</li>
											<li><i className="fa fa-user"></i> Admin</li>
																					</ul>
									</div>
									<div className="project-dec ">
										<a href="https://www.volansoft.com/blog/reason-to-outsource-web-development-projects"><h4>Reason to Outsource Web Development Projects</h4></a>
										<p>In today’s online marketing world, owning a website is very crucial for success of any business. a website meets with multiple... </p>
										
									</div>
								</div>
								<div className="vs_blog_dec">
									<a className="read-btn btn-white" href="https://www.volansoft.com/blog/reason-to-outsource-web-development-projects"> Read more</a>	
								</div>
							</div></div><div className="owl-item"d><div className="single-awesome-project aos-init aos-animate"  data-aos="fade-right">
								<div className="vs_blog_single">
									<div className="awesome-img ">
										<a href="https://www.volansoft.com/blog/the-bi-trends-in-2020">
											<img src="https://www.volansoft.com/upload/blog/3220050436040067210.png" alt="Blog" />
										</a>
										<ul className="inline-ul post-detail-ul w100p clearfix">
											<li><i className="fa fa-calendar"></i>27 Feb 2020</li>
											<li><i className="fa fa-user"></i> Admin</li>
																					</ul>
									</div>
									<div className="project-dec ">
										<a href="https://www.volansoft.com/blog/the-bi-trends-in-2020"><h4>The BI Trends in 2020</h4></a>
										<p>The 20-10s have been a decade of extraordinary digital evolution. At the beginning of the decade, the internet was still not penetrated... </p>
										
									</div>
								</div>
								<div className="vs_blog_dec">
									<a className="read-btn btn-white" href="https://www.volansoft.com/blog/the-bi-trends-in-2020"> Read more</a>	
								</div>
							</div></div><div className="owl-item active"d><div className="single-awesome-project aos-init aos-animate"  data-aos="fade-right">
								<div className="vs_blog_single">
									<div className="awesome-img ">
										<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers">
											<img src="https://www.volansoft.com/upload/blog/1964985659184366816.png" alt="Blog" />
										</a>
										<ul className="inline-ul post-detail-ul w100p clearfix">
											<li><i className="fa fa-calendar"></i>17 Feb 2020</li>
											<li><i className="fa fa-user"></i> Admin</li>
																					</ul>
									</div>
									<div className="project-dec ">
										<a href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"><h4>Top Reasons to Choose Offshore App Developers</h4></a>
										<p>As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... </p>
										
									</div>
								</div>
								<div className="vs_blog_dec">
									<a className="read-btn btn-white" href="https://www.volansoft.com/blog/top-reasons-to-choose-offshore-app-developers"> Read more</a>	
								</div>
							</div></div><div className="owl-item active"d><div className="single-awesome-project aos-init aos-animate"  data-aos="fade-right">
								<div className="vs_blog_single">
									<div className="awesome-img ">
										<a href="https://www.volansoft.com/blog/various-challenges-faced-by-the-developers-while-making-of-wearable-apps">
											<img src="https://www.volansoft.com/upload/blog/2440604575100177111.jpg" alt="Blog" />
										</a>
										<ul className="inline-ul post-detail-ul w100p clearfix">
											<li><i className="fa fa-calendar"></i>08 Feb 2020</li>
											<li><i className="fa fa-user"></i> Admin</li>
																					</ul>
									</div>
									<div className="project-dec ">
										<a href="https://www.volansoft.com/blog/various-challenges-faced-by-the-developers-while-making-of-wearable-apps"><h4>Various Challenges Faced by the Developers while Making of Wearable Apps</h4></a>
										<p>
&nbsp;
In the present scenario, the app development market is growing at fast pace and developers are continuously looking for... </p>
										
									</div>
								</div>
								<div className="vs_blog_dec">
									<a className="read-btn btn-white" href="https://www.volansoft.com/blog/various-challenges-faced-by-the-developers-while-making-of-wearable-apps"> Read more</a>	
								</div>
							</div></div><div className="owl-item active"d><div className="single-awesome-project suscribe_bg aos-init aos-animate"  data-aos="fade-right">
								
								<div className="project-dec">
									<h4>STAY UPDATED</h4>
									<p>Subscribe now to get the latest tech updates and modification all wrapped up in our Newsletter.</p>
									<div className="subs-feilds">
									<form method="post" id="subscribeFrm">
                                        <div className="suscribe-input">
											<div className="form-group">
												<input type="text" className="form-control" id="sus_name" name="sus_name" placeholder="Your  Name" />
											</div>
											<div className="form-group">
												<input type="email" className="email form-control" id="sus_email" name="sus_email" placeholder="Your Email" />
											</div>
											<div className="form-group">
												<button type="submit" id="submitBtn" className="read-btn btn-white btn-block">Subscribe</button>
											</div>
																		<div id="alert_msg"></div>
 
                                        </div></form>
                                    </div>
								</div>
								
								<a href="https://www.volansoft.com/blog" className="read-btn btn-white-border btn-block blog_btn">View All Blogs</a>
							</div></div></div></div><div className="owl-controls"><div className="owl-nav"><div className="owl-prev" ><i className="icon icon-chevron-left"></i></div><div className="owl-next" ><i className="icon icon-chevron-right"></i></div></div><div className="owl-dots"></div></div></div>	
					
					</div>	
                </div>	
            </div>
      </div>
      <div className="p90 process-sec">
			<div className="container scontainer">
			    <div className="row">
					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="center-headline">
							<h3   className="aos-init aos-animate">Web and Mobile App Development Process</h3>
							<p   className="aos-init aos-animate">We are well-known for crafting eye catchy and most innovative Web &amp; Mobile Apps. We provide our clients with a wide array of customized software services in the <a href="https://www.volansoft.com/services"><strong>mobile and web app development</strong></a> realm. Our products and skilled team are engineered for bringing growth to our clients’ businesses. Moreover, we understand that it is the most important thing to deliver services without making any compromise on quality and time.</p>
						</div>
					</div>
				</div>	
						
						
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
									<div className="middleline-inr middlelineAn aos-init aos-animate" data-aos="middlelineAn"></div>
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
									<div className="middleline-inr middlelineAn aos-init aos-animate" data-aos="middlelineAn"></div>
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
									<div className="middleline-inr middlelineAn aos-init aos-animate" data-aos="middlelineAn"></div>
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
									<div className="middleline-inr middlelineAn aos-init aos-animate" data-aos="middlelineAn"></div>
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
									<div className="middleline-inr middlelineAn aos-init aos-animate" data-aos="middlelineAn"></div>
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
						<div className="center-headline white-headline">
							<h3   className="aos-init aos-animate">How We Stand Out</h3>
						</div>
                       
                    </div>
                </div>
                <div className="row row_col">

					<div className="col-md-4 col-sm-4 mb-30">
					  <div className="service2-item-box text-center">

						<div className="svg-icon">
						  
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
      <section className="client-area p50">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="center-headline">
							<h3   className="aos-init aos-animate">Our Clients</h3>
							<p   className="aos-init aos-animate">We love our clients and the feeling is mutual.</p>
						</div>
						
					</div>
				</div>
				<div className="client-owl owl-carousel owl-theme owl-loaded">	
				<div className="owl-stage-outer"><div className="owl-stage"><div className="owl-item active"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://prayasfoundation.org/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/2786368923757294330.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item active"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="https://coloringa.com/blog/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/2761059553408082550.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item active"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://compwrisol.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/308714446766812620.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item active"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="https://diadal.com.ng/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/2407732058929887856.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item active"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://eduwritershub.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1071495098246683859.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://erepens.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1983538079625380117.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://niwai.apninagarpalika.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/797832151530392928.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://prodissertation.co.uk/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/299359626860632150.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="https://www.webvisitors.net/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1621931387876419750.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://www.radmx.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/3185352483834655394.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://www.nashiron.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1390091090394581172.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://uniquesubmission.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/67692087180994464.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://help4assignment.co.uk/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/320113220337866816.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://heathmxracing.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1183777837334794814.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://xlbroadband.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/1489527097561800660.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://adityasolutions.net.in/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/28421069521511330.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://assignmentsquality4u.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/841939602448126050.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://arnavtrade.com/" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/427019426826947942.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div><div className="owl-item"><div className="single-client aos-init aos-animate"  data-aos="fade-right">
						<a href="http://squareinsurance.in" target="_blank" rel="noopener noreferrer">
							<img src="https://www.volansoft.com/upload/client/879962199047375868.png" alt="Our Clients" className="image_on" />
						</a>
					</div></div></div></div><div className="owl-controls"><div className="owl-nav"><div className="owl-prev" ></div><div className="owl-next" ></div></div><div className="owl-dots" ><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div></div>
			</div>
		  </section>
      <section className="testimonial-area home-two parallax-bg">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="center-headline white-headline">
							<h3   className="aos-init aos-animate">Our Clients Say</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="testimonial-owl-two owl-carousel owl-theme owl-loaded">
					<div className="owl-stage-outer"><div className="owl-stage" ><div className="owl-item active" ><div className="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate"  data-aos="fade-right">
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
									<img src="https://www.volansoft.com/upload/testimonial/2838300179404018920.jpg" alt="Mr. Ashish Somani" />
								</div>
							</div>
						</div></div><div className="owl-item" ><div className="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate"  data-aos="fade-right">
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
									<img src="https://www.volansoft.com/upload/testimonial/744424326671857993.jpg" alt="Mr. Pankaj Marothiya"  />
								</div>
							</div>
						</div></div><div className="owl-item" ><div className="col-md-10 col-sm-12 col-xs-12 col_center aos-init aos-animate"  data-aos="fade-right">
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
									<img src="https://www.volansoft.com/upload/testimonial/2962449642090560181.jpg" alt="Mr. Olaoluwa Izuchi" />
								</div>
							</div>
						</div></div></div></div><div className="owl-controls"><div className="owl-nav"><div className="owl-prev" >prev</div><div className="owl-next" >next</div></div><div className="owl-dots" ><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div></div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Home