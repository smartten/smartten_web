import React from 'react'
import './style.css'

function ServicePostBanner( {title, description, img}) {
  return (
        <section className="banner_star">
          <div className="inner-bannner-sec">
            <div id="layout" className="sh_stars">
              <div id="ShootingStarParams"></div>
            </div>
            <div className="stars-back"></div>
            <div className="stars-middle"></div>
            <div className="bg center"></div>
            <div className="container">
              <div className="banner-logo-sec">
                <img src={img} alt="service post" />
              </div>
              <div className="banner-content-sec">
                <h1>{title}</h1>
                <h4>{description}</h4>
              </div>
            </div>
          </div>
      </section>
  )
}

export default ServicePostBanner