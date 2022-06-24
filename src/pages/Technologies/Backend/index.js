import {React, useEffect} from 'react'
import BlogBanner from '../../../components/layout/BlogBanner'
import BlogRow from '../../../components/layout/BlogRow'
import TechnologiesRow from '../../../components/layout/TechnologiesRow'
import TechnologiesIntroRow from '../../../components/layout/TechnologiesIntroRow'
import TechnologiesCompetenciesRow from '../../../components/layout/TechnologiesCompetenciesRow'
import './style.css'

function Backend({postsData, languages}) {

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
      <BlogBanner title="Backend" backgroundName="background-technologies.jpg"  description="">
      </BlogBanner>
      <TechnologiesIntroRow 
      imgName="backgroup-backend.jpeg" 
      h2="Backend" 
      h3="Where the user experience really begins" 
      p="Hidden away from your user’s eyes, it’s the most important part of your software, serving as a foundation for solid user experience. At SMARTTEN we specialize in providing high-quality backend development services to both startups and large enterprises, creating solutions that will help you carry out your plans, bring your product to market faster and ultimately increase your revenue." />
      <TechnologiesRow />
      <TechnologiesCompetenciesRow 
        contentList={['⦁ Experience with modern web frameworks such as Spring, Rails or similar.', 
        '⦁ Experience with Kotlin and Java.',
         '⦁ System architecture, caching techniques, REST APIs and data modelling.',
          '⦁ Relational databases such as Postgres.',
           '⦁ Experience with Azure, Docker and AWS services.',
            '⦁ Microsoft Gold Partner in competency of Application Development.'
               ]} />
      <BlogRow postsData={postsData} languages={languages}/>
    </div>
  )
  
}

export default Backend