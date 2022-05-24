import {React} from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServicePostBanner from '../../components/layout/ServicePostBanner'
import './style.css' 


function ServicesPost(  ) {
  return (
    <div className="service-post">
        <ServicePostBanner title="Web Development" description="Transforming your software system for business growth" />
        <div className="service-post-content-container">
			<div className="service-post-content">
				<Fade bottom>
					<div className="post-content-intro">
						<h2>Arrive Users Across Platforms</h2>
						<p>We focus on providing custom web development services for businesses who seeks a consistent and flexible experience to users via distinct platforms. Leveraging new aspects and tactics for web development intricate progressive web applications, we bring back and front end operations together that enables to boost up the speed of your business. Our expertise spans across start ups, small and medium sized organizations; we provide cost effective software development services for Mobile, Web, Cloud, IOT and others to understand clients. We at volansoft believes to provide the perfect solution in your preferred technology platform, to both realistic time frames and budgets.</p>
					</div>
				</Fade>
				<div className="post-content-list">
					<h2>Our Web-Development Services</h2>
					<Fade bottom>
						<div className="content-list">
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
							<div className="content-item-container">
								<div className="content-item">
									<h3>PHP/ JAVA/ .NET</h3>
									<p>We creates custom web solutions using Java and PHP that supports custom and standard CMS. For .NET, our team has built a scalable, robust and secure application using rich toolbox in Visual studio. It enables our clients to manage blogs and products in required manner.</p>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</div>
			<div className="service-post-technology-container">
				<div className="service-post-technology">
					<div className="top">
						<Fade bottom>
							<h2>Our Technology Stacks</h2>
						</Fade>
						<Tabs>
							<TabList>
								<Tab>frameworks</Tab>
								<Tab>database</Tab>
								<Tab>cms</Tab>
								<Tab>front-end</Tab>
							</TabList>
							<TabPanel>
								<ul className="technology-lists">
									<li>
										<img className="technology-icon" alt="Codeigniter" src="https://www.volansoft.com/assets/img/logo/codeigniter-icon.png" />
										<span>Codeigniter</span>
									</li>
									<li>
										<img className="technology-icon" alt="Laravel" src="https://www.volansoft.com/assets/img/logo/laravel-icon.png" />
										<span>Laravel</span>
									</li>
									<li>
										<img className="technology-icon" alt="Cake PHP" src="https://www.volansoft.com/assets/img/logo/cake-php.png" />
										<span>Cake PHP</span>
									</li>
									<li>
										<img className="technology-icon" alt="Zend" src="https://www.volansoft.com/assets/img/logo/zend-icon.png" />
										<span>Zend</span>
									</li>
								</ul>
							</TabPanel>
							<TabPanel>
								<ul className="technology-lists">
									<li>
										<img className="technology-icon" alt="MySQL" src="https://www.volansoft.com/assets/img/logo/mysql.png" />
										<span>MySQL</span>
									</li>
									<li>
										<img className="technology-icon" alt="mongodb" src="https://www.volansoft.com/assets/img/logo/mongodb.png" />
										<span>MongoDB</span>
									</li>
								</ul>
							</TabPanel>
							<TabPanel>
								<ul className="technology-lists">
									<li>
										<img className="technology-icon" alt="Wordpress" src="https://www.volansoft.com/assets/img/logo/wordPress.png" />
										<span>Wordpress</span>
									</li>
									<li>
										<img className="technology-icon" alt="joomla" src="https://www.volansoft.com/assets/img/logo/joomla.png" />
										<span>Joomla</span>
									</li>
									<li>
										<img className="technology-icon" alt="drupal" src="https://www.volansoft.com/assets/img/logo/drupal.png" />
										<span>Drupal</span>
									</li>
								</ul>
							</TabPanel>
							<TabPanel>
							<ul className="technology-lists">
								<li>
									<img className="technology-icon" alt="html-5img" src="https://www.volansoft.com/assets/img/logo/html-5img.png" />
									<span>HTML5</span>
								</li>
								<li>
									<img className="technology-icon" alt="css" src="https://www.volansoft.com/assets/img/logo/css.png" />
									<span>CSS3</span>
								</li>
								<li>
									<img className="technology-icon" alt="js" src="https://www.volansoft.com/assets/img/logo/js.png" />
									<span>JavaScript</span>
								</li>
							</ul>
							</TabPanel>
						</Tabs>
					</div>
					<div className="bottom">
						<Fade bottom>
							<h2>Industries We Work With</h2>
							<h3>We serve a wide range of industries including Logistics, Travel, Real-Estate, Healthcare, FMCG, Not-For-Profit, Banking, etc.</h3>
						</Fade>
						<ul className="technology-lists">
							<li>
								<img className="technology-icon" alt="Food and Restaurants" src="https://www.volansoft.com/assets/images/tbbs33.png" />
								<span>Food and Restaurants</span>
							</li>
							<li>
								<img className="technology-icon" alt="Travel" src="https://www.volansoft.com/assets/images/tbbs34.png" />
								<span>Travel</span>
							</li>
							<li>
								<img className="technology-icon" alt="Real-Estate" src="https://www.volansoft.com/assets/images/tbbs35.png" />
								<span>Real-Estate</span>
							</li>
													<li>
								<img className="technology-icon" alt="Health and Fitness" src="https://www.volansoft.com/assets/images/tbbs37.png" />
								<span>Health and Fitness</span>
							</li>
							<li>
								<img className="technology-icon" alt="Shopping and E-Commerce" src="https://www.volansoft.com/assets/images/tbbs38.png" />
								<span>Shopping and E-Commerce</span>
							</li>
							<li>
								<img className="technology-icon" alt="Education and E-Learning" src="https://www.volansoft.com/assets/images/tbbs39.png" />
								<span>Education and E-Learning</span>
							</li>
							<li>
								<img className="technology-icon" alt="Media and Entertainment" src="https://www.volansoft.com/assets/images/tbbs40.png" />
								<span>Media and Entertainment</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="service-post-contact-us">
				<Fade bottom>
					<h3>Accelerate Your Business Growth Choosing Advanced <br /> Development Services</h3>
				</Fade>
				<Link to="/contact-us">contact us</Link>
			</div>
		</div>
    </div>
  )
}

export default ServicesPost