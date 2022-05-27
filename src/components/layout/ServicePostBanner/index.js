import React from 'react'
import './style.css'

function ServicePostBanner( {title, description}) {
  return (
        // <div className="service-post-banner">
        //   <div className="post-banner-images">
        //       <div className="service-stars-image2">
        //       </div>
        //       <div className="service-stars-image1">
        //       </div>
        //   </div>
        //   <div className="post-banner-content">
        //     <div className="banner-content-container">
        //         <div className="banner-content-image"> 
        //             <img src={require('../../../assets/images/service-post-image1.png')} alt="service post" />
        //         </div>
        //       <h2>{title}</h2>
        //       <h3>{description}</h3>
        //     </div>
        //   </div>  
        // </div>
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
                <img src={require('../../../assets/images/service-post-image1.png')} alt="service post" />
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