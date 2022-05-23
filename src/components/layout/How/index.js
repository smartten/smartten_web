import React from 'react'
import background from '../../../img/dark_dot.jpg'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faLocationDot, faEnvelopeOpenText, faSquarePhoneFlip, faLayerGroup,faGem, faScrewdriverWrench, faPenNib, faTabletScreenButton, faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function How() {
  return (
    <div>
        
            <nav className="how" style={{ backgroundImage: `url(${background})` }}>
                <div className="titl">
                    <h1>How We Stand Out</h1>

                </div>

                <div className="desc">
                    <div className="desc-container">
                        <div className="desc-one-t">
                            <div className="icon"><a> <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon></a></div>
                            <h1 className="font">Full-Stack Development</h1>
                            <p>We do it all. Top to Bottom. Front to Back.</p>
                        </div>

                        <div className="desc-one-t">
                            <div className="icon"><a> <FontAwesomeIcon icon={faScrewdriverWrench}></FontAwesomeIcon></a></div>
                            <h1 className="font">Easily Updatable</h1>
                            <p className="icon-bt-h">We build with the future in mind by ensuring future updates are easy and quick</p>
                        </div>

                        <div className="desc-one-t">
                            <div className="icon"><a> <FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon></a></div>
                            <h1 className="font">Fabulous Design</h1>
                            <p className="icon-bt-h">We focus a lot of effort on design. What looks good, feels good.</p>
                        </div>
                        <div className="desc-one-t">
                        <div className="icon"><a> <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon></a></div>
                            <h1 className="font">Performance</h1>
                            <p>We create light-weight, high-speed software</p>
                        </div>

                        <div className="desc-one-t">
                            <div className="icon"><a> <FontAwesomeIcon icon={faTabletScreenButton}></FontAwesomeIcon></a></div>
                            <h1 className="font">Fully Responsive</h1>
                            <p>Mobile is the future... We design for it</p>
                        </div>

                        <div className="desc-one-t">
                            <div className="icon"><a> <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></a></div>
                            <h1 className="font">Support</h1>
                            <p>We are always here for you 24/7</p>
                        </div>
                    </div>
                </div>

            </nav>
       
    </div>
  )
}
