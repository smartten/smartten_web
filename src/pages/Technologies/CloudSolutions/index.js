import {React, useEffect} from 'react'
import BlogBanner from '../../../components/layout/BlogBanner'
import BlogRow from '../../../components/layout/BlogRow'
import TechnologiesRow from '../../../components/layout/TechnologiesRow'
import TechnologiesIntroRow from '../../../components/layout/TechnologiesIntroRow'
import TechnologiesCompetenciesRow from '../../../components/layout/TechnologiesCompetenciesRow'
import './style.css'

function CloudSolutions({postsData, languages}) {

  useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

      document.title="SMARTTEN";
      document.description="SMARTTEN Software";
	},[])
  return (
    <div>
      <BlogBanner title="Cloud solutions" backgroundName="background-technologies.jpg"  description="">
      </BlogBanner>
      <TechnologiesIntroRow 
      imgName="cloud-based-services-slide.jpeg" 
      h2="Cloud solutions" 
      h3="End-to-end cloud architecture and deployments" 
      p="Get expert consulting for your IT infrastructure to digitalize your business and transition to a cloud platform. We do end-to-end cloud architecture and deployments for our clients acting as subject matter experts. Our experienced Cloud Solution Architects have a deep understanding and practical knowledge of AWS (Amazon), Microsoft Azure, or Office 365 cloud computing technologies." />
      <TechnologiesRow />
      <TechnologiesCompetenciesRow 
        contentList={[
          "⦁ Complex architecture cloud migration solutions.", 
        "⦁ Security testing – we'll run a comprehensive assessment of your software to identify potential vulnerabilities, provide critical recommendations, and dramatically improve your application's security.",
         "⦁ AWS, Azure or Office 365 technical customer engagements including: proof of concept, pilots, architectural design, long term engagements, implementation and migration projects.",
          "⦁ In-depth technical expertise helping customers to move workloads to the cloud using IaaS, Paas and/or SaaS solutions.",
          '⦁ Microsoft Gold Partner in competency of Application Development.'
          ]} />
      <BlogRow postsData={postsData} languages={languages}/>
    </div>
  )
  
}

export default CloudSolutions