import React from 'react'
import background from '../../../img/s1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCheck, faEnvelopesBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import CountUp from 'react-countup';
import './style.css'

export default function Banner() {
  return (
        <div className="menu" style={{ backgroundImage: `url(${background})` }}>
            <div className="menu-container ">
                {/* <div className="menu-left">
                    <div className="menu-logo">
                        <a to="/">
                            VolanSoft
                        </a>
                    </div>
                </div> */}
                <div className="menu-right">
                    <div className="menu-item">
                    
                        <a className='menu-link' to="/">
                          
                        </a>
                    </div>
                    <div className="menu-item">
                        {/* <a className="menu-link" to="/about">
                            About us
                        </a> */}
                        
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className="intro">
                <div>
                    <h1 className="titl">ENCODE INNOVATION </h1> 
                    <h1 className="titl">INTO YOUR BUSINESS</h1> 
                     
                    <p className="titl-desc">We love helping start-up become brand names and corporation launch new products</p>
                    <button className="qoute"><a href="/">GET A FREE QUOTE</a></button>
                </div>
                
                <div className="notice">
                      <div className="notice-item">
                          <span>
                            <CountUp start={0} end={100} duration={1.5} />
                            +
                          </span>
                          <p className="menu-desc">Happy Clients</p>

                      </div>
                      <div className="notice-item">
                            <span>
                                <CountUp start={0} end={82} duration={1.5} />
                                %
                            </span>
                          
                          <p className="menu-desc textWhite">Repeat Clients</p>

                      </div>
                      <div className="notice-item">
                          <span>
                            <CountUp start={0} end={300} duration={1.5} />
                            +
                          </span>
                          <p className="menu-desc">Finished Project</p>

                      </div>
                      <div className="notice-item">
                          <span>
                            <CountUp start={0} end={20} duration={1.5} />
                            +
                          </span>
                          <p className="menu-desc">Countries</p>

                      </div>

                      <div className="notice-item">
                          <span>
                            <CountUp start={0} end={15} duration={1.5} />
                            +
                          </span>
                          <p className="menu-desc">Resource Strength</p>

                      </div>
                </div>
            </div>    
        </div>
       
  )
}
