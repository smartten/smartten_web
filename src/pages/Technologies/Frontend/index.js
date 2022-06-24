import {React, useEffect} from 'react'
import BlogBanner from '../../../components/layout/BlogBanner'
import BlogRow from '../../../components/layout/BlogRow'
import TechnologiesRow from '../../../components/layout/TechnologiesRow'
import TechnologiesIntroRow from '../../../components/layout/TechnologiesIntroRow'
import TechnologiesCompetenciesRow from '../../../components/layout/TechnologiesCompetenciesRow'
import './style.css'

function Frontend({postsData, languages}) {
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
      <BlogBanner title="Frontend" backgroundName="background-technologies.jpg"  description="">
      </BlogBanner>
      <TechnologiesIntroRow imgName="background-fontend.jpeg" h2="Frontend" h3="Fast, usable websites and web apps" p="With SMARTTEN you get world-class frontend engineering services that guarantee better usability and intuitive UIs, using the latest tools, techniques, and industry best practices. Our frontend development integrates well with external technologies and other web services, while our UI/UX designing team makes sure your users have the best visual experience." />
      <TechnologiesRow />
      <TechnologiesCompetenciesRow 
        contentList={['⦁ Highly polished frontend web development including large, complex websites.', 
        '⦁ Extensive knowledge of HTML/CSS/JavaScript (primarily HTML5, CSS3 & vanilla JavaScript6).',
         '⦁ Connecting backend systems/API interfaces to the frontend.',
          '⦁ Configuration and development of pages and page templates, components, email templates, and localization.',
           '⦁ Integration of static, video and HTML assets for a range of online and offline. platforms including social media, display advertising, websites, and mobile apps',
            '⦁ Microsoft Gold Partner in competency of Application Development.'
               ]} />
      <BlogRow postsData={postsData} languages={languages}/>
    </div>
  )
  
}

export default Frontend