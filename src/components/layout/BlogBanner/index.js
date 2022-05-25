import React from 'react'
import Fade from 'react-reveal/Fade';
import './style.css'

function Banner({ title, backgroundName, description}) {
    return(
        <div className="blog-banner" >
            <img src={require(`../../../assets/images/${backgroundName}`)}  alt={backgroundName}/>
                <div className="banner-container">
                    <Fade bottom>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                    </Fade>
                </div>
        </div>
    )
  
}

export default Banner