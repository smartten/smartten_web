import React from 'react'
import { Fade } from 'react-reveal'
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
				<div>
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
    	</div>
    </div>
  )
}

export default ServicesPost