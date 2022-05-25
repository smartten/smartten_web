import React from 'react'
import './style.css'
import Fade from 'react-reveal/Fade';

function AboutRow({ title, imgSrc, details }) {
  
  return (
      <div className="about-row">
        <div className="row-img">
        <Fade bottom>
          <img src={require(`../../../assets/images/${imgSrc}`)} alt="Trust" />
            
            </Fade>
        </div>
        <div className="row-details">
          <Fade bottom>
            <h2>{title}</h2>	

          </Fade>
          <ul className="details-ul">			
            {details.map((detail,index) => (
              <div key={index} className="details-li">
                <i className="fa-solid fa-circle-check"></i>
                <li >{detail}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>

  )
}

export default AboutRow