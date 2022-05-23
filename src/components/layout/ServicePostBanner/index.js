import React from 'react'
import './style.css'

function ServicePostBanner( {title, description}) {
  return (
        <div className="service-post-banner">
          <div className="post-banner-images">
              <div className="service-stars-image2">
              </div>
              <div className="service-stars-image1">
              </div>
          </div>
          <div className="post-banner-content">
            <div className="banner-content-container">
                <div className="banner-content-image"> 
                    <img src={require('../../../assets/images/service-post-image1.png')} alt="service post" />
                </div>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
          </div>  
    </div>
  )
}

export default ServicePostBanner