import React from 'react'
import ServiceRow from '../../components/layout/ServicesRow'
import BlogBanner from '../../components/layout/BlogBanner'
import './style.css'

function Services() {
    

  return (
    <div className="services">
        <BlogBanner title="services" backgroundName="banner-services.jpeg" description="Our aim is to apply Technological Solutions to your Business Objectives &amp; Ideas" />
        <div className="service__content">
          <ServiceRow titleParagraph="Web Development" 
          paragraph="A website offers much more than what meets the eye. Our team of experts will maximize the impact of your web solution from both a design and development perspective. We take great pride in exploring and utilizing our knowledge of current design-development practices and implementing them in our performance enhancing our scope of accessibility, in getting projects. We also boost our exposure in streaming media, employee-facing administration panels, push notification servers and several other options that make us different from the rest of our market competitors. We have a very vast experienced and technically sound team of web development service which is capable of creating stunning featured, trendy yet stylish fully-featured web apps along with building up a team of full-stack web developers. We take the courage of making front-end development, building backend infrastructure, API design and development, and strategy advising. Our potentiality lies in our comprehensive solutions to meet and fit our client’s needs." 
          titleList="WHAT WE DO" 
          list={["PHP/ JAVA/ .NET","MySQL/ MongoDB","Node JS","CodeIgniter/ Laravel/ CakePHP", "Firebase", "API Integration" ]}
          imageName="service__row--image1.jpeg"
          />
          <ServiceRow titleParagraph="Mobile App Development" 
          paragraph="Mobile applications are an integral part of our daily lives. A reliable mobile application is necessary to connect companies &amp; consumers in a single string. We being associated with mobile development company ensure all facets of these experiences and functions are accounted for from the start. With over five years of experience and expertise in mobile development, we work closely with clients to identify their requirement and understand its functionality which is needed to create an easy-to-use, scalable, mobile application. Our top-notch mobile application design services help create detailed UI design documents, establish realistic milestones, clear objectives, and criteria for completion. This in turn, allows our esteem clients to be able to more frequent communication and provide feedback throughout the entire development process. VolanSoft’s knowledge of development complexities and superb turn around time gives clients the simple ease of mind and capability of meeting all their requirements." 
          titleList="WHAT WE DO" 
          list={["Android App Development","iOS App Development","Windows App Development", "PhoneGap App Development", "HTML5 Mobile Development" ]}
          imageName="service__row--image2.jpeg"
          />
          <ServiceRow titleParagraph="User(Interface,Experience) Design" 
          paragraph="We provide great design that enriches the value of our services. We have the perfect combination that blends and mixes easily with creativity, appropriate coloring, image selection, best layouts, usability and search engine friendliness that enhances your capabilities to our clients. VolanSoft team unlike any other, UI/UX Design, has an ample experience in designing attractive, neat, professional websites that remains unique as company goals. We always conduct in-depth research and analysis on your industry before initiating your project. Our unique UI/UX architecture will compel users to stay connected on your product by removing any sort of distraction. Our team is good at crafting out the finest of output in relation to web designing and offer consultation on System Architecture for your business based on the industry trends." 
          titleList="WHAT WE DO" 
          list={["Information Architecture","Interaction Design","Usability", "Wireframing", "Visual Design" ]}
          imageName="service__row--image3.jpeg"
          />
          <ServiceRow titleParagraph="Digital Marketing" 
          paragraph="VolanSoft has the repute of carrying an immense expertise in the field of digital projects and has successfully executed most intense campaigns with attention to detail. We provide high-quality result-oriented Digital Services ranging to a broad-spectrum including SEO Service and expand to diverse industry segments. A combination of Quality Solutions, transparent pricing and fast turn around time help us to connect with our customers as per our commitment. VolanSoft has successfully built a powerful relationship with clients based on mutual trust and respect. We provide digital experiences that have never been identified with an eye with details help in decoding the online behavior of your clients/customers and make us one of the finest in the business today. We have expertise in generating a stronghold in our work that leads to our quality digital marketing campaigns." 
          titleList="WHAT WE DO" 
          list={["Search Engine Optimization","Social Media Marketing","E-Mail Marketing","Online Reputation Management", "Pay Per Click", "Lead Generation", "Marketing Automation"]}
          imageName="service__row--image4.jpeg"
          />
          <ServiceRow titleParagraph="Blockchain Development" 
          paragraph="Being an early adopter of Blockchain technology, we have gained huge expertise in building high quality, scalable distributed applications, and customized protocols. We specialized in Initial Coin Offering (ICO) development, Crypto Currency Development and we have successfully developed multiple POCs till date across various industries. Being a Blockchain Development Company has the tools to develop blockchain technology in your business that would provide a record base of all your transactions. VolanSoft provides support and enhance the security but also will achieve transparency in transactions as well. Our capabilities lie in the proficiencies to enhance our grip in blockchain technology and development and execute new dimension of working caliber that not only enriches our clients but also develop our expertise." 
          titleList="WHAT WE DO" 
          list={["Initial Coin Offering (ICO)","Smart Contract Development","Cryptocurrency Development", "Wallet Development", "Exchanger Development","Cryptocurrency Consultation" ]}
          imageName="service__row--image5.jpeg"
          />
          <ServiceRow titleParagraph="IT Consultancy" 
          paragraph="IT Consultancy is been one of the most primary and upcoming trends around the globe that has been observed by the trade pundits. Today’s demanding and challenging business environment requires complex application solutions to achieve strategic objectives and increased productivity. Thus keeping this in mind, VolanSoft collaborates with clients to deliver robust application solutions by understanding their business, technology, processes, and applications. It is the work of the organizations to grip the opportunities rapidly by adopting new technologies, including web-based solutions. We help you achieve these qualities in your IT strategy by providing a range of IT services – from custom application development, testing and maintenance, upgrades and consulting. We help customers reduce cost, minimize risk and help them in achieving improved ROI from IT applications." 
          titleList="WHAT WE DO" 
          list={["Custom Application Development","Application Management","Application Modernisation","System Integration", "Firebase", "Performance Engineering" ]}
          imageName="service__row--image6.jpeg"
          />
        </div>
    </div>
  )
}

export default Services