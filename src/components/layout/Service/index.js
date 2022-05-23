import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faMobileScreen, faEnvelopeOpenText, faSquarePhoneFlip, faLayerGroup,faGem,faDesktop, faBook, faUserGroup, faRocket, faDisplay } from '@fortawesome/free-solid-svg-icons'

export default function Service() {
  return (
    
      <div>
          <div className="services">
        <h1 className="services-title">Our Services</h1>
      </div>
      <div className="services-option">
        <div className="services-option-above  ">
          <div className="above-one frame bro">
            <div className="ic"><a> <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon></a></div>
            <h1 className="title">Web Development</h1>
            <p className="jus">The web development experts at VolanSoft help our clients with numerous aspects of the development process. We specialize in PHP, JS, and Java along with several other complex technologies.</p>
          </div>

          <div className="above-one frame bro">
          <div className="ic"><a> <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon></a></div>
            <h1 className="title">Mobile App Development</h1>
            <p className="jus">With the technology team proficient in mobile architecture, testing and coding, VolanSoft builds and maintains Android, and iOS applications for its clients. We help our clients no matter what.</p>
          </div>

          <div className="above-one frame bro">
            <div className="ic"><a> <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon></a></div>
            <h1 className="title">Digital Marketing</h1>
            <p className="jus">Regardless of your market reach, internet marketing plays a crucial role in your business. Our Web Marketing team helps businesses from different industries, while customizing the services provided to them.</p>
          </div>
        </div>
        <div className="services-option-below">
          <div className="above-one frame bro">
            <div className="ic"><a> <FontAwesomeIcon icon={faDisplay}></FontAwesomeIcon></a></div>
            <h1 className="title">User Experience Design</h1>
            <p className="jus">VolanSoft is one among the best UX design firms out there, with a proven track record of handcrafting stunning User Experience designs to meet its clients’ goals and vision.We believe that UX design is more about content-centric than user-centric. Our professional team crafts innovative experiences.</p>
          </div>

          <div className="above-one frame bro">
            <div className="ic"><a> <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></a></div>
            <h1 className="title">Mobile App Development</h1>
            <p className="jus">We have extensive experience and comprehensive knowledge in Blockchain development, we have gained a detailed understanding of Blockchain technology, cloud services, AI and IoT. This makes our team deliver excellent Blockchain development services.</p>
          </div>

          <div className="above-one frame bro">
            <div className="ic"><a> <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></a></div>
            <h1 className="title">IT Consultancy</h1>
            <p className="jus">We are a committed with best IT company consulting services company dedicated to empowering enterprises to thrive in the current complicated business atmosphere. We help our clients in defining the quantifiable business profits which can be achieved together. </p>
          </div>
        </div>
      </div>
      </div>
    
  )
}
