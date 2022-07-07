import {React, useEffect} from 'react'
import BlogBanner from '../../../components/layout/BlogBanner'
import BlogRow from '../../../components/layout/BlogRow'
import TechnologiesRow from '../../../components/layout/TechnologiesRow'
import TechnologiesIntroRow from '../../../components/layout/TechnologiesIntroRow'
import TechnologiesCompetenciesRow from '../../../components/layout/TechnologiesCompetenciesRow'
import './style.css'

function QualityAssurance({postsData, languages}) {
  useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

      document.title="SMARTTEN Software - Software Development Company";
      document.description="SMARTTEN Software";
	},[])
  return (
    <div>
      <BlogBanner title="Software quality assurance" backgroundName="background-technologies.jpg"  description="">
      </BlogBanner>
      <TechnologiesIntroRow 
      imgName="Architecture-design.jpeg" 
      h2="Software quality assurance" 
      h3="Where the user experience really begins" 
      p="Hidden away from your user’s eyes, it’s the most important part of your software, serving as a foundation for solid user experience. At SMARTTEN we specialize in providing high-quality backend development services to both startups and large enterprises, creating solutions that will help you carry out your plans, bring your product to market faster and ultimately increase your revenue." />
      <TechnologiesRow />
      <TechnologiesCompetenciesRow 
        contentList={["⦁ Usability testing – we think about your users and how they'll interact with your software. Our exhaustive analysis identifies potential errors, confusing designs and performance flaws.", 
        "⦁ Security testing – we'll run a comprehensive assessment of your software to identify potential vulnerabilities, provide critical recommendations, and dramatically improve your application's security.",
         "⦁ Performance testing – if you want your software to be scalable in the future, you need to make sure it can handle the strain. SMARTTEN experts will test how much traffic your application can take and find what’s slowing it down.",
          "⦁ Compatibility testing – our QA experts will test your application's full compatibility with different browsers, databases, hardware, server infrastructures, resolution displays, and devices.          ",
            '⦁ Microsoft Gold Partner in competency of Application Development.'
               ]} />
      <BlogRow postsData={postsData} languages={languages}/>
    </div>
  )
  
}

export default QualityAssurance