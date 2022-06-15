import React from 'react'
import './style.css'
import episerverSvg from '../../../assets/images/episerver.svg'

function TechnologiesCompetenciesRow({contentList}) {
  return (
    <div className="technologies-competencies">
        <div className="container">
            <h2>Our key competencies</h2>
            <ul>
                {contentList.map((content, index) => (
                    <li key={index}>
                        {content}
                    </li>
                ))}
            </ul>
            <div>
                <img src={episerverSvg} alt=" " />
                <img src={require('../../../assets/images/LogoGoldAppDevSmall.png')} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesCompetenciesRow