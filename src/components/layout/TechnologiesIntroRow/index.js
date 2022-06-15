import React from 'react'
import './style.css'

function TechnologiesIntroRow( {imgName, h2, h3, p} ) {
  return (
    <div className="technologies-intro-row">
        <div className="container">
            <div className="col-md-6 col-sm-12 col-12">
                <div className="intro-img">
                    <img src={require(`../../../assets/images/${imgName}`)} alt="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
                <div className="intro-content">
                    <h2>{h2}</h2>
                    <h3>{h3}</h3>
                    <p>{p}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesIntroRow