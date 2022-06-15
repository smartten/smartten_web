import React from 'react'
import BlogBanner from '../../../components/layout/BlogBanner'
import BlogRow from '../../../components/layout/BlogRow'
import TechnologiesRow from '../../../components/layout/TechnologiesRow'
import TechnologiesIntroRow from '../../../components/layout/TechnologiesIntroRow'
import TechnologiesCompetenciesRow from '../../../components/layout/TechnologiesCompetenciesRow'
import './style.css'

function DevOps({postsData, languages}) {
  return (
    <div>
      <BlogBanner title="DevOps" backgroundName="background-technologies.jpg"  description="">
      </BlogBanner>
      <TechnologiesIntroRow imgName="optimization.jpeg" h2="DevOps" 
      h3="Automating software releases and infrastructure" 
      p="Our DevOps consulting services for serverless and containerized enterprise applications include: Jenkins and Gitlab/Github for continuous integration, infrastructure automation, continuous delivery pipelines for cloud-native and microservice applications on Docker and Kubernetes, as well as analytics and intelligence." />
      <TechnologiesRow />
      <TechnologiesCompetenciesRow 
        contentList={[
          '⦁ Automating rollouts/deployment using configuration management.', 
        '⦁ Setting up CI/CD pipelines for application testing and deployment.',
         '⦁ Building and maintaining container orchestration platforms.',
          '⦁ Capacity planning and working with on-premise infrastructure.',
           '⦁ Configuring application monitoring and alerting.',
            '⦁ Microsoft Gold Partner in competency of Application Development.',
            '⦁ Microsoft Gold Partner in competency of Application Development.'
               ]} />
      <BlogRow postsData={postsData} languages={languages}/>
    </div>
  )
  
}

export default DevOps