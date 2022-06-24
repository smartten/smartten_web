import {React, useEffect} from 'react'
import ServiceRow from '../../components/layout/ServicesRow'
import BlogBanner from '../../components/layout/BlogBanner'
import './style.css'

function Services({servicesData}) {

  useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

      document.title="SMARTTEN";
      document.description="SMARTTEN Software";
	},[])

  console.log(servicesData);
  return (
    <div className="services">
        <BlogBanner title="services" backgroundName="banner-services.jpeg" description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas" />
        <div className="container">
          <div className="service__content">
            {servicesData && servicesData.map((service, index) =>(
              <ServiceRow 
              key={index} 
              servicePostUrl={service.linkUrl}
              titleParagraph={service.title}
              paragraph={service.description}
              titleList="WHAT WE DO" 
              list={service.subService}
              imageName="service__row--image1.jpeg"
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Services