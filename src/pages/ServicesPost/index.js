import {React, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Fade } from 'react-reveal';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServicePostBanner from '../../components/layout/ServicePostBanner'
import './style.css' 
import TestimonialRow from '../../components/layout/TestimonialRow';


function ServicesPost( {children, servicesData} ) {

	useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

		document.title="SMARTTEN Software - Software Development Company";
      	document.description="SMARTTEN Software";
	},[])

	const [service, setService] = useState()
	

	let { linkServicePost } = useParams();
	
	
	useEffect(() => {
	   function getServices(){
		let service =  servicesData?.find(service => service.linkUrl === `/${linkServicePost}`)
		setService(service)
		return service
	  }
	  getServices()
	},[servicesData, linkServicePost])

  return (
    <div className="service-post">
        {service && <ServicePostBanner title={service.title} description={service.subTitle} img={service.image} />}
        <div className="container">
			<div className="service-post-content" >
				<Fade bottom>
					{service && <div className="post-content-intro" dangerouslySetInnerHTML={{ __html: service.content}} >
					</div>}
				</Fade>
				<div className="post-content-list">
					<h2>Our Web-Development Services</h2>
					<Fade bottom>
						<div className="content-list">
							{service && service.subService.map((sub,index) => (
								<div key={index} className="content-item-container col-md-6 col-sm-12 col-12">
									<div className="content-item" >
										<h3>{sub.title}</h3>
										<p>{sub.description}</p>
									</div>
								</div>
							))}
						</div>
					</Fade>
				</div>
			</div>
		</div>
	
		<div className="service-post-contact-us">
			<Fade bottom>
				<h3>Accelerate Your Business Growth Choosing Advanced <br /> Development Services</h3>
			</Fade>
			<Link to="/contact-us">contact us</Link>
		</div>
		<TestimonialRow />
    </div>
  )
}

export default ServicesPost